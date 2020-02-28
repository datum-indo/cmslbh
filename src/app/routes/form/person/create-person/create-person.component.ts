import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnDestroy } from '@angular/core';
import { NzMessageService, CascaderOption, NzTreeNode } from 'ng-zorro-antd';
import { SettingsService } from '@delon/theme';
import { SFSchema, CascaderWidget, SFComponent, SFSchemaEnum, SFSchemaEnumType } from '@delon/form';
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
import { MtVocabHelper } from '@shared/helper';
import * as moment from 'moment';
import { map, take } from 'rxjs/operators';
import { AllPersonGQL } from '@shared/generated/graphql';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.less'],
})
export class CreatePersonComponent implements OnInit, OnDestroy {
  private _editData: any;

  constructor(
    public msg: NzMessageService,
    private getMtVocabsGQL: GetMtVocabsGQL,
    public mtVocabHelper: MtVocabHelper,
    private postPersonGQL: PostPersonGQL,
    private settingService: SettingsService,
    private putPersonGQL: PutPersonGQL,
  ) {}

  @Output() saveDone = new EventEmitter<boolean>();
  @ViewChild('sf') sf: SFComponent;
  @Input() parent: boolean;
  @Input() mode = 'create';
  @Input()
  set editData(editData: any) {
    (async () => {
      this.loading = true;
      // if (!Array.isArray(editData.distrikId) && editData.distrikId) {
      //   editData.distrikId = (await this.mtVocabHelper.findParent(editData.distrikId)).reverse();
      // }
      // if (!Array.isArray(editData.distrikDomisili) && editData.distrikDomisili) {
      // editData.distrikDomisili = (await this.mtVocabHelper.findParent(editData.distrikDomisili)).reverse();
      // }
      // if (!Array.isArray(editData.pekerjaan) && editData.pekerjaan) {
      //   editData.pekerjaan = (await this.mtVocabHelper.findParentPekerjaan(editData.pekerjaan)).reverse();
      // }
      // distrikID
      if (editData.distrikId) {
        const arrDistrikId = (await this.mtVocabHelper.findParent(editData.distrikId)).reverse();

        let longEnumDistrikId: any;
        let indDistrikId = -1;
        for (const b of arrDistrikId) {
          const titleAsync = await this.mtVocabHelper.translateMtVocab(b);
          indDistrikId++;
          switch (indDistrikId) {
            case 0:
              longEnumDistrikId = {
                title: titleAsync,
                key: b,
                children: [],
              };
              break;
            case 1:
              longEnumDistrikId.children.push({
                title: titleAsync,
                key: b,
                children: [],
              });
              break;
            case 2:
              longEnumDistrikId.children[0].children.push({
                title: titleAsync,
                key: b,
                children: [],
              });
              break;
            case 3:
              longEnumDistrikId.children[0].children[0].children.push({
                title: titleAsync,
                key: b,
              });
              break;

            default:
              break;
          }
        }
        // console.log(longEnumDistrikId);
        editData.distrikIdEnum = longEnumDistrikId;
      }
      if (editData.distrikDomisili) {
        const arrDistrikDomisili = (await this.mtVocabHelper.findParent(editData.distrikDomisili)).reverse();
        // console.log(arrDistrikDomisili);
        let longEnumDistrikDomisili: any;
        let ind = -1;
        for (const b of arrDistrikDomisili) {
          const titleAsync = await this.mtVocabHelper.translateMtVocab(b);
          ind++;
          switch (ind) {
            case 0:
              longEnumDistrikDomisili = {
                title: titleAsync,
                key: b,
                children: [],
              };
              break;
            case 1:
              longEnumDistrikDomisili.children.push({
                title: titleAsync,
                key: b,
                children: [],
              });
              break;
            case 2:
              longEnumDistrikDomisili.children[0].children.push({
                title: titleAsync,
                key: b,
                children: [],
              });
              break;
            case 3:
              longEnumDistrikDomisili.children[0].children[0].children.push({
                title: titleAsync,
                key: b,
              });
              break;

            default:
              break;
          }
        }

        editData.distrikDomisiliEnum = longEnumDistrikDomisili;
      }

      if (editData.pekerjaan) {
        const arrPekerjaan = (await this.mtVocabHelper.findParent(editData.pekerjaan)).reverse();
        // console.log(arrPekerjaan);
        let longEnumPekerjaan: any;
        let ind = -1;
        for (const b of arrPekerjaan) {
          const titleAsync = await this.mtVocabHelper.translateMtVocab(b);
          ind++;
          switch (ind) {
            case 0:
              longEnumPekerjaan = {
                title: titleAsync,
                key: b,
                children: [],
              };
              break;
            case 1:
              longEnumPekerjaan.children.push({
                title: titleAsync,
                key: b,
                children: [],
              });
              break;
            case 2:
              longEnumPekerjaan.children[0].children.push({
                title: titleAsync,
                key: b,
                children: [],
              });
              break;
            case 3:
              longEnumPekerjaan.children[0].children[0].children.push({
                title: titleAsync,
                key: b,
              });
              break;

            default:
              break;
          }
        }

        editData.pekerjaanEnum = longEnumPekerjaan;
      }

      const jenisDomisili: any[] = await this.mtVocabHelper.getMtVocabEnum(71, 'teks').toPromise();

      if (!jenisDomisili.find(res => res.value === editData.jenisDomisili)) {
        editData.jenisDomisiliDescription = editData.jenisDomisili;
        editData.jenisDomisili = 'Lainnya (sebutkan)';
      }
      this._editData = editData;
      // console.log(editData);
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
    const processedData = this.processData(value);
    this.mode === 'edit'
      ? this.dataMutationUpdate(<PersonUpdateInput>processedData, <PersonWhereUniqueInput>{ id: value.id })
      : this.dataMutationCreate(<PersonCreateInput>processedData);
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
    if (data.jenisDomisili === 'Lainnya (sebutkan)') {
      data.jenisDomisili = data.jenisDomisiliDescription;
    }

    if (!('disabilitas' in data)) {
      data.disabilitas = false;
    }
    if (!('domisiliSama' in data)) {
      data.domisiliSama = true;
    }
    // data.distrikId = Array.isArray(data.distrikId) ? data.distrikId.slice(-1)[0] : null;
    // data.distrikDomisili = Array.isArray(data.distrikDomisili) ? data.distrikDomisili.slice(-1)[0] : null;
    // data.pekerjaan = Array.isArray(data.pekerjaan) ? data.pekerjaan.slice(-1)[0] : null;
    // data.tglLahir = moment(data.tglLahir, 'YYYY-MM-DD HH:mm:ss').toDate() || null;
    data.tglLahir = moment(data.tglLahir, 'YYYY-MM-DD HH:mm:ss').toDate() || null;

    if (this.mode === 'edit') {
      data.updatedBy = this.settingService.user.name;
      const {
        id,
        createdAt,
        updatedAt,
        __typename,
        _values,
        documents,
        clients,
        applications,
        jenisDomisiliDescription,
        distrikIdEnum,
        distrikDomisiliEnum,
        pekerjaanEnum,
        ...newData
      } = data;
      return <PersonUpdateInput>{ ...newData };
    } else {
      data.createdBy = this.settingService.user.name;
      const {
        documents,
        clients,
        applications,
        jenisDomisiliDescription,
        distrikIdEnum,
        distrikDomisiliEnum,
        pekerjaanEnum,
        ...createData
      } = data;
      return <PersonCreateInput>{ ...createData };
    }
  }

  dataMutationCreate(data: PersonCreateInput) {
    this.loading = true;
    this.postPersonGQL
      .mutate({ data })
      .pipe(take(1))
      .subscribe(
        () => {
          this.loading = false;
          this.msg.success('Data Sukses Dibuat');
          this.sf.refreshSchema(this.schema);
          if (this.parent) this.saveDone.emit(true);
        },
        error => {
          this.loading = false;
          this.msg.error(JSON.stringify(error));
        },
      );
  }

  dataMutationUpdate(data: PersonUpdateInput, id: PersonWhereUniqueInput) {
    this.loading = true;
    this.putPersonGQL
      .mutate({ where: id, data: data })
      .pipe(take(1))
      .subscribe(
        () => {
          this.loading = false;
          this.msg.success('Data Sukses Dirubah');
          this.sf.refreshSchema(this.schema);
          if (this.parent) this.saveDone.emit(true);
        },
        error => {
          this.loading = false;
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
      unitSatuan: {
        type: 'string',
        title: 'Unit Satuan',
        ui: {
          widget: 'select',
          asyncData: () => this.mtVocabHelper.getMtVocabEnum(7, 'kode'),
        },
      },
      namaLengkap: {
        type: 'string',
        title: 'Nama Lengkap',
      },
      alias: {
        type: 'string',
        title: 'Alias',
      },
      jmlAnggota: {
        type: 'number',
        title: 'Jumlah Anggota',
        ui: {
          visibleIf: {
            unitSatuan: (value: any) => value !== '01000000000007' && value !== null,
          },
        },
      },
      jenisKelamin: {
        type: 'string',
        title: 'Jenis Kelamin',
        ui: {
          widget: 'radio',
          asyncData: () => this.mtVocabHelper.getMtVocabEnum(74, 'teks'),
          visibleIf: {
            unitSatuan: (value: any) => value === '01000000000007' && value !== null,
          },
        },
      },
      tmpLahir: {
        type: 'string',
        title: 'Tempat Lahir',
        ui: {
          visibleIf: {
            unitSatuan: (value: any) => value === '01000000000007' && value !== null,
          },
        },
      },
      tglLahir: {
        type: 'string',
        title: 'Tanggal Lahir',
        ui: {
          widget: 'date',
          mode: 'date',
          displayFormat: 'dd-MM-yyyy',
          visibleIf: {
            unitSatuan: (value: any) => value === '01000000000007' && value !== null,
          },
        },
      },
      agama: {
        type: 'string',
        title: 'Agama',
        ui: {
          widget: 'select',
          asyncData: () => this.mtVocabHelper.getMtVocabEnum(75, 'teks'),
          visibleIf: {
            unitSatuan: (value: any) => value === '01000000000007' && value !== null,
          },
        },
      },
      wargaNegara: {
        type: 'string',
        title: 'Warga Negara',
        ui: {
          widget: 'select',
          asyncData: () => this.mtVocabHelper.getMtVocabEnum(77, 'teks'),
          visibleIf: {
            unitSatuan: (value: any) => value === '01000000000007' && value !== null,
          },
        },
        default: 'INDONESIA',
      },
      golDarah: {
        type: 'string',
        title: 'Golongan Darah',
        enum: ['A', 'B', 'AB', 'O'],
        ui: {
          widget: 'radio',
          styleType: 'button',
          buttonStyle: 'solid',
          visibleIf: {
            unitSatuan: (value: any) => value === '01000000000007' && value !== null,
          },
        },
      },
      telepon: {
        type: 'string',
        title: 'Telepon',
      },
      email: {
        type: 'string',
        title: 'Email',
      },
      jenisId: {
        type: 'string',
        title: 'Jenis ID',
        ui: {
          widget: 'select',
          asyncData: () => this.mtVocabHelper.getMtVocabEnum(76, 'teks'),
          visibleIf: {
            unitSatuan: (value: any) => value === '01000000000007' && value !== null,
          },
        },
      },
      nomorId: {
        type: 'string',
        title: 'Nomor Id',
        ui: {
          visibleIf: {
            unitSatuan: (value: any) => value === '01000000000007' && value !== null,
          },
        },
      },
      alamatId: {
        type: 'string',
        title: 'Alamat ID',
        ui: {
          widget: 'textarea',
          autosize: { minRows: 2, maxRows: 6 },
          visibleIf: {
            unitSatuan: (value: any) => value === '01000000000007' && value !== null,
          },
        },
      },
      // distrikId: {
      //   type: 'string',
      //   title: 'Distrik ID',
      //   ui: {
      //     widget: 'cascader',
      //     asyncData: ((node: CascaderOption, index: number, me: CascaderWidget) => {
      //       return new Promise(async resolve => {
      //         const data = await this.getTreeData(
      //           node.value === undefined ? '00030424000063' : node.value.toString(),
      //           63,
      //         );

      //         (node as any).children = data;
      //         resolve();
      //         me.detectChanges(true);
      //       });
      //     }) as any,
      //     visibleIf: {
      //       unitSatuan: (value: any) => value === '01000000000007' && value !== null,
      //     },
      //   },
      // },
      distrikId: {
        type: 'string',
        title: 'Distrik ID',
        ui: {
          widget: 'tree-select',
          allowClear: true,
          dropdownStyle: { 'max-height': '300px' },
          displayWith: (node: NzTreeNode) => {
            let currentNode: any;
            let displayText = '';
            for (let i = node.level; i >= 0; i--) {
              if (!currentNode) currentNode = node;
              displayText === ''
                ? (displayText = currentNode.title)
                : (displayText = currentNode.title + ' / ' + displayText);
              currentNode = currentNode.parentNode;
            }

            return displayText;
          },
          asyncData: () => {
            this.loading = true;
            if (this.mode === 'edit') {
              // console.log(this.editData);
              return this.mtVocabHelper.getMtVocabWithChildren(63, this.editData.distrikIdEnum).pipe(res => {
                this.loading = false;
                return res;
              });
            }
            return this.mtVocabHelper.getMtVocabParentTree(63).pipe(res => {
              this.loading = false;
              return res;
            });
          },
          expandChange: e => {
            this.loading = true;
            return this.mtVocabHelper.getMtVocabChildTree(63, e.node.key).pipe(res => {
              this.loading = false;
              return res;
            });
          },
          visibleIf: {
            unitSatuan: (value: any) => value === '01000000000007' && value !== null,
          },
        },
      },
      domisiliSama: {
        type: 'boolean',
        title: 'Domisili sama ?',
        description: 'Checklist Jika Domisili sama',
        ui: {
          widget: 'checkbox',
          visibleIf: {
            unitSatuan: (value: any) => value === '01000000000007' && value !== null,
          },
        },
        default: true,
      },
      alamatDomisili: {
        type: 'string',
        title: 'Alamat Domisili',
        ui: {
          widget: 'textarea',
          autosize: { minRows: 2, maxRows: 6 },
          visibleIf: {
            domisiliSama: (value: any) => value === false,
          },
        },
      },
      distrikDomisili: {
        type: 'string',
        title: 'Distrik Domisili',
        ui: {
          widget: 'tree-select',
          allowClear: true,
          dropdownStyle: { 'max-height': '300px' },
          displayWith: (node: NzTreeNode) => {
            let currentNode: any;
            let displayText = '';
            for (let i = node.level; i >= 0; i--) {
              if (!currentNode) currentNode = node;
              displayText === ''
                ? (displayText = currentNode.title)
                : (displayText = currentNode.title + ' / ' + displayText);
              currentNode = currentNode.parentNode;
            }

            return displayText;
          },
          asyncData: () => {
            this.loading = true;
            if (this.mode === 'edit') {
              // console.log(this.editData);
              return this.mtVocabHelper.getMtVocabWithChildren(63, this.editData.distrikDomisiliEnum).pipe(res => {
                this.loading = false;
                return res;
              });
            }
            return this.mtVocabHelper.getMtVocabParentTree(63).pipe(res => {
              this.loading = false;
              return res;
            });
          },
          expandChange: e => {
            this.loading = true;
            return this.mtVocabHelper.getMtVocabChildTree(63, e.node.key).pipe(res => {
              this.loading = false;
              return res;
            });
          },
          visibleIf: {
            domisiliSama: (value: any) => value === false,
          },
        },
      },
      // distrikDomisili: {
      //   type: 'string',
      //   title: 'Distrik Domisili',
      //   ui: {
      //     widget: 'cascader',
      //     asyncData: ((node: CascaderOption, index: number, me: CascaderWidget) => {
      //       return new Promise(async resolve => {
      //         const data = await this.getTreeData(
      //           node.value === undefined ? '00030424000063' : node.value.toString(),
      //           63,
      //         );

      //         (node as any).children = data;
      //         resolve();
      //         me.detectChanges(true);
      //       });
      //     }) as any,
      //     visibleIf: {
      //       domisiliSama: (value: any) => value === false,
      //       unitSatuan: (value: any) => value === '01000000000007' && value !== null,
      //     },
      //   },
      // },
      jenisDomisili: {
        type: 'string',
        title: 'Jenis Domisili',
        ui: {
          widget: 'select',
          asyncData: () => this.mtVocabHelper.getMtVocabEnum(71, 'teks'),
          visibleIf: {
            unitSatuan: (value: any) => value === '01000000000007' && value !== null,
          },
        },
      },
      jenisDomisiliDescription: {
        type: 'string',
        title: 'Jenis Domisili Lainnya',
        ui: {
          visibleIf: {
            jenisDomisili: (value: any) => value === 'Lainnya (sebutkan)' && value !== null,
          },
        },
      },
      pendidikan: {
        type: 'string',
        title: 'Pendidikan',
        ui: {
          widget: 'select',
          asyncData: () => this.mtVocabHelper.getMtVocabEnum(78, 'kode'),
          visibleIf: {
            unitSatuan: (value: any) => value === '01000000000007' && value !== null,
          },
        },
      },
      // pekerjaan: {
      //   type: 'string',
      //   title: 'Pekerjaan',
      //   ui: {
      //     widget: 'cascader',
      //     asyncData: ((node: CascaderOption, index: number, me: CascaderWidget) => {
      //       return new Promise(async resolve => {
      //         const data = await this.getTreeData(node.value === undefined ? '0' : node.value.toString(), 10);
      //         for (const item in data) {
      //           const child = await this.mtVocabHelper.isThereAChild(data[item].value);
      //           data[item].isLeaf = child.length === 0;
      //         }
      //         (node as any).children = data;
      //         resolve();
      //         me.detectChanges(true);
      //       });
      //     }) as any,
      //     visibleIf: {
      //       unitSatuan: (value: any) => value === '01000000000007' && value !== null,
      //     },
      //   },
      // },pekerjaanEnum
      pekerjaan: {
        type: 'string',
        title: 'Pekerjaan',
        ui: {
          widget: 'tree-select',
          allowClear: true,
          dropdownStyle: { 'max-height': '300px' },
          asyncData: () => {
            this.loading = true;
            if (this.mode === 'edit') {
              // console.log(this.editData);
              return this.mtVocabHelper.getMtVocabWithChildren(10, this.editData.pekerjaanEnum).pipe(res => {
                this.loading = false;
                return res;
              });
            }
            return this.mtVocabHelper.getMtVocabParentTree(10).pipe(res => {
              this.loading = false;
              return res;
            });
          },
          expandChange: e => {
            // console.log(e);
            this.loading = true;
            return this.mtVocabHelper.getMtVocabChildTree(10, e.node.key).pipe(res => {
              this.loading = false;
              return res;
            });
          },
          visibleIf: {
            unitSatuan: (value: any) => value === '01000000000007' && value !== null,
          },
        },
      },
      statusPernikahan: {
        type: 'string',
        title: 'Status Pernikahan',
        ui: {
          widget: 'select',
          asyncData: () => this.mtVocabHelper.getMtVocabEnum(79, 'teks'),
          visibleIf: {
            unitSatuan: (value: any) => value === '01000000000007' && value !== null,
          },
        },
      },
      disabilitas: {
        type: 'boolean',
        title: 'Mempunyai Disabilitas?',
        description: 'Checklist jika mempunyai disabilitas',
        ui: {
          widget: 'checkbox',
          visibleIf: {
            unitSatuan: (value: any) => value === '01000000000007' && value !== null,
          },
        },
        default: false,
      },
      jenisDisabilitas: {
        type: 'string',
        title: 'Jenis Disabilitas',
        ui: {
          widget: 'select',
          asyncData: () => this.mtVocabHelper.getMtVocabEnum(95, 'kode'),
          visibleIf: {
            disabilitas: (value: any) => value === true,
          },
        },
      },
      alatBantu: {
        type: 'string',
        title: 'Alat Bantu Disabilitas',
        ui: {
          widget: 'select',
          asyncData: () => this.mtVocabHelper.getMtVocabEnum(96, 'kode'),
          visibleIf: {
            disabilitas: (value: any) => value === true,
          },
        },
      },
    },
    required: ['namaLengkap', 'unitSatuan'],

    ui: {
      size: 'large',
    },
  };

  private getTreeData(kode: any, kode_list: number) {
    return this.getMtVocabsGQL
      .watch(this.searchTreeGenerator(kode, kode_list))
      .valueChanges.pipe(
        map(result =>
          result.data.mtVocabs.map(res => {
            const obj: any = {};
            obj.value = res.KODE;
            obj.label = res.teks;
            obj.parent = res.kode_induk;
            if (kode_list === 63) {
              obj.isLeaf = res.level === 3;
            }
            return obj;
          }),
        ),
      )
      .pipe(take(1))
      .toPromise();
  }

  private searchTreeGenerator(kode: string, kode_list: number): GetMtVocabs.Variables {
    return <GetMtVocabs.Variables>{
      where: <MtVocabWhereInput>{
        AND: <MtVocabWhereInput[]>[{ kode_induk: kode, kode_list: <MtVocabGroupWhereInput>{ kode_list: kode_list } }],
      },
      orderBy: MtVocabOrderByInput.TeksAsc,
    };
  }
}
