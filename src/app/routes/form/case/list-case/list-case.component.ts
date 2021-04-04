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
import { AllPerson, AllPersonGQL, PersonWhereInput, GetCaseGQL, GetCase, RenamedcaseWhereInput } from '@shared';
import { QueryRef } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { NzModalRef, NzMessageService, NzModalService } from 'ng-zorro-antd';
import { STComponent, STColumn, STData, STChange } from '@delon/abc';
import * as moment from 'moment';
import { _HttpClient } from '@delon/theme';
import { MtVocabHelper } from '@shared/helper';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-list-case',
  templateUrl: './list-case.component.html',
  styleUrls: ['./list-case.component.less'],
})
export class ListCaseComponent implements OnInit, OnDestroy {
  @Input() parent: boolean;
  @Output() dataKasus = new EventEmitter<String>();
  @ViewChild('card') card: ElementRef;
  @ViewChild('modalContent') modalEl: TemplateRef<{}>;
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
  @ViewChild('st')
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
      sort: {
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
    this.cases = this.getCaseGQL.watch(this.query ? this.query : this.searchGenerator(), {
      fetchPolicy: 'no-cache',
    });
    this.loading = true;
    this.casesObs = this.cases.valueChanges
      .pipe(
        map(result => result.data.renamedcases),
        tap(() => (this.loading = false)),
      )
      .subscribe(res => {
        // console.log(res);
        this.data = res;
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
        this.q.judulKasus
          ? {
            judulKasus_contains: this.q.judulKasus,
          }
          : {},
        this.q.namaLengkap
          ? {
            application: {
              clients_some: {
                personId: { namaLengkap_contains: this.q.namaLengkap },
              },
            },
          }
          : {},
        this.q.noReg
          ? {
            application: {
              noReg_contains: this.q.noReg,
            },
          }
          : {},
      ],
    });
    return queryVar;
  }

  searchGenerator(): GetCase.Variables {
    if (this.q.namaLengkap || this.q.nomorId) {
      return <GetCase.Variables>{
        where: <RenamedcaseWhereInput>{
          OR: <RenamedcaseWhereInput[]>[
            {
              namaLengkap_contains: this.q.namaLengkap === '' ? null : this.q.namaLengkap,
            },
            {
              // nomorId_contains: this.q.nomorId === '' ? null : this.q.nomorId,
            },
          ],
        },
      };
    }
    return <GetCase.Variables>{
      where: <RenamedcaseWhereInput>{},
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

  reset() {
    setTimeout(() => this.getData());
  }
}
