import { QueryRef } from 'apollo-angular';
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
import { NzMessageService, } from 'ng-zorro-antd/message';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { _HttpClient, SettingsService } from '@delon/theme';
import { GetCase, AllPersonGQL, GetCaseGQL, RenamedcaseWhereInput, GetConsultationGQL, GetPk, GetPkGQL, RenamedcaseOrderByInput, SortOrder } from '@shared';

import { STComponent, STColumn, STData, STChange, STPage, STColumnSort } from '@delon/abc/st';
import * as moment from 'moment';
import { MtVocabHelper } from '@shared/helper';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { assoc, filter, insertAll, prop } from 'ramda';

@Component({
  selector: 'app-landing-casesummary',
  templateUrl: './casesummary.component.html',
  styleUrls: ['./casesummary.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseSummaryComponent implements OnInit, OnDestroy {
  @Input() parent: boolean;
  @Output() dataKasus = new EventEmitter<String>();
  @ViewChild('card', { static: true }) card: ElementRef;
  @ViewChild('modalContent', { static: true }) modalEl: TemplateRef<{}>;
  @Input() query: GetCase.Variables;
  caseParam = '';
  q: any = {
    clientName: null,
    judulKasus: null,
    noReg: null,
  };
  data: any[] | GetCase.Renamedcases[] = [];
  dataSelected: GetCase.Renamedcases;
  mode = '';
  cases: QueryRef<GetCase.Query, GetCase.Variables>;
  casesObs: Subscription;
  loading = false;
  modalInstance: NzModalRef;

  aggTotalKonsultasi: Promise<number>;
  aggTotalKasus: Promise<number>;
  aggTotalPendampingan: Promise<number>;

  @ViewChild('st', { static: true })
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
            this.router.navigate([]).then(res=>{window.open('#/form/case/view/' + item.caseId.id,'_blank')});
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
    {
      title: 'Updated At',
      index: 'updatedAt',
      type: 'date',
      sort: {
        default: 'descend',
        compare: null
      },
    },
    {
      title: 'Created At',
      index: 'createdAt',
      type: 'date',
      sort: {
        default: null,
        compare: null
      },
    },
  ];
  selectedRows: STData[] = [];
  description = '';
  totalCallNo = 0;
  expandForm = false;
  roles_type;

  page: STPage = { front: false, show: true, showSize: true };

  orderBy: RenamedcaseOrderByInput[] = [{ updatedAt: 'desc' as SortOrder }]

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
    this.agrregationCase();

    this.cases = this.getCaseGQL.watch(this.searchGenerator(), {
      fetchPolicy: 'no-cache',
    });
    this.loading = true;
    this.casesObs = this.cases.valueChanges
      .pipe(
        map(result => result.data),
        tap(() => (this.loading = false)),
      )
      .subscribe(async res => {
        this.data = res.renamedcases;

        await this.translateMtVocab();
        this.st.total = res.aggregateRenamedcase.count.id;
        this.cdr.detectChanges();
      });
  }

  async translateMtVocab() {
    for (const a of this.data) {
      a.application.tahapTeks = await this.mtVocabHelper.translateMtVocab(a.application.tahap);
    }
  }

  agrregationCase() {
    this.aggTotalKonsultasi = this.getConsultationGQL
      .fetch({ where: { apps: { some: { appConsultation: { is: { id: { equals: this.settingService.user.id } } } } } } })
      .pipe(map(res => res.data.caseConsultations.length))
      .toPromise();

    this.aggTotalPendampingan = this.getPkGQL
      .fetch({ where: { ppPendamping: { is: { id: { equals: this.settingService.user.id } } } } })
      .pipe(map(res => res.data.casePks.length))
      .toPromise();

    this.aggTotalKasus = this.getCaseGQL
      .fetch({
        where: {
          OR: [
            { consultations: { some: { apps: { some: { appConsultation: { is: { id: { equals: this.settingService.user.id } } } } } } } },
            { pk: { is: { ppPendamping: { is: { id: { equals: this.settingService.user.id } } } } } },
          ],
        },
      })
      .pipe(map(res => res.data.renamedcases.length))
      .toPromise();
  }

  ngOnDestroy(): void {
    this.casesObs.unsubscribe();
  }

  getData() {
    this.loading = true;
    this.cases
      .refetch(this.searchGenerator())
      .then(res => {
        this.data = res.data.renamedcases;
        this.st.total = res.data.aggregateRenamedcase.count.id;
      })
      .finally(() => {
        this.loading = false;
      });
  }

  searchGenerator(): GetCase.Variables {
    return <GetCase.Variables>{
      where:
        this.mtVocabHelper.whereHelper(<RenamedcaseWhereInput>
          {
            AND: [
              {
                OR: [
                  { consultations: { some: { apps: { some: { appConsultation: { is: { id: { equals: this.settingService.user.id } } } } } } } },

                  { pk: { is: { ppPendamping: { is: { id: { equals: this.settingService.user.id } } } } } }
                ],
              },

              !this.q.judulKasus
                ? null : {
                  judulKasus: { contains: this.q.judulKasus }
                },
              !this.q.clientName
                ? null : {
                  application: {
                    is: { clients: { some: { personId: { is: { namaLengkap: { contains: this.q.clientName } } } } } }
                  },
                },
              !this.q.noReg
                ? null : {
                  application: {
                    is: { noReg: { contains: this.q.noReg } }
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
    this.dataSelected = <GetCase.Renamedcases>{};
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

  filterSearch() {
    this.st.pi = 1;
    setTimeout(() => this.getData());
  }
}
