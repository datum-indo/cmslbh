import { QueryRef } from 'apollo-angular';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  TemplateRef,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import {
  GetUser,
  GetLogRequest,
  GetUserGQL,
  GetLogRequestGQL,
  DestroyLogGQL,
  PutLogRequestGQL,
  LogRequestWhereInput,
  LogRequestWhereUniqueInput,
  LogRequestUpdateInput,
  LogRequestAppCreateWithoutLogRequestIdInput,
  LogRequestAppUpdateManyWithoutLogRequestIdInput,
  PostLogRequestGQL,
  LogRequestCreateInput,
  PutLogRequestMutationVariables,
  RenamedcaseWhereInput,
  Renamedcase,
  PersonOrderByInput,
  SortOrder,
  LogRequestOrderByInput,
} from '@shared';

import { Subscription } from 'rxjs';
import { NzModalService, NzModalRef } from 'ng-zorro-antd/modal';
import { NzMessageService, } from 'ng-zorro-antd/message';
import { STComponent, STColumn, STData, STPage, STChange, STColumnSort } from '@delon/abc/st';
import * as moment from 'moment';
import { MtVocabHelper } from '@shared/helper';
import { ACLService } from '@delon/acl';
import { SettingsService } from '@delon/theme';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap, take } from 'rxjs/operators';
import { SFSchema, SFComponent } from '@delon/form';
import { assoc, filter, insertAll, prop } from 'ramda';

@Component({
  selector: 'app-referral-queue',
  templateUrl: './referral-queue.component.html',
  styleUrls: ['./referral-queue.component.less'],
})
export class ReferralQueueComponent implements OnInit, OnDestroy {
  @Input() parent: boolean;
  @Output() dataUser = new EventEmitter<GetUser.Users>();
  @ViewChild('card', { static: true }) card: ElementRef;
  @ViewChild('modalContent', { static: true }) modalEl: TemplateRef<{}>;
  @ViewChild('sfCreateKasus') sfCreateKasus: SFComponent;
  @ViewChild('modalContentKabid', { static: true }) modalElKabid: TemplateRef<{}>;

  q: any = {
    clientName: null,
    ppName: null,
    noReg: null,
  };
  data: GetLogRequest.LogRequests[] = [];
  dataKasus: any;
  dataSelected: GetUser.Users | any;
  mode = '';
  logRequests: QueryRef<GetLogRequest.Query, GetLogRequest.Variables>;
  losgRequestsObs: Subscription;
  loading = false;
  modalInstance: NzModalRef;
  @ViewChild('st', { static: true })
  st: STComponent;
  editData: any;
  editDataTemp: any;
  editDataKabid: any;
  query = {
    where: <RenamedcaseWhereInput>{
      AND: [],
      OR: [
        { consultations: { some: { apps: { some: { appConsultation: { is: { id: { equals: this.settingService.user.id } } } } } } } },
        { pk: { is: { ppPendamping: { is: { id: { equals: this.settingService.user.id } } } } } },
      ],
    },
  };

  caseParam = '';

  public momentF(data) {
    return moment(data);
  }

  columns: STColumn[] = [
    {
      title: 'Action',
      buttons: [
        {
          text: 'View Kasus',
          click: (item: any) => {
            this.router.navigate([]).then(res=>{window.open('#/form/case/view/' + item.caseId.id,'_blank')});
          },
        },
        {
          text: 'Batalkan',
          click: (item: any) => {
            this.destroyLog(item.ID);
          },
          iif: item => {
            if (
              this.settingService.user.id === item.requestBy.id &&
              moment().isSame(moment(item.tglRequest), 'day') &&
              item.tanggapanRequest === '98011'
            ) {
              return true;
            } else {
              return false;
            }
          },
        },
        {
          text: 'Tanggapi',
          click: (item: any) => {
            this.editDataKabid = item;
            // console.log(this.editDataKabid);
            this.edit(this.modalElKabid, 'Tanggapi Rekomendasi');
          },
          iif: item => {
            if (
              this.settingService.user.roles_type.find(el => el.type.id === 5) &&
              moment().isSameOrBefore(moment(item.tglExpired), 'day') &&
              item.tanggapanRequest === '98011'
            ) {
              return true;
            } else {
              return false;
            }
          },
        },
        // {
        //   text: 'Tetapkan PP',
        //   click: (item: any) => {
        //     this.editData = item;
        //     this.mode = 'edit';
        //     this.edit(this.modalEl, 'Edit Data');
        //   },
        //   iif: item => {
        //     if (
        //       this.aclService.data.roles.find(el => el === '2') &&
        //       moment().isSameOrBefore(moment(item.tglRequest), 'day') &&
        //       item.statusRequest === '0'
        //     ) {
        //       return true;
        //     } else if (this.aclService.data.roles.find(el => el === '8')) {
        //       return true;
        //     } else {
        //       return false;
        //     }
        //   },
        // },
        {
          text: 'Hapus Antrian',
          click: (item: any) => {
            this.destroyLog(item.ID);
          },
          iif: item => {
            if (this.aclService.data.roles.find(el => el === '8')) {
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
      title: 'Rekomendasi',
      index: 'networkId',
      format: item => {
        const a = item.networkId.name;
        return 'Referral ke ' + a;
      },
    },
    {
      title: 'Tanggapan',
      type: 'badge',
      index: 'tanggapanRequest',
      badge: {
        8111: { text: 'Diterima Referral', color: 'success' },
        9111: { text: 'Ditolak Referral', color: 'warning' },
        98011: { text: 'Belum Ditanggapi', color: 'error' },
      },
    },
    {
      title: 'Catatan Referral',
      index: 'tanggapanRequestIsi',
    },
    {
      title: 'Klien',
      index: 'applicationId.clients',
      format: item => {
        // console.log(item);
        return item.personId.namaLengkap;
      },
    },
    {
      title: 'Judul Kasus',
      index: 'caseId.judulKasus',
    },
    {
      title: 'Tahap Kasus',
      index: 'applicationId.tahapTeks',
    },
    {
      title: 'Tgl Expired',
      index: 'tglExpired',
      type: 'date',
      sort: {
        default: null,
        compare: null
      },
    },
    {
      title: 'Request By',
      index: 'requestBy.name',
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
    private getLogRequestGQL: GetLogRequestGQL,
    public aclService: ACLService,
    private destroyLogGQL: DestroyLogGQL,
    public mtVocabHelper: MtVocabHelper,
    private putLogRequestGQL: PutLogRequestGQL,
    private settingService: SettingsService,
    private router: Router,
    private postLogRequestGQL: PostLogRequestGQL,
  ) { }

  ngOnInit() {
    this.logRequests = this.getLogRequestGQL.watch(
      // <GetLogRequest.Variables>{ where: { pp_some: { appConsultation: { id: this.settingService.user.id } } } },
      this.searchGenerator(),
      {
        fetchPolicy: 'no-cache',
      },
    );
    // console.log('sampe sini');
    this.loading = true;
    this.losgRequestsObs = this.logRequests.valueChanges
      .pipe(
        map(async result => {
          const tempLog = [];
          for (const a of result.data.logRequests) {
            const b = <any>{ ...a };
            // console.log(b.applicationId.jenisRequest);
            b.noReg = a.applicationId.noReg;
            b.caseTitle = a.caseId ? a.caseId.judulKasus : '';
            b.dudukPerara = a.applicationId.dudukPerara;
            b.applicationId.tahapTeks = await this.mtVocabHelper.translateMtVocab(b.applicationId.tahap);
            b.jenisRequestTeks = await this.mtVocabHelper.translateMtVocab(b.jenisRequest);
            b.tanggapanRequestTeks = await this.mtVocabHelper.translateMtVocab(b.tanggapanRequest);
            tempLog.push(b);
          }
          return { tempLog, aggregateLogRequest: result.data.aggregateLogRequest };
        }),
        tap(() => (this.loading = false)),
      )
      .subscribe(async res => {

        const data = await res;
        this.data = data.tempLog
        this.st.total = data.aggregateLogRequest.count.ID
      });
  }

  ngOnDestroy(): void {
    this.losgRequestsObs.unsubscribe();
  }

  getDataKasus(event) {
    // console.log(event);
    this.modalInstance.close();
    this.editDataTemp = event;
    this.sfCreateKasus.refreshSchema();
    this.sfCreateKasus.setValue('/caseIdReturned', event);
    // console.log(this.sfCreateKasus.getValue('/caseIdReturned'));
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
          b.caseTitle = a.caseId ? a.caseId.judulKasus : '';
          b.dudukPerara = a.applicationId.dudukPerara;
          b.applicationId.tahapTeks = await this.mtVocabHelper.translateMtVocab(b.applicationId.tahap);
          b.jenisRequestTeks = await this.mtVocabHelper.translateMtVocab(b.jenisRequest);
          b.tanggapanRequestTeks = await this.mtVocabHelper.translateMtVocab(b.tanggapanRequest);
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
    // if (this.aclService.data.roles.find(el => el === '2'))
    //   return <GetLogRequest.Variables>{
    //     where: { jenisRequest_in: ['3111', '4111', '5111'] },
    //   };
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
    const isAdmin = this.settingService.user.roles_type.find(el => el.type.id === 5)
    let requestByFilter = null;
    if (isAdmin) {
      requestByFilter = !this.q.ppName ? null : {
        requestBy: {
          is: { name: { contains: this.q.ppName } }
        },
      }
    } else {
      requestByFilter = !this.q.ppName
        ? null : {
          pp: { some: { appConsultation: { is: { name: { contains: this.q.ppName } } } } },
        }
    }
    // if (this.settingService.user.roles_type.find(el => el.type.id === 5)) {
    return <GetLogRequest.Variables>{
      where:
        this.mtVocabHelper.whereHelper(<LogRequestWhereInput>
          {
            requestBy: isAdmin ? {} : { is: { id: { equals: this.settingService.user.id } } },
            jenisRequest: { in: ['2011'] },
            AND: [
              requestByFilter,
              !this.q.clientName
                ? null : {
                  applicationId: {
                    is: { clients: { some: { personId: { is: { namaLengkap: { contains: this.q.clientName } } } } } },
                  },
                },
              !this.q.noReg
                ? null : {
                  applicationId: {
                    is: { noReg: { contains: this.q.noReg }, }
                  },
                },
            ]
              .filter(res => res),
          }
        )
      ,
      take: this.st.ps,
      skip: this.st.ps * this.st.pi === this.st.ps ? 0 : this.st.ps * this.st.pi - this.st.ps,
      orderBy: this.orderBy
    };
    // } else {
    //   return <GetLogRequest.Variables>{
    //     where: <LogRequestWhereInput>{
    //       requestBy: { id: this.settingService.user.id },
    //       jenisRequest_in: ['2011'],
    //       AND: [
    //         this.q.ppName
    //           ? {
    //             pp_some: {
    //               appConsultation: {
    //                 name_contains: this.q.ppName,
    //               },
    //             },
    //           }
    //           : {},
    //         this.q.clientName
    //           ? {
    //             applicationId: {
    //               clients_some: {
    //                 personId: { namaLengkap_contains: this.q.clientName },
    //               },
    //             },
    //           }
    //           : {},
    //         this.q.noReg
    //           ? {
    //             applicationId: {
    //               noReg_contains: this.q.noReg,
    //             },
    //           }
    //           : {},
    //       ],
    //     },
    //   };
    // }
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
    this.modalInstance = this.modalSrv.create({
      nzTitle: title,
      nzContent: tpl,
      nzWidth: this.card.nativeElement.offsetWidth,
      nzFooter: null,
      nzBodyStyle: {},
    });
  }

  addPP(tpl: TemplateRef<{}>, title: string) {
    this.mode = 'create';
    this.modalInstance = this.modalSrv.create({
      nzTitle: title,
      nzContent: tpl,
      nzWidth: this.card.nativeElement.offsetWidth,
      nzFooter: null,
      nzBodyStyle: {},
    });
    this.modalInstance.afterClose.subscribe(res => {
      this.editDataTemp = null;
    });
  }

  edit(tpl: TemplateRef<{}>, title: string) {
    this.modalInstance = this.modalSrv.create({
      nzTitle: title,
      nzContent: tpl,
      nzWidth: this.card.nativeElement.offsetWidth,
      nzFooter: null,
      nzBodyStyle: {},
    });
  }

  closeModal() {
    // console.log(this.modalInstance);
    this.modalSrv.closeAll();
    this.getData();
  }

  filterSearch() {
    this.st.pi = 1;
    setTimeout(() => this.getData());
  }

  destroyLog(id) {
    this.destroyLogGQL.mutate({ where: { ID: { equals: id } } }).subscribe(
      () => {
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
      id: {
        type: 'string',
        ui: {
          hidden: true,
        },
      },
      caseIdReturned: {
        type: 'string',
        title: 'Kasus',
        readOnly: true,
        ui: {
          widget: 'custom',
        },
      },
      networkList: {
        type: 'string',
        title: 'Referral Ke',
        ui: {
          widget: 'select',
          asyncData: () => this.mtVocabHelper.getNetworksEnum('2'),
        },
      },
      client: {
        type: 'string',
        title: 'Klien',
        ui: {
          widget: 'select',
          asyncData: () => this.mtVocabHelper.getClientsEnum(this.editDataTemp.id),
          visibleIf: {
            caseIdReturned: (value: any) => value !== null,
          },
        },
      },
      isiRequest: {
        type: 'string',
        title: 'Catatan',
        ui: { widget: 'textarea', autosize: { minRows: 6, maxRows: 12 } },
      },
    },
    required: ['client', 'networkList', 'caseIdReturned'],
    ui: {
      size: 'large',
    },
  };

  schemaKabid: SFSchema = {
    properties: {
      id: {
        type: 'string',
        ui: {
          hidden: true,
        },
      },
      caseId: {
        type: 'string',
        title: 'Kasus',
        readOnly: true,
        ui: {
          widget: 'custom',
        },
      },
      tanggapanRequest: {
        type: 'string',
        title: 'Tanggapan Referral',
        enum: [{ value: '8111', label: 'Diterima Referral' }, { value: '9111', label: 'Ditolak Referral' }],
        ui: {
          widget: 'select',
        },
      },
      tanggapanRequestIsi: {
        type: 'string',
        title: 'Catatan',
        ui: { widget: 'textarea', autosize: { minRows: 6, maxRows: 12 } },
      },
    },
    required: ['tanggapanRequest', 'tanggapanRequestIsi'],
    ui: {
      size: 'large',
    },
  };

  submitByPP(value: any) {
    // console.log(value);
    this.dataMutationCreate(this.processDataCreateLogRequest(value));
  }
  submitByKabid(value: any) {
    // console.log(value);
    this.dataMutationUpdate(this.processDataUpdateLogRequest(value), value.ID);
  }

  processDataUpdateLogRequest(data): LogRequestUpdateInput | string {
    return <LogRequestUpdateInput>{
      tanggapanRequest: { set: data.tanggapanRequest },
      requestTo: { connect: { id: this.settingService.user.id } },
      tanggapanRequestIsi: { set: data.tanggapanRequestIsi },
      tglRespon: { set: moment().toDate() },
      caseId: {
        update: {
          referrals: {
            create: [
              {
                catatan: data.tanggapanRequestIsi,
                client: { connect: { id: this.editDataKabid.personId.id } },
                createdBy: this.settingService.user.name,
                network: { connect: { id: this.editDataKabid.networkId.id } },
                tglTransfer: moment().toDate(),
              },
            ],
          },
        },
      },
    };
  }
  processDataCreateLogRequest(data): LogRequestCreateInput {
    return <LogRequestCreateInput>{
      caseId: { connect: { id: data.caseIdReturned.id } },
      isiRequest: data.isiRequest,
      applicationId: { connect: { id: data.caseIdReturned.application.id } },
      jenisRequest: '2011',
      networkId: { connect: { id: data.networkList } },
      tanggapanRequest: '98011',
      personId: { connect: { id: data.client } },
      requestBy: { connect: { id: this.settingService.user.id } },
      tglExpired: moment()
        .add(7, 'days')
        .toDate(),
      tglRequest: moment().toDate(),
    };
  }

  dataMutationUpdate(data: LogRequestUpdateInput | string, id: number) {
    // console.log(data);
    if (typeof data === 'string') {
      this.msg.info(data);
      return;
    }
    this.loading = true;
    this.putLogRequestGQL
      .mutate(<PutLogRequestMutationVariables>{ data: data, where: { ID: id } })
      .pipe(take(1))
      .subscribe(
        () => {
          this.msg.success('Data Berhasil Diubah');
          this.closeModal();
          this.loading = false;
        },
        error => {
          this.loading = false;
          this.msg.error('Data Gagal Diubah');
          this.msg.error(JSON.stringify(error));
        },
      );
  }

  dataMutationCreate(data: LogRequestCreateInput) {
    this.loading = true;
    this.postLogRequestGQL
      .mutate({ data: data })
      .pipe(take(1))
      .subscribe(
        () => {
          this.msg.success('Data Berhasil Ditambah');
          this.closeModal();
          this.loading = false;
        },
        error => {
          this.loading = false;
          this.msg.error('Data Gagal Diubah');
          this.msg.error(JSON.stringify(error));
        },
      );
  }

  listClient(item?) {
    if (!item) return '';
    const formatText = item.map(val => {
      return val.personId.namaLengkap;
    });
    formatText.sort();
    let concattedText = '';
    for (const a of formatText) {
      concattedText === '' ? (concattedText = a) : (concattedText = concattedText + ', ' + a);
    }
    return concattedText;
  }
}
