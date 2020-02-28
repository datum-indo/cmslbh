import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  TemplateRef,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { zip, Subscription } from 'rxjs';
import { NzMessageService, NzModalRef, NzModalService } from 'ng-zorro-antd';
import { _HttpClient, SettingsService } from '@delon/theme';
import { GetCase, AllPersonGQL, GetCaseGQL, CaseWhereInput, GetConsultationGQL, GetPk, GetPkGQL } from '@shared';
import { QueryRef } from 'apollo-angular';
import { STComponent, STColumn, STData, STChange } from '@delon/abc';
import * as moment from 'moment';
import { MtVocabHelper } from '@shared/helper';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.less'],
})
export class CasesComponent implements OnInit, OnDestroy {
  @Input() parent: boolean;
  @Output() dataKasus = new EventEmitter<String>();
  @ViewChild('card') card: ElementRef;
  @ViewChild('modalContent') modalEl: TemplateRef<{}>;
  @Input() query: GetCase.Variables;
  caseParam = '';
  q: any = {
    clientName: null,
    judulKasus: null,
    noReg: null,
  };
  data: any[] | GetCase.Cases[] = [];
  dataSelected: GetCase.Cases;
  mode = '';
  cases: QueryRef<GetCase.Query, GetCase.Variables>;
  casesObs: Subscription;
  loading = false;
  modalInstance: NzModalRef;

  aggTotalKonsultasi: Promise<number>;
  aggTotalKasus: Promise<number>;
  aggTotalPendampingan: Promise<number>;

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
            this.dataKasus.emit(item);
          },
          iif: () => this.parent,
        },
        {
          text: 'View Kasus',
          click: (item: any) => {
            this.router.navigateByUrl('form/case/view/' + item.id);
          },
        },
      ],
    },
    {
      title: 'Tahap Kasus',
      index: 'application',
      format: item => {
        // console.log(item);
        return item.application.tahapTeks;
      },
    },
    {
      title: 'Judul Kasus',
      index: 'judulKasus',
    },
    {
      title: 'Nomor Register',
      index: 'application.noReg',
    },
    {
      title: 'Tanggal Registrasi',
      index: 'application.regDate',
      type: 'date',
      sort: {
        default: 'descend',
        compare: (a, b) => moment(a.application.regDate).unix() - moment(b.application.regDate).unix(),
      },
    },
    {
      title: 'Klien',
      index: 'application.clients',
      format: (item, col) => {
        const formatText = item.application.clients.map(val => {
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
  ];
  selectedRows: STData[] = [];
  description = '';
  totalCallNo = 0;
  expandForm = false;
  roles_type;
  constructor(
    private http: _HttpClient,
    public msg: NzMessageService,
    private modalSrv: NzModalService,
    private cdr: ChangeDetectorRef,
    private allPersonGQL: AllPersonGQL,
    public mtVocab: MtVocabHelper,
    private getCaseGQL: GetCaseGQL,
    public settingService: SettingsService,
    private getConsultationGQL: GetConsultationGQL,
    private getPkGQL: GetPkGQL,
    public router: Router,
    private mtVocabHelper: MtVocabHelper,
  ) {
    this.roles_type = this.settingService.user.roles_type;
  }

  ngOnInit() {
    this.cases = this.getCaseGQL.watch(this.searchGenerator(), {
      fetchPolicy: 'no-cache',
    });
    this.loading = true;
    this.casesObs = this.cases.valueChanges
      .pipe(
        map(result => result.data.cases),
        tap(() => (this.loading = false)),
      )
      .subscribe(res => {
        // console.log(res);
        this.data = res;
        this.translateMtVocab();
        this.cdr.detectChanges();
      });
  }

  async translateMtVocab() {
    for (const a of this.data) {
      a.application.tahapTeks = await this.mtVocabHelper.translateMtVocab(a.application.tahap);
    }
    this.st.reload();
  }

  ngOnDestroy(): void {
    this.casesObs.unsubscribe();
  }

  getData() {
    this.loading = true;
    this.cases
      .refetch(this.searchGenerator())
      .then(res => {
        this.data = res.data.cases;
      })
      .finally(() => {
        this.loading = false;
      });
  }

  searchGenerator(): GetCase.Variables {
    return <GetCase.Variables>{
      where: <CaseWhereInput>{
        AND: [
          this.q.judulKasus !== null
            ? {
                judulKasus_contains: this.q.judulKasus,
              }
            : {},
          this.q.clientName !== null
            ? {
                application: {
                  clients_some: {
                    personId: { namaLengkap_contains: this.q.clientName },
                  },
                },
              }
            : {},
          this.q.noReg !== null
            ? {
                application: {
                  noReg_contains: this.q.noReg,
                },
              }
            : {},
        ],
      },
    };
  }

  stChange(e: STChange) {
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
    this.dataSelected = <GetCase.Cases>{};
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
}
