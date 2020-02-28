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
import { GetUserGQL, GetUser, UserWhereInput } from '@shared';
import { QueryRef } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { NzModalRef, NzMessageService, NzModalService } from 'ng-zorro-antd';
import { STComponent, STColumn, STData } from '@delon/abc';
import * as moment from 'moment';
import { _HttpClient } from '@delon/theme';
import { MtVocabHelper } from '@shared/helper';
import { map, tap, concat } from 'rxjs/operators';
import { identifier } from 'babel-types';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.less'],
})
export class ListUserComponent implements OnInit, OnDestroy {
  @Input() parent: boolean;
  @Output() dataUser = new EventEmitter<GetUser.Users>();
  @ViewChild('card') card: ElementRef;
  @ViewChild('modalContent') modalEl: TemplateRef<{}>;

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
  @ViewChild('st')
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
        compare: (a, b) => {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();
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
    private getUserGQL: GetUserGQL,
  ) {}

  ngOnInit() {
    this.users = this.getUserGQL.watch(this.searchGenerator(), {
      fetchPolicy: 'no-cache',
    });
    // console.log('sampe sini');
    this.loading = true;
    this.usersObs = this.users.valueChanges
      .pipe(
        map(result => result.data.users),
        tap(() => (this.loading = false)),
      )
      .subscribe(res => {
        // console.log(res);
        this.data = res;
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
      })
      .finally(() => {
        this.loading = false;
      });
  }

  searchGenerator(): GetUser.Variables {
    if (this.q.name || this.q.email) {
      return <GetUser.Variables>{
        where: <UserWhereInput>{
          OR: <UserWhereInput[]>[
            {
              name_contains: this.q.name === '' ? null : this.q.name,
            },
            {
              email_contains: this.q.email === '' ? null : this.q.email,
            },
          ],
        },
      };
    }
    return <GetUser.Variables>{
      where: <UserWhereInput>{},
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

  reset() {
    setTimeout(() => this.getData());
  }
}
