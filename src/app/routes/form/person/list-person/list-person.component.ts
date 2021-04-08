import { QueryRef } from 'apollo-angular';
import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  TemplateRef,
  ChangeDetectorRef,
  Input,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { NzModalService, NzModalRef } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { _HttpClient } from '@delon/theme';
import { tap, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { STComponent, STColumn, STData, STChange, STPage, STColumnSort } from '@delon/abc/st';
import { AllPersonGQL, AllPerson, PersonWhereInput, Person, PersonOrderByInput, SortOrder } from '@shared';
import * as moment from 'moment';
import { MtVocabHelper } from '@shared/helper/index';
import { assoc, dropWhile, filter, find, findIndex, insertAll, isEmpty, pickBy, prop, takeWhile } from 'ramda';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.less'],
})
export class ListPersonComponent implements OnInit, OnDestroy {
  @Input() parent: boolean;
  @Output() dataPerson = new EventEmitter<AllPerson.People>();
  @ViewChild('card', { static: true }) card: ElementRef;
  @ViewChild('modalContent', { static: true }) modalEl: TemplateRef<{}>;

  q: any = {
    namaLengkap: null,
    nomorId: null,
    noReg: null,
  };
  data: AllPerson.People[] = [];
  dataSelected: AllPerson.People;
  mode = '';
  persons: QueryRef<AllPerson.Query, AllPerson.Variables>;
  personsObs: Subscription;
  loading = false;
  modalInstance: NzModalRef;
  @ViewChild('st', { static: true })
  st: STComponent;

  columns: STColumn[] = [
    {
      title: 'Action',
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
            this.dataSelected = item;
            this.mode = 'edit';
            this.edit(this.modalEl, 'Edit Data');
          },
        },
      ],
      fixed: 'left',
      width: '120px',
    },

    {
      title: 'Nama Lengkap',
      index: 'namaLengkap',
      sort: {
        default: null,
        compare: null
      },
    },
    {
      title: 'Email',
      index: 'email',
    },
    {
      title: 'Telp',
      index: 'telepon',
    },
    {
      title: 'Nomor Id',
      index: 'nomorId',
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

  orderBy: PersonOrderByInput[] = [{ updatedAt: 'desc' as SortOrder }]

  constructor(
    private http: _HttpClient,
    public msg: NzMessageService,
    private modalSrv: NzModalService,
    private cdr: ChangeDetectorRef,
    private allPersonGQL: AllPersonGQL,
    public mtVocab: MtVocabHelper,
    private mtVocabHelper: MtVocabHelper,
  ) { }

  ngOnInit() {
    this.persons = this.allPersonGQL.watch(this.searchGenerator(), {
      fetchPolicy: 'no-cache',
    });
    this.loading = true;
    this.personsObs = this.persons.valueChanges
      .pipe(
        map(result => result.data),
        tap(() => (this.loading = false)),
      )
      .subscribe(res => {
        this.data = res.people;
        this.st.total = res.aggregatePerson.count.id;
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.personsObs.unsubscribe();
  }



  getData() {
    this.loading = true;
    this.persons
      .refetch(this.searchGenerator())
      .then(res => {
        this.data = res.data.people;
        this.st.total = res.data.aggregatePerson.count.id;
      })
      .finally(() => {
        this.loading = false;
      });
  }

  searchGenerator(): AllPerson.Variables {
    return {
      where: this.mtVocabHelper.whereHelper({
        OR: <PersonWhereInput[]>[
          !this.q.namaLengkap
            ? null
            : {
              namaLengkap: { contains: this.q.namaLengkap },
            },
          !this.q.nomorId
            ? null
            : {
              nomorId: { contains: this.q.nomorId },
            },
          !this.q.noReg ? null : { applications: { some: { noReg: { contains: this.q.noReg } } } },
        ].filter(res => res),
      }),
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
    this.dataSelected = <AllPerson.People>{};
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
