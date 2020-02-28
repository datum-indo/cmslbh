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
  AllPerson,
  AllPersonGQL,
  PersonWhereInput,
  GetApplicationsGQL,
  GetApplications,
  ApplicationWhereInput,
  PostLogRequestGQL,
  PostLogRequestMutationVariables,
  GetLogRequestGQL,
} from '@shared';
import { QueryRef } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { NzModalRef, NzMessageService, NzModalService } from 'ng-zorro-antd';
import { STComponent, STColumn, STData, STChange } from '@delon/abc';
import * as moment from 'moment';
import { _HttpClient, MenuService, SettingsService } from '@delon/theme';
import { MtVocabHelper } from '@shared/helper';
import { map, tap, take } from 'rxjs/operators';
import { ACLService } from '@delon/acl';

@Component({
  selector: 'app-list-application',
  templateUrl: './list-application.component.html',
  styleUrls: ['./list-application.component.less'],
})
export class ListApplicationComponent implements OnInit, OnDestroy {
  @Input() parent: boolean;
  @Output() dataPerson = new EventEmitter<AllPerson.Persons>();
  @ViewChild('card') card: ElementRef;
  @ViewChild('modalContent') modalEl: TemplateRef<{}>;

  q: any = {
    namaKlien: null,
    noReg: null,
    namaWakil: null,
    judulKasus: null,
  };
  data: GetApplications.Applications[] = [];
  dataSelected: any;
  mode = '';
  applications: QueryRef<GetApplications.Query, GetApplications.Variables>;
  personsObs: Subscription;
  urlDocx = `http://${window.location.hostname}:3000/applicationdoc`;
  loading = false;
  modalInstance: NzModalRef;
  @ViewChild('st')
  st: STComponent;

  columns: STColumn[] = [
    {
      title: 'Action',
      fixed: 'left',
      width: '120px',
      buttons: [
        {
          text: 'Select',
          click: (item: any) => {
            this.dataPerson.emit(item);
          },
          iif: () => this.parent,
        },
        {
          text: 'Edit',
          click: (item: any) => {
            item.regDate = moment(item.regDate).toDate();
            this.dataSelected = item;
            this.dataSelected.fileList = item.clients;
            this.mode = 'edit';
            this.edit(this.modalEl, 'Edit Data');
          },
        },
        {
          text: 'Download',
          click: async (item: any) => {
            item.clients[0].personId.pekerjaan = await this.mtVocab.translateMtVocab(
              item.clients[0].personId.pekerjaan,
            );
            this.downloadDocx(item);
          },
          iif: item => item.noReg,
        },
        {
          text: 'Konsultasi',
          click: (item: any) => {
            this.queueConsultation(item);
          },
        },
      ],
    },

    {
      title: 'Nomor Registrasi',
      index: 'noReg',
      sort: {
        compare: (a, b) => {
          const noRegA = a.noReg.toUpperCase();
          const noRegB = b.noReg.toUpperCase();
          if (noRegA < noRegB) {
            return -1;
          }
          if (noRegA > noRegB) {
            return 1;
          }
          return 0;
        },
      },
    },
    {
      title: 'Tanggal Registrasi',
      index: 'regDate',
      type: 'date',
      sort: {
        compare: (a, b) => moment(a.regDate).unix() - moment(b.regDate).unix(),
      },
    },
    {
      title: 'Klien',
      index: 'applicationId.clients',
      format: (item, col) => {
        const formatText = item.clients.map(val => {
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
      title: 'Wakil',
      index: 'wakilId.namaLengkap',
    },
    {
      title: 'Updated At',
      index: 'updatedAt',
      type: 'date',
      sort: {
        default: 'descend',
        compare: (a, b) => moment(a.updatedAt).unix() - moment(b.updatedAt).unix(),
      },
    },
    {
      title: 'Created At',
      index: 'createdAt',
      type: 'date',
      sort: {
        compare: (a: any, b: any) => moment(a.createdAt).unix() - moment(b.createdAt).unix(),
      },
    },
  ];
  selectedRows: STData[] = [];
  description = '';
  totalCallNo = 0;
  expandForm = false;

  constructor(
    public msg: NzMessageService,
    private modalSrv: NzModalService,
    private cdr: ChangeDetectorRef,
    public mtVocab: MtVocabHelper,
    public getApplicationGQL: GetApplicationsGQL,
    public aclSrv: ACLService,
    private postLogRequestGQL: PostLogRequestGQL,
    private settingService: SettingsService,
    private getLogRequestGQL: GetLogRequestGQL,
    public http: _HttpClient,
  ) {}

  ngOnInit() {
    this.applications = this.getApplicationGQL.watch(this.searchGenerator(), {
      fetchPolicy: 'no-cache',
    });
    this.loading = true;
    this.personsObs = this.applications.valueChanges
      .pipe(
        map(result => result.data.applications),
        tap(() => (this.loading = false)),
      )
      .subscribe(res => {
        // console.log(res);
        this.data = res;
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.personsObs.unsubscribe();
  }

  getData() {
    this.loading = true;
    this.applications
      .refetch(this.searchGenerator())
      .then(res => {
        this.data = res.data.applications;
      })
      .finally(() => {
        this.loading = false;
      });
  }

  searchGenerator(): GetApplications.Variables {
    return <GetApplications.Variables>{
      where: <ApplicationWhereInput>{
        AND: <ApplicationWhereInput[]>[
          this.q.judulKasus
            ? {
                case: {
                  judulKasus_contains: this.q.judulKasus,
                },
              }
            : {},
          this.q.namaKlien
            ? {
                clients_some: {
                  personId: { namaLengkap_contains: this.q.namaKlien },
                },
              }
            : {},
          this.q.noReg
            ? {
                noReg_contains: this.q.noReg,
              }
            : {},
          this.q.namaWakil
            ? {
                wakilId: {
                  namaLengkap_contains: this.q.namaWakil,
                },
              }
            : {},
        ],
      },
    };
  }

  stChange() {
    // switch (e.type) {
    //   // case 'checkbox':
    //   //   this.selectedRows = e.checkbox!;
    //   //   this.totalCallNo = this.selectedRows.reduce((total, cv) => total + cv.callNo, 0);
    //   //   this.cdr.detectChanges();
    //   //   break;
    //   case 'filter':
    //     // this.getData();
    //     break;
    // }
  }

  add(tpl: TemplateRef<{}>, title: string) {
    this.mode = 'create';
    this.dataSelected = {};
    this.modalInstance = this.modalSrv.create({
      nzTitle: title,
      nzContent: tpl,
      nzWidth: this.card.nativeElement.offsetWidth,
      nzFooter: null,
      nzBodyStyle: {},
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
    this.modalInstance.close();
    this.getData();
  }

  reset() {
    setTimeout(() => this.getData());
  }

  checkAlreadyQueue(item) {
    return this.getLogRequestGQL
      .fetch(
        {
          where: {
            applicationId: { id: item.id },
            jenisRequest: '1011',
            tglRequest_gte: moment()
              .hour(0)
              .minute(0)
              .toDate(),
            tglRequest_lte: moment()
              .hour(23)
              .minute(59)
              .toDate(),
          },
        },
        { fetchPolicy: 'network-only' },
      )
      .pipe(map(res => res.data.logRequests))
      .toPromise();
  }

  async queueConsultation(dataApplication) {
    if (this.loading) return;
    const alreadyQueue = await this.checkAlreadyQueue(dataApplication);
    // console.log(alreadyQueue);
    if (alreadyQueue.length !== 0) {
      this.msg.info('Antrian Konsultasi Sudah Ada Untuk Aplikasi ' + dataApplication.noReg);
      return;
    }
    const dataLog = <PostLogRequestMutationVariables>{
      data: {
        applicationId: { connect: { id: dataApplication.id } },
        caseId: dataApplication.case ? { connect: { id: dataApplication.case.id } } : null,
        requestBy: { connect: { id: this.settingService.user.id } },
        jenisRequest: '1011',
        statusRequest: '0',
        tglRequest: moment().toDate(),
      },
    };
    this.loading = true;
    this.postLogRequestGQL
      .mutate(dataLog)
      .pipe(take(1))
      .subscribe(
        res => {
          this.loading = false;
          this.msg.success('Antrian Konsultasi Sudah Ditambahkan Untuk Aplikasi ' + dataApplication.noReg);
        },
        error => {
          this.loading = false;
          this.msg.error('Antrian Konsultasi Gagal ditambahkan Untuk Aplikasi ' + dataApplication.noReg);
          this.msg.error(JSON.stringify(error));
        },
      );
  }

  downloadDocx(data: any) {
    this.http
      .post(
        this.urlDocx,
        {
          param: data,
        },
        {},
        { responseType: 'blob' },
      )
      .subscribe(async res => {
        // console.log(res);
        const a = document.createElement('a');
        a.href = URL.createObjectURL(res);

        a.download = `${data.noReg}-${moment().format('YYYY-MM-DD')}.docx`;
        // start download
        a.click();
        this.loading = false;
        this.cdr.detectChanges();
      });
  }
}
