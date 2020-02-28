import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  OnDestroy,
  ElementRef,
  TemplateRef,
} from '@angular/core';
import { NzMessageService, CascaderOption, NzModalService, UploadFile, NzModalRef } from 'ng-zorro-antd';
import { SettingsService } from '@delon/theme';
import { SFSchema, CascaderWidget, SFComponent, SFSchemaEnumType } from '@delon/form';
import {
  GetMtVocabsGQL,
  GetMtVocabs,
  MtVocabWhereInput,
  MtVocabGroupWhereInput,
  MtVocabOrderByInput,
  PersonCreateInput,
  PostPersonGQL,
  PersonUpdateInput,
  PutPersonGQL,
  PersonWhereUniqueInput,
} from '@shared';
import { MtVocabHelper, HelperService } from '@shared/helper';
import * as moment from 'moment';
import { map, take } from 'rxjs/operators';
import { AllPersonGQL, AllPerson } from '@shared/generated/graphql';
import { Observable } from 'apollo-link';
import { saveAs as importedSaveAs } from 'file-saver';
import { environment } from '@env/environment';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.less'],
})
export class CreateClientComponent implements OnInit, OnDestroy {
  private _editData: any;
  fileList: UploadFile[] = [];
  modalInstance: NzModalRef;
  uploadAction = `http://${window.location.hostname}:3000/upload`;
  constructor(
    public msg: NzMessageService,
    public mtVocabHelper: MtVocabHelper,
    private postPersonGQL: PostPersonGQL,
    private settingService: SettingsService,
    private putPersonGQL: PutPersonGQL,
    private modalSrv: NzModalService,
    private helper: HelperService,
  ) {}

  @Output() saveData = new EventEmitter<any>();
  @ViewChild('sf') sf: SFComponent;
  @ViewChild('card') card: ElementRef;
  @ViewChild('listPerson') listPerson: TemplateRef<{}>;
  @Input() mode: string;
  @Input() parent: boolean;
  @Input() create: boolean;
  @Input()
  set editData(editData: any) {
    this.loading = true;
    // this.cobajing(editData);
    // if (editData.fileList) this.fileList = editData.fileList;
    this._editData = editData;
    this.loading = false;
  }
  get editData(): any {
    return this._editData;
  }

  cobajing(d) {
    // console.log(d);
  }
  ngOnInit() {}

  ngOnDestroy(): void {}
  loading = false;

  submit(value: any) {
    // console.log(value);
    // console.log(this.sf.getValue('/sktmUpload'));
    // value.fileList = this.fileList;
    this.saveData.emit({ value: value, mode: this.mode });
    // const processedData = this.processData(value);
    // !this.create
    //   ? this.dataMutationUpdate(<PersonUpdateInput>processedData, <PersonWhereUniqueInput>{ id: value.id })
    //   : this.dataMutationCreate(<PersonCreateInput>processedData);
  }

  processData(data: any): PersonCreateInput | PersonUpdateInput {
    if (data.domisiliSama === true) {
      data.alamatDomisili = null;
      data.distrikDomisili = null;
    }
    if (data.disabilitas === false) {
      data.jenisDisabilitas = null;
      data.alatBantu = null;
    }
    data.distrikId = Array.isArray(data.distrikId) ? data.distrikId.slice(-1)[0] : null;
    data.distrikDomisili = Array.isArray(data.distrikDomisili) ? data.distrikDomisili.slice(-1)[0] : null;
    data.pekerjaan = Array.isArray(data.pekerjaan) ? data.pekerjaan.slice(-1)[0] : null;
    data.tglLahir = moment(data.tglLahir, 'YYYY-MM-DD HH:mm:ss').toDate() || null;
    data.createdBy = this.settingService.user.name;
    data.updatedBy = this.settingService.user.name;
    if (!this.create) {
      const { id, createdAt, updatedAt, __typename, _values, ...newData } = data;
      return <PersonUpdateInput>{ ...newData };
    } else {
      return <PersonCreateInput>{ ...data };
    }
  }

  schema: SFSchema = {
    properties: {
      id: {
        type: 'string',
        ui: {
          hidden: true,
        },
      },
      personId: {
        type: 'string',
        title: 'Clients',
        readOnly: true,
        ui: {
          widget: 'custom',
        },
      },
      usiaSaatKlien: {
        type: 'number',
        minimum: 0,
        title: 'Usia Saat Ini',
      },
      sktm: {
        type: 'boolean',
        title: 'SKTM',
        description: 'Ada surat keterangan tidak mampu (SKTM) ?',
        ui: {
          widget: 'checkbox',
        },
        default: false,
      },
      sktmPilihan: {
        type: 'string',
        title: 'Keterangan SKTM',
        ui: {
          widget: 'select',
          asyncData: () => this.mtVocabHelper.getMtVocabEnum(81, 'teks'),
          visibleIf: {
            sktm: value => value,
          },
        },
      },
      stmKeterangan: {
        type: 'string',
        title: 'Dokumen Pengganti Surat Keterangan Miskin',
        ui: {
          widget: 'textarea',
          autosize: { minRows: 2, maxRows: 6 },
          visibleIf: {
            sktmPilihan: value => value === 'Dokumen Lain Sebagai Pengganti Surat Keterangan Miskin',
          },
        },
      },
      pendapatan: {
        type: 'string',
        title: 'Pendapatan',
        ui: {
          widget: 'select',
          asyncData: () => this.mtVocabHelper.getMtVocabEnum(82, 'kode'),
        },
      },
      alamatLokasi: {
        type: 'string',
        title: 'Posisi Persis',
        ui: {
          widget: 'textarea',
          autosize: { minRows: 2, maxRows: 6 },
        },
      },
      tanggunganPasangan: {
        type: 'number',
        minimum: 0,
        title: 'Jumlah tanggungan istri/suami',
      },
      tanggunganAnak: {
        type: 'number',
        minimum: 0,
        title: 'Jumlah tanggungan anak',
      },
      tanggunganFamili: {
        type: 'number',
        minimum: 0,
        title: 'Jumlah tanggungan famili',
      },
      tanggunganLain: {
        type: 'number',
        minimum: 0,
        title: 'Jumlah tanggungan lainnya',
      },
      asetRumah: {
        type: 'string',
        title: 'Aset (rumah)',
        ui: {
          widget: 'textarea',
          autosize: { minRows: 2, maxRows: 6 },
        },
      },
      asetGedung: {
        type: 'string',
        title: 'Aset (gedung)',
        ui: {
          widget: 'textarea',
          autosize: { minRows: 2, maxRows: 6 },
        },
      },
      asetToko: {
        type: 'string',
        title: 'Aset (toko)',
        ui: {
          widget: 'textarea',
          autosize: { minRows: 2, maxRows: 6 },
        },
      },
      asetWarung: {
        type: 'string',
        title: 'Aset (warung)',
        ui: {
          widget: 'textarea',
          autosize: { minRows: 2, maxRows: 6 },
        },
      },
      asetKios: {
        type: 'string',
        title: 'Aset (kios)',
        ui: {
          widget: 'textarea',
          autosize: { minRows: 2, maxRows: 6 },
        },
      },
      asetLapak: {
        type: 'string',
        title: 'Aset (lapak)',
        ui: {
          widget: 'textarea',
          autosize: { minRows: 2, maxRows: 6 },
        },
      },
      asetTanah: {
        type: 'string',
        title: 'Aset (tanah)',
        ui: {
          widget: 'textarea',
          autosize: { minRows: 2, maxRows: 6 },
        },
      },
      asetLahanGarapan: {
        type: 'string',
        title: 'Aset (lahan garapan)',
        ui: {
          widget: 'textarea',
          autosize: { minRows: 2, maxRows: 6 },
        },
      },
      asetMobil: {
        type: 'string',
        title: 'Aset (mobil)',
        ui: {
          widget: 'textarea',
          autosize: { minRows: 2, maxRows: 6 },
        },
      },
      asetMotor: {
        type: 'string',
        title: 'Aset (motor)',
        ui: {
          widget: 'textarea',
          autosize: { minRows: 2, maxRows: 6 },
        },
      },
    },
    required: ['personId'],

    ui: {
      size: 'large',
    },
  };

  add(tpl: TemplateRef<{}>, title: string) {
    this.modalInstance = this.modalSrv.create({
      nzTitle: title,
      nzContent: tpl,
      nzWidth: this.card.nativeElement.offsetWidth,
      nzFooter: null,
      nzBodyStyle: {},
    });
  }

  openModal() {
    this.add(this.listPerson, 'Pilih Person');
  }
  closeModalAndSaveData(event: AllPerson.Persons) {
    this.modalInstance.close();
    this.sf.setValue('/personId', event);
    const umur = moment().diff(moment(event.tglLahir), 'years');
    // console.log(umur);
    if (umur) this.sf.setValue('/usiaSaatKlien', umur);
  }

  beforeUpload = (file: UploadFile, fileList: UploadFile[]) => {
    this.fileList.pop();
    return true;
  };

  changedStatusUpload(event) {
    if (event.type === 'success') {
      this.fileList[0].filename = event.file.response.filename;
      this.fileList[0].name = event.file.response.filename;
    }
  }

  preview = (file: UploadFile) => {
    this.helper.downloadFile(file.name).subscribe(res => {
      importedSaveAs(res, file.name);
    });
  };
}
