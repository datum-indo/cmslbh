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
import { GetNetworks, GetNetworksGQL, NetworkOrderByInput, NetworkWhereInput, PersonOrderByInput, SortOrder } from '@shared';

import { Subscription } from 'rxjs';
import { NzModalService, NzModalRef } from 'ng-zorro-antd/modal';
import { NzMessageService, } from 'ng-zorro-antd/message';
import { STComponent, STColumn, STData, STPage, STChange, STColumnSort } from '@delon/abc/st';
import * as moment from 'moment';
import { _HttpClient } from '@delon/theme';
import { MtVocabHelper } from '@shared/helper';
import { map, tap } from 'rxjs/operators';
import { assoc, filter, insertAll, prop } from 'ramda';

@Component({
  selector: 'app-list-network',
  templateUrl: './list-network.component.html',
})
export class ListNetworkComponent implements OnInit, OnDestroy {
  @Input() parent: boolean;
  @Output() dataNetwork = new EventEmitter<GetNetworks.Networks>();
  @ViewChild('card', { static: true }) card: ElementRef;
  @ViewChild('modalContent', { static: true }) modalEl: TemplateRef<{}>;

  q: any = {
    email: null,
    name: null,
  };
  data: GetNetworks.Networks[] = [];
  dataSelected: GetNetworks.Networks | any;
  mode = '';
  networks: QueryRef<GetNetworks.Query, GetNetworks.Variables>;
  networksObs: Subscription;
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
            this.dataNetwork.emit(item);
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
      title: 'Nama Network',
      index: 'name',
      sort: {
        default: null,
        compare: null
      },
    },
    {
      title: 'Contact Person',
      index: 'contactPerson',
    },
    {
      title: 'Alamat',
      index: 'address',
    },
    {
      title: 'Email',
      index: 'email',
    },
    {
      title: 'No Telepon',
      index: 'noContact',
    },
    {
      title: 'Type',
      index: 'type',
      format: (item, el) => {
        if (item.type === '1') return 'Transfer';
        if (item.type === '2') return 'Referral';
      },
    },
    {
      title: 'Status',
      index: 'status',
      format: (item, el) => {
        if (item.status === '1') return 'Aktif';
        if (item.status === '2') return 'Tidak Aktif';
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

  orderBy: NetworkOrderByInput[] = [{ updatedAt: 'desc' as SortOrder }]


  constructor(
    public msg: NzMessageService,
    private modalSrv: NzModalService,
    private cdr: ChangeDetectorRef,
    public mtVocab: MtVocabHelper,
    private getNetworksGQL: GetNetworksGQL,
    private mtVocabHelper: MtVocabHelper,
  ) { }

  ngOnInit() {
    this.networks = this.getNetworksGQL.watch(this.searchGenerator(), {
      fetchPolicy: 'network-only',
    });
    // console.log('sampe sini');
    this.loading = true;
    this.networksObs = this.networks.valueChanges
      .pipe(
        map(result => result.data),
        tap(() => (this.loading = false)),
      )
      .subscribe(res => {
        this.data = res.networks;
        this.st.total = res.aggregateNetwork.count.id;
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.networksObs.unsubscribe();
  }

  getData() {
    this.loading = true;
    this.networks
      .refetch(this.searchGenerator())
      .then(res => {
        this.data = res.data.networks;
        this.st.total = res.data.aggregateNetwork.count.id;
      })
      .finally(() => {
        this.loading = false;
      });
  }

  searchGenerator(): GetNetworks.Variables {

    return <GetNetworks.Variables>{
      where: this.mtVocabHelper.whereHelper(<NetworkWhereInput>{
        OR: <NetworkWhereInput[]>[
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
    this.dataSelected = <GetNetworks.Networks>{};
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
