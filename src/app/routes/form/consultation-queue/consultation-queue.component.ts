import { QueryRef } from 'apollo-angular';
import {
  Component,
  OnInit,
  TemplateRef,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import {
  GetUser,
  GetUserGQL,
  UserWhereInput,
  GetLogRequestGQL,
  GetLogRequest,
  LogRequestWhereInput,
  DestroyLogGQL,
  LogRequestUpdateInput,
  LogRequestWhereUniqueInput,
  PutLogRequestGQL,
  LogRequestAppUpdateManyWithoutLogRequestIdInput,
  LogRequestAppCreateWithoutLogRequestIdInput,
  LogRequestOrderByInput,
  SortOrder,
} from '@shared';

import { Subscription } from 'rxjs';
import { NzModalService, NzModalRef } from 'ng-zorro-antd/modal';
import { NzMessageService, } from 'ng-zorro-antd/message';
import { STComponent, STColumn, STData, STPage, STChange, STColumnSort } from '@delon/abc/st';
import * as moment from 'moment';
import { MtVocabHelper } from '@shared/helper';
import { map, tap, take } from 'rxjs/operators';
import { ACLService } from '@delon/acl';
import { SFSchema, SFComponent } from '@delon/form';
import { SettingsService } from '@delon/theme';
import { ActivatedRoute, Router } from '@angular/router';
import { assoc, clone, filter, insertAll, prop } from 'ramda';

@Component({
  selector: 'app-consultation-queue',
  templateUrl: './consultation-queue.component.html',
  styleUrls: ['./consultation-queue.component.less'],
})
export class ConsultationQueueComponent implements OnInit, OnDestroy {
  @Input() parent: boolean;
  @Output() dataUser = new EventEmitter<GetUser.Users>();
  @ViewChild('card', { static: true }) card: ElementRef;
  @ViewChild('modalContent', { static: true }) modalEl: TemplateRef<{}>;
  @ViewChild('sf') sf: SFComponent;

  q: any = {
    clientName: null,
    ppName: null,
    noReg: null,
  };
  data: GetLogRequest.LogRequests[] = [];
  dataSelected: GetUser.Users | any;
  mode = '';
  logRequests: QueryRef<GetLogRequest.Query, GetLogRequest.Variables>;
  logRequestsObs: Subscription;
  loading = false;
  modalInstance: NzModalRef;
  @ViewChild('st', { static: true })
  st: STComponent;
  editData: any = {};

  columns: STColumn[] = [
    {
      title: 'Action',
      buttons: [
        {
          text: 'View Kasus',
          click: (item: any) => {
            this.router.navigateByUrl('form/case/view/' + item.caseId.id);
          },
          iif: (item: any) => item.caseId,
        },
        {
          text: 'Batalkan',
          click: (item: any) => {
            this.dataMutationUpdate(this.processDataUnassign(item), { ID: item.ID });
          },
          iif: item => {
            if (
              this.aclService.data.roles.find(el => el === '1') &&
              moment().isSame(moment(item.tglRequest), 'day') &&
              item.statusRequest === '1'
            ) {
              return true;
            } else if (this.aclService.data.roles.find(el => el === '8')) {
              return true;
            } else {
              return false;
            }
          },
        },
        {
          text: 'Tetapkan PP',
          click: (item: any) => {
            this.editData = item;
            // console.log(this.editData);
            this.getData();
            this.mode = 'edit';
            this.edit(this.modalEl, 'Edit Data');
          },
          iif: item => {
            if (
              (this.aclService.data.roles.find(el => el === '5')) &&
              moment().isSame(moment(item.tglRequest), 'day') &&
              item.statusRequest === '0'
            ) {
              return true;
            } else if (this.aclService.data.roles.find(el => el === '8')) {
              return true;
            } else {
              return false;
            }
          },
        },
        {
          text: 'Hapus Antrian',
          click: (item: any) => {
            this.destroyLog(item.ID);
          },
          iif: item => {
            if (this.aclService.data.roles.find(el => el === '8')) {
              return true;
            } else if (
              this.aclService.data.roles.find(el => el === '1') &&
              moment().isSame(moment(item.tglRequest), 'day') &&
              item.statusRequest === '0'
            ) {
              return true;
            } else {
              return false;
            }
          },
        },
      ],
      fixed: 'left',
      width: '120px',
    },
    {
      title: 'Tgl Request',
      index: 'tglRequest',
      type: 'date',
      sort: {
        default: 'descend',
        compare: null
      },
    },
    {
      title: 'Nomor Registrasi',
      index: 'applicationId.noReg',
    },
    {
      title: 'Klien',
      index: 'applicationId.clients',
      format: (item, col) => {
        const formatText = item.applicationId.clients.map(val => {
          return val.personId.namaLengkap;
        });
        formatText.sort();
        let concattedText = '';
        for (const a of formatText) {
          concattedText === '' ? (concattedText = a) : (concattedText = concattedText + ', ' + a);
        }
        return concattedText;
      },
    },
    {
      title: 'PP dan APP',
      index: 'pp',
      format: (item, col) => {
        const formatText = item.pp.map(val => {
          return val.appConsultation.name;
        });
        formatText.sort();
        let concattedText = '';
        for (const a of formatText) {
          concattedText === '' ? (concattedText = a) : (concattedText = concattedText + ', ' + a);
        }
        return concattedText;
      },
    },
    {
      title: 'Tahap Kasus',
      index: 'applicationId.tahapTeks',
    },
    {
      title: 'Status Request',
      index: 'statusRequest',
      format: (item, col) => {
        switch (item.statusRequest) {
          case '0':
            return 'Masuk Antrian Konsultasi';
          case '1':
            return 'Sudah Ditetapkan PP';
          case '2':
            return 'Sudah Konsultasi';

          default:
            break;
        }
      },
    },
    {
      title: 'Kadaluarsa',
      index: 'kadaluarsa',
      type: 'date',
      format: (item, col) => {
        // console.log(moment(item.tglRequest).unix() - moment().unix());
        if (moment().isAfter(moment(item.tglRequest), 'day')) {
          return 'Ya';
        } else {
          return 'Tidak';
        }
      },
    },
  ];
  selectedRows: STData[] = [];
  description = '';
  totalCallNo = 0;
  expandForm = false;

  page: STPage = { front: false, show: true, showSize: true };

  orderBy: LogRequestOrderByInput[] = [{ tglRequest: 'desc' as SortOrder }]

  constructor(
    public msg: NzMessageService,
    private modalSrv: NzModalService,
    private cdr: ChangeDetectorRef,
    public mtVocab: MtVocabHelper,
    private getUserGQL: GetUserGQL,
    private getLogRequestGQL: GetLogRequestGQL,
    public aclService: ACLService,
    private destroyLogGQL: DestroyLogGQL,
    private mtVocabHelper: MtVocabHelper,
    private putLogRequestGQL: PutLogRequestGQL,
    private settingService: SettingsService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.logRequests = this.getLogRequestGQL.watch(
      // <GetLogRequest.Variables>{ where: { pp_some: { appConsultation: { id: this.settingService.user.id } } } },
      this.searchGenerator(),
      {
        fetchPolicy: 'network-only',
      },
    );
    // console.log('sampe sini');
    this.loading = true;
    this.logRequestsObs = this.logRequests.valueChanges
      .pipe(
        map(async result => {
          const tempLog = [];
          for (const a of result.data.logRequests) {
            let b = <any>{ ...a };
            b.noReg = a.applicationId.noReg;
            b.caseTitle = a.caseId ? a.caseId.judulKasus : '';
            b.dudukPerara = a.applicationId.dudukPerara;
            let applicationId = clone(b.applicationId)

            applicationId.tahapTeks = await this.mtVocabHelper.translateMtVocab(b.applicationId.tahap);

            b.applicationId = applicationId

            tempLog.push(b);
          }
          return { tempLog, aggregateLogRequest: result.data.aggregateLogRequest };
        }),
        tap(() => (this.loading = false)),
      )
      .subscribe(async res => {
        // console.log(res);
        const data = await res;
        this.data = data.tempLog
        this.st.total = data.aggregateLogRequest.count.ID
        console.log(data)
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.logRequestsObs.unsubscribe();
  }

  getData() {
    this.loading = true;
    this.logRequests
      .refetch(this.searchGenerator())
      .then(async res => {
        const tempLog = [];
        for (const a of res.data.logRequests) {
          const b = <any>{ ...a };
          b.noReg = a.applicationId.noReg;
          b.caseTitle = a.caseId.judulKasus ? a.caseId.judulKasus : 'Case Belum Dibuat!';
          b.dudukPerara = a.applicationId.dudukPerara;
          b.applicationId.tahapTeks = await this.mtVocabHelper.translateMtVocab(b.applicationId.tahap);
          tempLog.push(b);
        }
        this.data = tempLog;
        this.st.total = res.data.aggregateLogRequest.count.ID
      })
      .finally(() => {
        this.loading = false;
      });
  }

  searchGenerator(): GetLogRequest.Variables {
    if (this.aclService.data.roles.find(el => el === '5'))
      return <GetLogRequest.Variables>{
        where: this.mtVocabHelper.whereHelper({
          jenisRequest: { equals: '1011' },
          AND: [
            !this.q.ppName
              ? null : {
                pp: { some: { appConsultation: { is: { name: { contains: this.q.ppName } } } } },
              },
            !this.q.clientName
              ? null : {
                applicationId: {
                  is: { clients: { some: { personId: { is: { namaLengkap: { contains: this.q.clientName } } } } } }
                },
              },
            !this.q.noReg
              ? null : {
                applicationId: {
                  is: { noReg: { contains: this.q.noReg } }
                },
              },
          ].filter(res => res),
        }),
        take: this.st.ps,
        skip: this.st.ps * this.st.pi === this.st.ps ? 0 : this.st.ps * this.st.pi - this.st.ps,
        orderBy: this.orderBy

      };
    // if (this.aclService.data.roles.find(el => el === '3' || el === '4')) console.log('nemu woy');
    // if (this.q.ppName || this.q.clientName || this.q.noReg) {
    //   return <GetLogRequest.Variables>{
    //     where: <LogRequestWhereInput>{
    //       OR: <LogRequestWhereInput[]>[
    //         this.aclService.data.roles.find(el => el === '3' || el === '4')
    //           ? { pp_some: { appConsultation: { id: this.settingService.user.id } } }
    //           : {},
    //         {
    //           pp_some: { appConsultation: { name_contains: this.q.ppName === '' ? null : this.q.ppName } },
    //         },
    //         {
    //           jenisRequest: '1011',
    //         },
    //         {
    //           applicationId: {
    //             clients_some: {
    //               personId: { namaLengkap_contains: this.q.clientName === '' ? null : this.q.clientName },
    //             },
    //           },
    //         },
    //         {
    //           applicationId: {
    //             noReg_contains: this.q.noReg === '' ? null : this.q.noReg,
    //           },
    //         },
    //       ],
    //     },
    //   };
    // }
    // console.log('masuk sini');
    return <GetLogRequest.Variables>{
      where: <LogRequestWhereInput>this.aclService.data.roles.find(el => el === '3' || el === '4')
        ? this.mtVocabHelper.whereHelper({
          jenisRequest: { equals: '1011' },
          AND: [
            {
              pp: { some: { appConsultation: { is: { id: { equals: Number(this.settingService.user.id) } } } } }
            },
            !this.q.ppName
              ? null : {
                pp: { some: { appConsultation: { is: { name: { contains: this.q.ppName } } } } },
              },
            !this.q.clientName
              ? null : {
                applicationId: {
                  is: { clients: { some: { personId: { is: { namaLengkap: { contains: this.q.clientName } } } } } }
                },
              },
            !this.q.noReg
              ? null : {
                applicationId: {
                  is: { noReg: { contains: this.q.noReg } }
                },
              },
          ].filter(res => res),
        })
        : {},
      take: this.st.ps,
      skip: this.st.ps * this.st.pi === this.st.ps ? 0 : this.st.ps * this.st.pi - this.st.ps,
      orderBy: this.orderBy
    };
  }

  stChange(e: STChange) {
    if (e.type == 'sort') {
      const sortObj = e.sort.column.sort as STColumnSort<any>
      this.sortOrder(sortObj.key, sortObj.default);
      this.getData();
    }
    if (e.type === 'pi' || e.type === 'ps') {
      this.getData();
    }
  }

  sortOrder(key: string, order: string | null) {
    if (!order) {
      this.orderBy = filter(((x) => !!!prop(key as any, x)), this.orderBy)
      return
    }
    this.orderBy = insertAll(0, assoc(key, order === "ascend" ? 'asc' : 'desc', {}) as any, filter(((x) => !!!prop(key as any, x)), this.orderBy));
  }


  add(tpl: TemplateRef<{}>, title: string) {
    this.mode = 'create';
    this.dataSelected = <GetUser.Users>{};
    this.modalInstance = this.modalSrv.create({
      nzTitle: title,
      nzContent: tpl,
      nzWidth: this.card.nativeElement.offsetWidth,
      nzFooter: null,
      nzBodyStyle: {},
    });
  }

  checkDoubleAssign() {
    if (this.editData.statusRequest !== '0') return true;
    return false;
  }

  async edit(tpl: TemplateRef<{}>, title: string) {
    Object.defineProperties(this.schema, {
      properties: {
        value: {
          id: {
            type: 'string',
            ui: {
              hidden: true,
            },
          },
          noReg: {
            type: 'string',
            title: 'No Reg',
            readOnly: true,
          },
          dudukPerara: {
            type: 'string',
            title: 'Duduk Perkara',
            readOnly: true,
            ui: {
              widget: 'custom',
            },
          },
          caseTitle: {
            type: 'string',
            title: 'Judul Kasus',
            readOnly: this.isCaseTitleDisabled(),
          },
          handlingPP: {
            type: 'string',
            title: 'PP yang pernah menangani',
            readOnly: true,
          },
          listPP: {
            type: 'string',
            title: 'PP',
            ui: {
              widget: 'select',
              asyncData: () => this.mtVocabHelper.getUsers(['3']),
            },
          },
          listAPP: {
            type: 'string',
            title: 'APBH',
            ui: {
              widget: 'select',
              mode: 'multiple',
              asyncData: () => this.mtVocabHelper.getUsers(['4']),
            },
          },
        },

        ui: {
          size: 'large',
        },
      },
    });
    // console.log('caseId.id' in this.editData);
    console.log(this.editData);
    if ('caseId' in this.editData) {
      if (this.editData.caseId) {
        this.editData.handlingPP = await this.mtVocabHelper.findHandlingPPString(Number(this.editData.caseId.id));
        console.log(this.editData);
      }
    }
    this.modalInstance = this.modalSrv.create({
      nzTitle: title,
      nzContent: tpl,
      nzWidth: this.card.nativeElement.offsetWidth,
      nzFooter: null,
      nzBodyStyle: {},
    });
  }

  closeModal() {
    if (this.modalInstance) this.modalInstance.close();
    this.getData();
  }

  filterSearch() {
    this.st.pi = 1;
    setTimeout(() => this.getData());
  }


  destroyLog(id) {
    this.destroyLogGQL.mutate({ where: { ID: { equals: id } } }).subscribe(
      res => {
        this.msg.success('Log sukses dihapus');
        this.getData();
      },
      error => {
        this.msg.error('Log Gagal Dihapus');
        this.msg.error(JSON.stringify(error));
      },
    );
  }

  schema: SFSchema = {
    properties: {
      ID: {
        type: 'string',
        ui: {
          hidden: true,
        },
      },
      noReg: {
        type: 'string',
        title: 'No Reg',
        readOnly: true,
      },
      dudukPerara: {
        type: 'string',
        title: 'Duduk Perkara',
        readOnly: true,
        ui: {
          widget: 'custom',
        },
      },
      caseTitle: {
        type: 'string',
        title: 'Judul Kasus',
        readOnly: this.isCaseTitleDisabled(),
      },
      handlingPP: {
        type: 'string',
        title: 'PP yang pernah menangani',
        readOnly: true,
      },
      listPP: {
        type: 'string',
        title: 'PP',
        ui: {
          widget: 'select',
          asyncData: () => this.mtVocabHelper.getUsers(['3']),
        },
      },
      listAPP: {
        type: 'string',
        title: 'APBH',
        ui: {
          widget: 'select',
          mode: 'multiple',
          asyncData: () => this.mtVocabHelper.getUsers(['4']),
        },
      },
    },
    required: ['listPP'],
    ui: {
      size: 'large',
    },
  };

  isCaseTitleDisabled() {
    // console.log(this.editData.caseId ? true : false);
    if (this.editData.caseId === '') {
      return true;
    } else {
      return false;
    }
  }

  async submit(value: any) {
    // console.log(value);
    const res = await this.logRequests.refetch(this.searchGenerator());

    const tempLog = [];
    for (const a of res.data.logRequests) {
      const b = <any>{ ...a };
      tempLog.push(b);
    }
    this.data = tempLog;
    const el = this.data.find(el => el.ID === value.ID);
    if (!el) {
      this.msg.error('Request Konsultasi Sudah Tidak Ada');
      this.closeModal();
      return;
    } else if (el.statusRequest !== '0') {
      this.msg.error('Konsultasi Sudah Ditetapkan PP');
      this.closeModal();
      return;
    }

    this.dataMutationUpdate(this.processDataAssign(value), <LogRequestWhereUniqueInput>{ ID: value.ID });
  }

  processDataAssign(data): LogRequestUpdateInput {
    const listPPAPP = <LogRequestAppCreateWithoutLogRequestIdInput[]>[];
    if ('listAPP' in data) {
      for (const a of data.listAPP) {
        const b = <LogRequestAppCreateWithoutLogRequestIdInput>{
          appConsultation: { connect: { id: a } },
        };
        listPPAPP.push(b);
      }
    }
    listPPAPP.push(<LogRequestAppCreateWithoutLogRequestIdInput>{
      appConsultation: { connect: { id: data.listPP } },
    });
    data.tglRespon = { set: moment().toDate() }
    data.statusRequest = { set: '1' };
    data.pp = <LogRequestAppUpdateManyWithoutLogRequestIdInput>{ create: listPPAPP };
    console.log(data)
    return <LogRequestUpdateInput>{
      pp: data.pp,
      tglRespon: data.tglRespon,
      statusRequest: data.statusRequest,
      caseId: data.caseId
        ? undefined
        : {
          create: {
            judulKasus: data.caseTitle,
            caseClosed: false,
            unlockPk: false,
            lockDitolak: false,
            unlockTransfer: false,
            application: { connect: { id: data.applicationId.id } },
          },
        },
    };
  }

  processDataUnassign(data): LogRequestUpdateInput {
    data.tglRespon = { set: null };
    data.statusRequest = { set: '0' };
    const ppIncluded = data.pp.map(val => val.id);
    data.pp = <LogRequestAppUpdateManyWithoutLogRequestIdInput>{ deleteMany: [{ id: { in: [...ppIncluded] } }] };
    return <LogRequestUpdateInput>{
      pp: data.pp,
      tglRespon: data.tglRespon,
      statusRequest: data.statusRequest,
    };
  }

  dataMutationUpdate(data: LogRequestUpdateInput, id: LogRequestWhereUniqueInput) {
    this.putLogRequestGQL
      .mutate({ where: id, data: data })
      .pipe(take(1))
      .subscribe(
        () => {
          this.msg.success('Data Berhasil Diubah');
          this.closeModal();
        },
        error => {
          this.msg.error('Data Gagal Diubah');
          this.msg.error(JSON.stringify(error));
        },
      );
  }
}
