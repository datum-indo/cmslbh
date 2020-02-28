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
import { GetNetworks, GetNetworksGQL, NetworkWhereInput } from '@shared';
import { QueryRef } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { NzModalRef, NzMessageService, NzModalService } from 'ng-zorro-antd';
import { STComponent, STColumn, STData } from '@delon/abc';
import * as moment from 'moment';
import { _HttpClient } from '@delon/theme';
import { MtVocabHelper } from '@shared/helper';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-list-network',
  templateUrl: './list-network.component.html',
})
export class ListNetworkComponent implements OnInit, OnDestroy {
  @Input() parent: boolean;
  @Output() dataNetwork = new EventEmitter<GetNetworks.Networks>();
  @ViewChild('card') card: ElementRef;
  @ViewChild('modalContent') modalEl: TemplateRef<{}>;

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
  @ViewChild('st')
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
    private getNetworksGQL: GetNetworksGQL,
  ) {}

  ngOnInit() {
    this.networks = this.getNetworksGQL.watch(this.searchGenerator(), {
      fetchPolicy: 'network-only',
    });
    // console.log('sampe sini');
    this.loading = true;
    this.networksObs = this.networks.valueChanges
      .pipe(
        map(result => result.data.networks),
        tap(() => (this.loading = false)),
      )
      .subscribe(res => {
        // console.log(res);
        this.data = res;
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
      })
      .finally(() => {
        this.loading = false;
      });
  }

  searchGenerator(): GetNetworks.Variables {
    if (this.q.name || this.q.email) {
      return <GetNetworks.Variables>{
        where: <NetworkWhereInput>{
          OR: <NetworkWhereInput[]>[
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
    return <GetNetworks.Variables>{
      where: <NetworkWhereInput>{},
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

  reset() {
    setTimeout(() => this.getData());
  }
}
