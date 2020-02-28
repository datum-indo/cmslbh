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
import { NzMessageService, NzModalService, NzModalRef } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { tap, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { STComponent, STColumn, STData, STChange } from '@delon/abc';
import { AllPersonGQL, AllPerson, PersonWhereInput, Person } from '@shared';
import * as moment from 'moment';
import { MtVocabHelper } from '@shared/helper/index';
import { QueryRef } from 'apollo-angular';
@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.less'],
})
export class ListPersonComponent implements OnInit, OnDestroy {
  @Input() parent: boolean;
  @Output() dataPerson = new EventEmitter<AllPerson.Persons>();
  @ViewChild('card') card: ElementRef;
  @ViewChild('modalContent') modalEl: TemplateRef<{}>;

  q: any = {
    namaLengkap: null,
    nomorId: null,
  };
  data: AllPerson.Persons[] = [];
  dataSelected: AllPerson.Persons;
  mode = '';
  persons: QueryRef<AllPerson.Query, AllPerson.Variables>;
  personsObs: Subscription;
  loading = false;
  modalInstance: NzModalRef;
  @ViewChild('st')
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
    private http: _HttpClient,
    public msg: NzMessageService,
    private modalSrv: NzModalService,
    private cdr: ChangeDetectorRef,
    private allPersonGQL: AllPersonGQL,
    public mtVocab: MtVocabHelper,
  ) {}

  ngOnInit() {
    this.persons = this.allPersonGQL.watch(this.searchGenerator(), {
      fetchPolicy: 'no-cache',
    });
    this.loading = true;
    this.personsObs = this.persons.valueChanges
      .pipe(
        map(result => result.data.persons),
        tap(() => (this.loading = false)),
      )
      .subscribe(res => {
        this.data = res;
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
        this.data = res.data.persons;
      })
      .finally(() => {
        this.loading = false;
      });
  }

  searchGenerator(): AllPerson.Variables {
    if (this.q.namaLengkap || this.q.nomorId) {
      return <AllPerson.Variables>{
        where: <PersonWhereInput>{
          OR: <PersonWhereInput[]>[
            {
              namaLengkap_contains: this.q.namaLengkap === '' ? null : this.q.namaLengkap,
            },
            {
              nomorId_contains: this.q.nomorId === '' ? null : this.q.nomorId,
            },
          ],
        },
      };
    }
    return <AllPerson.Variables>{
      where: <PersonWhereInput>{},
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
    this.dataSelected = <AllPerson.Persons>{};
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
