import { Component, OnInit, Output, EventEmitter, ViewChild, Input, OnDestroy } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import {
  PostNetworkGQL,
  PutNetworkGQL,
  NetworkCreateInput,
  NetworkUpdateInput,
  NetworkWhereUniqueInput,
} from '@shared';
import { MtVocabHelper } from '@shared/helper';
import { SFComponent, SFSchema } from '@delon/form';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-create-network',
  templateUrl: './create-network.component.html',
})
export class CreateNetworkComponent implements OnInit, OnDestroy {
  private _editData: any;

  constructor(
    public msg: NzMessageService,
    public mtVocabHelper: MtVocabHelper,
    private postNetworkGQL: PostNetworkGQL,
    private putNetworkGQL: PutNetworkGQL,
  ) {}

  @Output() saveDone = new EventEmitter<boolean>();
  @ViewChild('sf') sf: SFComponent;
  @Input() parent: boolean;
  @Input() mode = 'create';
  @Input()
  set editData(editData: any) {
    (async () => {
      this.loading = true;
      if (!Array.isArray(editData.distrikId) && editData.distrikId) {
        editData.distrikId = (await this.mtVocabHelper.findParent(editData.distrikId)).reverse();
      }
      if (!Array.isArray(editData.distrikDomisili) && editData.distrikDomisili) {
        editData.distrikDomisili = (await this.mtVocabHelper.findParent(editData.distrikDomisili)).reverse();
      }
      if (!Array.isArray(editData.pekerjaan) && editData.pekerjaan) {
        editData.pekerjaan = (await this.mtVocabHelper.findParentPekerjaan(editData.pekerjaan)).reverse();
      }
      this._editData = editData;
      this.loading = false;
    })();
  }
  get editData(): any {
    return this._editData;
  }

  ngOnInit() {}

  ngOnDestroy(): void {}
  loading = false;

  submit(value: any) {
    // console.log(value);
    const network = this.processData(value);
    if (this.mode === 'edit') {
      this.dataMutationUpdate(<NetworkUpdateInput>network, <NetworkWhereUniqueInput>{ id: value.id });
    } else {
      this.dataMutationCreate(<NetworkCreateInput>network);
    }
  }

  processData(data: any) {
    if (this.mode === 'edit') {
      const { id, createdAt, updatedAt, __typename, _values, ...newData } = data;
      return <NetworkUpdateInput>{ ...newData };
    } else {
      const { ...newData } = data;
      return <NetworkCreateInput>{ ...newData };
    }
  }

  dataMutationCreate(data: NetworkCreateInput) {
    this.postNetworkGQL
      .mutate({ data })
      .pipe(take(1))
      .subscribe(
        () => {
          this.msg.success('Data Sukses Dibuat');
          this.sf.refreshSchema(this.schema);
          if (this.parent) this.saveDone.emit(true);
        },
        error => {
          this.msg.error(JSON.stringify(error));
        },
      );
  }

  dataMutationUpdate(data: NetworkUpdateInput, id: NetworkWhereUniqueInput) {
    this.putNetworkGQL
      .mutate({ where: id, data: data })
      .pipe(take(1))
      .subscribe(
        () => {
          this.msg.success('Data Sukses Dirubah');
          this.sf.refreshSchema(this.schema);
          if (this.parent) this.saveDone.emit(true);
        },
        error => {
          this.msg.error(JSON.stringify(error));
        },
      );
  }

  schema: SFSchema = {
    properties: {
      id: {
        type: 'string',
        ui: {
          hidden: true,
        },
      },
      name: {
        type: 'string',
        title: 'Nama Network',
      },
      contactPerson: {
        type: 'string',
        title: 'Contact Person',
      },
      noContact: {
        type: 'string',
        title: 'Nomor Telepon',
      },
      email: {
        type: 'string',
        title: 'Email',
      },
      address: {
        type: 'string',
        title: 'Alamat',
        ui: {
          widget: 'textarea',
          autosize: { minRows: 2, maxRows: 6 },
        },
      },
      type: {
        type: 'string',
        title: 'Tipe',
        enum: [{ value: '1', label: 'Transfer' }, { value: '2', label: 'Rujukan' }],
        ui: {
          widget: 'select',
        },
      },
      status: {
        type: 'string',
        title: 'Status',
        enum: [{ value: '1', label: 'Aktif' }, { value: '2', label: 'Tidak Aktif' }],
        ui: {
          widget: 'select',
        },
      },
    },
    required: ['name', , 'type', 'status'],

    ui: {
      size: 'large',
    },
  };
}
