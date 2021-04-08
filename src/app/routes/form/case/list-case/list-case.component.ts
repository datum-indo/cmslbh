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
import { AllPerson, AllPersonGQL, PersonWhereInput, GetCaseGQL, GetCase, RenamedcaseWhereInput, RenamedcaseOrderByInput, SortOrder } from '@shared';

import { Subscription } from 'rxjs';
import { NzModalService, NzModalRef } from 'ng-zorro-antd/modal';
import { NzMessageService, } from 'ng-zorro-antd/message';
import { STComponent, STColumn, STData, STChange, STPage, STColumnSort } from '@delon/abc/st';
import * as moment from 'moment';
import { _HttpClient } from '@delon/theme';
import { MtVocabHelper } from '@shared/helper';
import { map, tap } from 'rxjs/operators';
import { assoc, filter, insertAll, prop } from 'ramda';

@Component({
  selector: 'app-list-case',
  templateUrl: './list-case.component.html',
  styleUrls: ['./list-case.component.less'],
})
export class ListCaseComponent implements OnInit, OnDestroy {
  @Input() parent: boolean;
  @Output() dataKasus = new EventEmitter<String>();
  @ViewChild('card', { static: true }) card: ElementRef;
  @ViewChild('modalContent', { static: true }) modalEl: TemplateRef<{}>;
  @Input() query: GetCase.Variables;
  caseParam = '';
  q: any = {
    judulKasus: null,
    noReg: null,
    namaLengkap: null,
  };
  data: GetCase.Renamedcases[] = [];
  dataSelected: GetCase.Renamedcases;
  mode = '';
  cases: QueryRef<GetCase.Query, GetCase.Variables>;
  casesObs: Subscription;
  loading = false;
  modalInstance: NzModalRef;
  @ViewChild('st', { static: true })
  st: STComponent;

  columns: STColumn[] = [
    {
      title: 'Action',
      fixed: 'left',
      width: '200px',
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
            this.caseParam = item.id;
            this.mode = 'edit';
            this.edit(this.modalEl, 'View Kasus');
          },
        },
      ],
    },

    {
      title: 'Judul Kasus',
      index: 'judulKasus',
      sort: {
        compare: (a, b) => {
          const nameA = a.namaLengkap.toUpperCase();
          const nameB = b.namaLengkap.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        },
      },
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
  ) { }

  ngOnInit() {
    this.cases = this.getCaseGQL.watch(this.query ? this.searchGeneratorAppend(this.query) : this.searchGenerator(), {
      fetchPolicy: 'no-cache',
    });
    this.loading = true;
    this.casesObs = this.cases.valueChanges
      .pipe(
        map(result => result.data),
        tap(() => (this.loading = false)),
      )
      .subscribe(res => {
        // console.log(res);
        this.data = res.renamedcases;
        this.st.total = res.aggregateRenamedcase.count.id;
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.casesObs.unsubscribe();
  }

  getData() {
    console.log(this.searchGeneratorAppend(this.query));
    this.loading = true;
    this.cases
      .refetch(this.searchGeneratorAppend(this.query))
      .then(res => {
        this.data = res.data.renamedcases;
        this.st.total = res.data.aggregateRenamedcase.count.id;
      })
      .finally(() => {
        this.loading = false;
      });
  }

  searchGeneratorAppend(query: GetCase.Variables): GetCase.Variables {
    const queryVar = JSON.parse(JSON.stringify(query));
    console.log(queryVar);
    queryVar.where.AND.push({
      AND: <RenamedcaseWhereInput[]>[
        !this.q.judulKasus
          ? null : {
            judulKasus: { contains: this.q.judulKasus }
          },
        !this.q.namaLengkap
          ? null : {
            application: {
              is: { clients: { some: { personId: { is: { namaLengkap: { contains: this.q.namaLengkap } } } } } }
            },
          },
        !this.q.noReg
          ? null : {
            application: {
              is: { noReg: { contains: this.q.noReg } }
            },
          },
      ].filter(res => res),
    });

    return {
      ...queryVar, take: this.st.ps,
      skip: this.st.ps * this.st.pi === this.st.ps ? 0 : this.st.ps * this.st.pi - this.st.ps,
      orderBy: this.orderBy
    };
  }

  searchGenerator(): GetCase.Variables {

    return <GetCase.Variables>{
      where: <RenamedcaseWhereInput>{
        // OR: <RenamedcaseWhereInput[]>[
        //   !this.q.nomorId
        //     ? null
        //     : {
        //       nomorId: { contains: this.q.nomorId },
        //     },
        //   !this.q.namaLengkap
        //     ? null
        //     : {
        //       namaLengkap: { contains: this.q.namaLengkap },
        //     },
        //   {
        //     // nomorId_contains: this.q.nomorId === '' ? null : this.q.nomorId,
        //   },
        // ],
      },
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
