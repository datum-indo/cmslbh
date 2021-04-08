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
import { GetUserGQL, GetUser, UserWhereInput, PersonOrderByInput, SortOrder, UserOrderByInput } from '@shared';

import { Subscription } from 'rxjs';
import { NzModalService, NzModalRef } from 'ng-zorro-antd/modal';
import { NzMessageService, } from 'ng-zorro-antd/message';
import { STComponent, STColumn, STData, STPage, STColumnSort } from '@delon/abc/st';
import { _HttpClient } from '@delon/theme';
import { MtVocabHelper } from '@shared/helper';
import { map, tap, concat } from 'rxjs/operators';
import { assoc, filter, insertAll, prop } from 'ramda';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.less'],
})
export class ListUserComponent implements OnInit, OnDestroy {
  @Input() parent: boolean;
  @Output() dataUser = new EventEmitter<GetUser.Users>();
  @ViewChild('card', { static: true }) card: ElementRef;
  @ViewChild('modalContent', { static: true }) modalEl: TemplateRef<{}>;

  q: any = {
    email: null,
    name: null,
  };
  data: GetUser.Users[] = [];
  dataSelected: GetUser.Users | any;
  mode = '';
  users: QueryRef<GetUser.Query, GetUser.Variables>;
  usersObs: Subscription;
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
            this.dataUser.emit(item);
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
      index: 'name',
      sort: {
        default: null,
        compare: null
      },
    },
    {
      title: 'Email',
      index: 'email',
      sort: {
        default: null,
        compare: null
      },
    },
    {
      title: 'Posisi',
      index: 'roles_type',
      format: (item, col) => {
        const formatText = item.roles_type.map(val => {
          return val.type.description;
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

  orderBy: UserOrderByInput[] = [{ updatedAt: 'desc' as SortOrder }]

  constructor(
    public msg: NzMessageService,
    private modalSrv: NzModalService,
    private cdr: ChangeDetectorRef,
    public mtVocab: MtVocabHelper,
    private getUserGQL: GetUserGQL,
    private mtVocabHelper: MtVocabHelper,
  ) { }

  ngOnInit() {
    this.users = this.getUserGQL.watch(this.searchGenerator(), {
      fetchPolicy: 'no-cache',
    });
    this.loading = true;
    this.usersObs = this.users.valueChanges
      .pipe(
        map(result => result.data),
        tap(() => (this.loading = false)),
      )
      .subscribe(res => {
        this.data = res.users;
        this.st.total = res.aggregateUser.count.id
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.usersObs.unsubscribe();
  }

  getData() {
    this.loading = true;
    this.users
      .refetch(this.searchGenerator())
      .then(res => {
        this.data = res.data.users;
        this.st.total = res.data.aggregateUser.count.id;
      })
      .finally(() => {
        this.loading = false;
      });
  }

  searchGenerator(): GetUser.Variables {

    return <GetUser.Variables>{
      where: this.mtVocabHelper.whereHelper({
        OR: <UserWhereInput[]>[
          !this.q.name ? null : {
            name: { contains: this.q.name },
          },
          !this.q.email ? null : {
            email: { contains: this.q.email },
          },
        ].filter(res => res),
      }),
      take: this.st.ps,
      skip: this.st.ps * this.st.pi === this.st.ps ? 0 : this.st.ps * this.st.pi - this.st.ps,
      orderBy: this.orderBy
    };
  }

  stChange(e) {
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

  edit(tpl: TemplateRef<{}>, title: string) {
    this.dataSelected.roles_type_virtual = this.dataSelected.roles_type.map(val => val.type.id);
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
