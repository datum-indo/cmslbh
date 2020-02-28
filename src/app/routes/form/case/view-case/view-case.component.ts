import {
  Component,
  OnInit,
  ChangeDetectorRef,
  OnDestroy,
  TemplateRef,
  ViewChild,
  ElementRef,
  Input,
} from '@angular/core';
import { STColumn, STComponent } from '@delon/abc';
import { NzMessageService, NzTabChangeEvent, NzModalService, UploadFile } from 'ng-zorro-antd';
import { _HttpClient, SettingsService } from '@delon/theme';
import { saveAs as importedSaveAs } from 'file-saver';
import {
  GetCaseGQL,
  GetCase,
  Case,
  GetCaseQuery,
  Application,
  CaseUpdateInput,
  CaseWhereUniqueInput,
  PutCaseGQL,
  CaseConsultationAppCreateWithoutCaseConsultationIdInput,
  UserCreateOneInput,
  PutCaseMutationVariables,
  CaseProgressCreateWithoutCaseIdInput,
  CaseProgressUpdateOneWithoutCaseIdInput,
  CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput,
  DestroyCaseProgressActivity,
  DestroyCaseProgressActivityGQL,
  AllPerson,
  CaseKorbanCreateWithoutCaseIdInput,
  CasePelakuCreateWithoutCaseIdInput,
  CaseViolatedRightCreateWithoutCaseIdInput,
  DestroyKorbanGQL,
  DestroyPelakuGQL,
  DestroyCaseViolatedRightGQL,
  DestroyCaseClassificationGQL,
  CaseClassificationWhereInput,
  CaseClassificationCreateWithoutCaseIdInput,
  DestroyLitGQL,
  DestroyNonlitGQL,
  DestroyCaseIssueGQL,
  CaseIssueCreateWithoutCaseIdInput,
} from '@shared';
import { QueryRef } from 'apollo-angular';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap, map, tap, take, delay } from 'rxjs/operators';
import { Subscription, Observable, of, from } from 'rxjs';
import { ApolloQueryResult } from 'apollo-client';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { MtVocabHelper, HelperService } from '@shared/helper';
import * as moment from 'moment';
import { SFSchema, SFComponent } from '@delon/form';
import { nextContext } from '@angular/core/src/render3';

@Component({
  selector: 'app-view-case',
  templateUrl: './view-case.component.html',
  styleUrls: ['./view-case.component.less'],
})
export class ViewCaseComponent implements OnInit, OnDestroy {
  @ViewChild('card') card: ElementRef;
  @ViewChild('sfUmum') sfUmum: SFComponent;
  @ViewChild('sfListPerson') sfListPerson: SFComponent;
  @ViewChild('sfPilihPelaku') sfPilihPelaku: SFComponent;
  @ViewChild('stKorban') stKorban: STComponent;
  @ViewChild('stPelaku') stPelaku: STComponent;
  @ViewChild('stAktifitasPendampingan') stAktifitasPendampingan: STComponent;
  @ViewChild('stLampiranDokumen') stLampiranDokumen: STComponent;
  @ViewChild('modalContentKonsultasi') modalContentKonsultasi: TemplateRef<{}>;
  @ViewChild('modalContentAktifitasPendampingan') modalContentAktifitasPendampingan: TemplateRef<{}>;
  @ViewChild('modalLampiranDokumenView') modalLampiranDokumenView: TemplateRef<{}>;
  @ViewChild('modalLampiranDokumen') modalLampiranDokumen: TemplateRef<{}>;
  @ViewChild('modalContentKonsultasiView') modalContentKonsultasiView: TemplateRef<{}>;
  @ViewChild('modalContentAktifitasView') modalContentAktifitasView: TemplateRef<{}>;
  @ViewChild('modalPelaku') modalPelaku: TemplateRef<{}>;
  @ViewChild('listPerson') listPerson: TemplateRef<{}>;
  @Input() parent: boolean;
  @Input() caseParam: string;
  list: any[] = [];
  korbanData: any[] = [];
  pelakuData: any[] = [];
  deletedKorban: any[] = [];
  deletedPelaku: any[] = [];
  korbanOrPelaku: string;
  fileList: UploadFile[] = [];
  dataHakTerdampak: any[] = [];
  dataKlasifikasiDokumen: any[] = [];
  dataJenisPelaku: any[] = [];
  uploadAction = `http://${window.location.hostname}:3000/upload`;
  downloadAction = `http://${window.location.hostname}:3000/files/`;
  opColumns: STColumn[] = [
    { title: '操作类型', index: 'type' },
    { title: '操作人', index: 'name' },
    { title: '执行结果', index: 'status', render: 'status' },
    { title: '操作时间', index: 'updatedAt', type: 'date' },
    { title: '备注', index: 'memo', default: '-' },
  ];

  cases: QueryRef<GetCase.Query, GetCase.Variables>;
  loading = false;
  caseObs: Subscription;
  data: GetCase.Cases | any = <GetCase.Cases>{};
  caseId: number;
  show = true;
  changeShow() {
    this.show = !this.show;
  }
  modalInstance: any;
  modalInstanceLevelTwo: any;
  // showedit
  showEditUmum = false;
  dataModalTemp: any = {};
  dataModalTempLevelTwo: any = {};
  modeEditModal: string;
  kabid = false;
  constructor(
    public msg: NzMessageService,
    private http: _HttpClient,
    private cdr: ChangeDetectorRef,
    private getCaseGQL: GetCaseGQL,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    public mtVocabHelper: MtVocabHelper,
    private modalSrv: NzModalService,
    private putCaseGQL: PutCaseGQL,
    private settingService: SettingsService,
    private destoryCaseProgressActivity: DestroyCaseProgressActivityGQL,
    private destroyKorban: DestroyKorbanGQL,
    private destroyPelaku: DestroyPelakuGQL,
    private destroyCaseViolatedRight: DestroyCaseViolatedRightGQL,
    private destroyCaseClassification: DestroyCaseClassificationGQL,
    private destroyCaseIssue: DestroyCaseIssueGQL,
    private destroyLitGQL: DestroyLitGQL,
    private destroyNonlitGQL: DestroyNonlitGQL,
    private helper: HelperService,
  ) {
    if ((this.kabid = this.settingService.user.roles_type.find(el => el.type.id === 5))) {
      this.kabid = true;
    }
  }

  public momentF(data) {
    return moment(data);
  }

  getData() {
    // this.cases.refetch({ where: { id: this.caseId } }).then(val => {
    //   console.log(val);
    //   if (val) {
    //     this.data = val;
    //     this.translateMtVocab();
    //   } else {
    //     this.loading = true;
    //     setTimeout(() => {
    //       this.loading = false;
    //       this.location.back();
    //     }, 2000);
    //   }
    //   this.cdr.detectChanges();
    // });
    this.loading = true;
    this.caseObs.unsubscribe();
    this.caseObs = this.cases.valueChanges
      .pipe(
        map(result => result.data.cases[0]),
        tap(() => (this.loading = false)),
      )
      .subscribe(val => {
        // console.log(val);
        if (val) {
          this.data = val;
          this.translateMtVocab();
        } else {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.location.back();
          }, 2000);
        }
        this.cdr.detectChanges();
      });
  }
  ngOnInit() {
    if (this.parent) {
      this.caseId = Number(this.caseParam);
      this.cases = this.getCaseGQL.watch(
        // <GetLogRequest.Variables>{ where: { pp_some: { appConsultation: { id: this.settingService.user.id } } } },
        { where: { id: this.caseId } },
        {
          fetchPolicy: 'no-cache',
        },
      );
      this.loading = true;
      this.caseObs = this.cases.valueChanges
        .pipe(
          map(result => result.data.cases[0]),
          tap(() => (this.loading = false)),
        )
        .subscribe(val => {
          // console.log(val);
          if (val) {
            this.data = val;
            this.translateMtVocab();
            // console.log(this.data);
          } else {
            this.loading = true;
            setTimeout(() => {
              this.loading = false;
              this.location.back();
            }, 2000);
          }
          this.cdr.detectChanges();
        });
    } else {
      this.route.paramMap.subscribe(res => {
        this.caseId = Number(res.get('id'));
        this.cases = this.getCaseGQL.watch(
          // <GetLogRequest.Variables>{ where: { pp_some: { appConsultation: { id: this.settingService.user.id } } } },
          { where: { id: this.caseId } },
          {
            fetchPolicy: 'no-cache',
          },
        );
        this.loading = true;
        this.caseObs = this.cases.valueChanges
          .pipe(
            map(result => result.data.cases[0]),
            tap(() => (this.loading = false)),
          )
          .subscribe(val => {
            // console.log(val);
            if (val) {
              this.data = val;
              this.translateMtVocab();
              // console.log(this.data);
            } else {
              this.loading = true;
              setTimeout(() => {
                this.loading = false;
                this.location.back();
              }, 2000);
            }
            this.cdr.detectChanges();
          });
      });
      // console.log(this.data.pk.ppPendamping.id);
      // console.log(this.settingService.user.id);
    }
    // this.caseObs = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.getCaseGQL
    //       .watch(
    //         // <GetLogRequest.Variables>{ where: { pp_some: { appConsultation: { id: this.settingService.user.id } } } },
    //         { where: { id: Number(params.get('id')) } },
    //         {
    //           fetchPolicy: 'no-cache',
    //         },
    //       )
    //       .valueChanges.pipe(map(result => result.data.cases[0])),
    //   ),
    // );
    // console.log('sampe sini');
    // this.loading = true;
    // this.caseObs = this.cases.valueChanges
    //   .pipe(
    //     map(result => result.data.cases[0]),
    //     tap(() => (this.loading = false)),
    //   )
    //   .subscribe(res => {
    //     console.log(res);
    //     if (res) {
    //       this.data = res;
    //     } else {
    //       this.router.navigateByUrl('/exception/404');
    //     }
    //     this.cdr.detectChanges();
    //   });
  }
  ngOnDestroy(): void {
    this.caseObs.unsubscribe();
  }
  change(args: NzTabChangeEvent) {
    this.list = this.data[`advancedOperation${args.index + 1}`];
  }

  async translateMtVocab() {
    this.data.application.statusPerwakilanTeks = this.mtVocabHelper.translateMtVocab(
      this.data.application.statusPerwakilan,
    );
    this.data.application.tahapteks = this.mtVocabHelper.translateMtVocab(this.data.application.tahap);
    if ('progresses' in this.data) {
      if (this.data.progresses) {
        if ('jenisPeradilan' in this.data.progresses) {
          this.data.progresses.jenisPeradilanTeks = this.mtVocabHelper.translateMtVocab(
            this.data.progresses.jenisPeradilan,
          );
        }
      }
    }
    if ('caseClosedJenis' in this.data) {
      if (this.data.caseClosedJenis) {
        this.data.caseClosedJenisTeks = this.mtVocabHelper.translateMtVocab(this.data.caseClosedJenis);
      }
    }
    if ('violatedrights' in this.data) {
      if (this.data.violatedrights) {
        if (this.data.violatedrights.length > 0) {
          this.data.violatedrights.forEach(async element => {
            element.mtvocabteks = await this.mtVocabHelper.translateMtVocab(element.kodeMt);
          });
        }
      }
    }
    if ('issues' in this.data) {
      if (this.data.issues) {
        if (this.data.issues.length > 0) {
          this.data.issues.forEach(async element => {
            element.mtvocabteks = await this.mtVocabHelper.translateMtVocab(element.kodeMt);
          });
        }
      }
    }
    if ('classifications' in this.data) {
      if (this.data.classifications) {
        if (this.data.classifications.length > 0) {
          this.data.classifications.forEach(async element => {
            element.mtvocabteks = await this.mtVocabHelper.translateMtVocab(element.kodeMt);
          });
        }
      }
    }

    if ('documents' in this.data) {
      if (this.data.documents) {
        if (this.data.documents.length > 0) {
          this.data.documents.forEach(element => {
            element.mtvocabteks = this.mtVocabHelper.translateMtVocab(element.jenisDokumen);
          });
        }
      }
    }
    if ('activities' in this.data) {
      if (this.data.activities) {
        if (this.data.activities.length > 0) {
          for (const a of this.data.activities) {
            if (a.activitieslit.length > 0) {
              a.activitieslit.forEach(element => {
                element.mtvocabteks = this.mtVocabHelper.translateMtVocab(element.kodeMt);
              });
            }
            if (a.activitiesnonlit.length > 0) {
              a.activitiesnonlit.forEach(element => {
                element.mtvocabteks = this.mtVocabHelper.translateMtVocab(element.kodeMt);
              });
            }
          }
        }
      }
    }
  }

  translateClients() {
    if (!this.data.application) return '';
    const formatText = this.data.application.clients.map(val => {
      return val.personId.namaLengkap;
    });
    formatText.sort();
    let concattedText = '';
    for (const a of formatText) {
      concattedText === '' ? (concattedText = a) : (concattedText = concattedText + ', ' + a);
    }
    return concattedText;
  }

  translateHakTerdampak() {
    if (!this.data.violatedrights) return '';
    const formatText = this.data.violatedrights.map(val => {
      return val.mtvocabteks;
    });

    formatText.sort();
    let concattedText = '';
    for (const a of formatText) {
      concattedText === '' ? (concattedText = a) : (concattedText = concattedText + ', ' + a);
    }
    return concattedText;
  }

  translateCaseIssues() {
    if (!this.data.issues) return '';
    const formatText = this.data.issues.map(val => {
      return val.mtvocabteks;
    });

    formatText.sort();
    let concattedText = '';
    for (const a of formatText) {
      concattedText === '' ? (concattedText = a) : (concattedText = concattedText + ', ' + a);
    }
    return concattedText;
  }

  translateKlasifikasiDokumen() {
    if (!this.data.classifications) return '';
    const formatText = this.data.classifications.map(val => {
      return val.mtvocabteks;
    });

    formatText.sort();
    let concattedText = '';
    for (const a of formatText) {
      concattedText === '' ? (concattedText = a) : (concattedText = concattedText + ', ' + a);
    }
    return concattedText;
  }

  translateKorbanPelaku(type: string) {
    if (type === 'korban') {
      if (!this.data.korbans) return '';
      const formatText = this.data.korbans.map(val => {
        return val.personId.namaLengkap;
      });
      formatText.sort();
      let concattedText = '';
      for (const a of formatText) {
        concattedText === '' ? (concattedText = a) : (concattedText = concattedText + ', ' + a);
      }
      return concattedText;
    } else {
      if (!this.data.pelakus) return '';
      const formatText = this.data.pelakus.map(val => {
        return val.personId.namaLengkap;
      });
      formatText.sort();
      let concattedText = '';
      for (const a of formatText) {
        concattedText === '' ? (concattedText = a) : (concattedText = concattedText + ', ' + a);
      }
      return concattedText;
    }
  }

  translateStatusPk(data) {
    switch (data) {
      case '0111':
        return 'Belum diputuskan';
      case '4111':
        return 'Tidak Didampingi';
      case '5111':
        return 'Transfer';
      case '6111':
        return 'Didampingi';
      case '7111':
        return 'Didampingi sebagai ghost lawyer';
    }
    // { value: '0111', label: 'Belum diputuskan' },
    // { value: '4111', label: 'Tidak Didampingi' },
    // { value: '4111', label: 'Transfer' },
    // { value: '6111', label: 'Didampingi' },
    // { value: '7111', label: 'Didampingi sebagai ghost lawyer' },
  }

  allowedConsultation = async () => {
    if (this.data.hasOwnProperty('application')) {
      const ppList = await this.mtVocabHelper.findConsultationToday(this.data.application.noReg);
      // console.log(ppList);
      if (ppList.find(el => el === this.settingService.user.id)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  // schema
  schemaUmum: SFSchema = {
    properties: {
      judulKasus: {
        type: 'string',
        title: 'Judul Kasus',
      },
      kronologiKasus: {
        type: 'string',
        title: 'Deskripsi Kasus',
        ui: { widget: 'textarea', autosize: { minRows: 6, maxRows: 12 } },
      },
      // targetAdvokasi: {
      //   type: 'string',
      //   title: 'Target Akhir Advokasi',
      //   ui: { widget: 'textarea', autosize: { minRows: 6, maxRows: 12 } },
      // },
    },
    ui: {
      size: 'large',
    },
  };

  schemaTerminasi: SFSchema = {
    properties: {
      caseClosed: {
        type: 'boolean',
        title: 'Apakah Kasus Sudah Ditutup',
        description: 'Checklist jika kasus sudah ditutup',
        ui: {
          widget: 'checkbox',
        },
        default: false,
      },
      caseClosedJenis: {
        type: 'string',
        title: 'Jenis Terminasi',
        ui: {
          visibleIf: {
            caseClosed: (value: any) => value,
          },
          widget: 'select',
          asyncData: () => this.mtVocabHelper.getMtVocabEnum(93, 'kode'),
        },
      },
    },
    required: ['caseClosedJenis'],
    ui: {
      size: 'large',
    },
  };

  schemaPenangananLebihLanjut: SFSchema = {
    properties: {
      statusPendampingan: {
        type: 'string',
        title: 'Penanganan Lebih Lanjut',
        enum: [
          { value: '0111', label: 'Belum diputuskan' },
          { value: '4111', label: 'Tidak Didampingi' },
          { value: '5111', label: 'Transfer' },
        ],
        ui: {
          widget: 'select',
        },
      },
    },
    ui: {
      size: 'large',
    },
  };

  schemaCatatanPendampingan: SFSchema = {
    properties: {
      jenisPeradilan: {
        type: 'string',
        title: 'Jenis Peradilan',
        // ui: {
        //   widget: 'select',
        //   asyncData: () => this.mtVocabHelper.getMtVocabEnum(89, 'kode'),
        // },
        ui: {
          widget: 'tree-select',
          allowClear: true,
          dropdownStyle: { 'max-height': '300px' },
          asyncData: () => {
            this.loading = true;
            if (this.dataModalTemp.jenisPeradilan) {
              return this.mtVocabHelper.getMtVocabWithChildren(89, this.dataModalTemp.jenisPeradilanEnum).pipe(res => {
                this.loading = false;
                return res;
              });
            }
            return this.mtVocabHelper.getMtVocabParentTree(89).pipe(res => {
              this.loading = false;
              return res;
            });
          },
          expandChange: e => {
            // console.log(e);
            this.loading = true;
            return this.mtVocabHelper.getMtVocabChildTree(89, e.node.key).pipe(res => {
              this.loading = false;
              return res;
            });
          },
        },
      },
      catatan: {
        type: 'string',
        title: 'Catatan',
        ui: { widget: 'textarea', autosize: { minRows: 6, maxRows: 12 } },
      },
    },
    required: ['jenisPeradilan'],
    ui: {
      size: 'large',
    },
  };

  schemaAktifitasPendampingan: SFSchema = {
    properties: {
      judulAktifitas: {
        type: 'string',
        title: 'Judul Aktifitas',
      },
      tglAktifitas: {
        type: 'string',
        title: 'Tanggal Aktifitas',
        ui: { widget: 'date', mode: 'date', displayFormat: 'dd-MM-yyyy' },
      },
      activitieslit: {
        type: 'string',
        title: 'Aktifitas Litigasi',
        ui: {
          widget: 'select',
          mode: 'multiple',
          allowClear: true,
          asyncData: () => this.mtVocabHelper.getMtVocabEnum(83, 'kode'),
        },
        default: null,
      },
      activitiesnonlit: {
        type: 'string',
        title: 'Aktifitas Non-Litigasi',
        ui: {
          widget: 'select',
          mode: 'multiple',
          allowClear: true,
          asyncData: () => this.mtVocabHelper.getMtVocabEnum(84, 'kode'),
        },
        default: null,
      },
      position: {
        type: 'string',
        title: 'Posisi Kasus',
        ui: { widget: 'textarea', autosize: { minRows: 6, maxRows: 12 } },
      },
      targetAdvokasi: {
        type: 'string',
        title: 'Target',
        ui: { widget: 'textarea', autosize: { minRows: 6, maxRows: 12 } },
      },
      capaian: {
        type: 'string',
        title: 'Capaian',
        ui: { widget: 'textarea', autosize: { minRows: 6, maxRows: 12 } },
      },
      hambatan: {
        type: 'string',
        title: 'Hambatan',
        ui: { widget: 'textarea', autosize: { minRows: 6, maxRows: 12 } },
      },
      rencanaStrategi: {
        type: 'string',
        title: 'Rencana Strategi',
        ui: { widget: 'textarea', autosize: { minRows: 6, maxRows: 12 } },
      },
    },
    required: ['judulAktifitas', 'tglAktifitas'],
    ui: {
      size: 'large',
    },
  };

  schemaLampiranDokumen: SFSchema = {
    properties: {
      jenisDokumen: {
        type: 'string',
        title: 'Jenis Dokumen',
        ui: {
          widget: 'select',
          asyncData: () => this.mtVocabHelper.getMtVocabEnum(91, 'kode'),
        },
      },
      judulDokumen: {
        type: 'string',
        title: 'Judul Dokumen',
      },
      link: {
        type: 'string',
        title: 'Link',
      },
      filename: {
        type: 'string',
        title: 'Upload Dokumen',
        readOnly: false,
        ui: {
          widget: 'custom',
        },
      },
      keterangan: {
        type: 'string',
        title: 'Keterangan',
        ui: { widget: 'textarea', autosize: { minRows: 6, maxRows: 12 } },
      },
    },
    required: ['jenisDokumen'],
    ui: {
      size: 'large',
    },
  };

  schemaRapatPK: SFSchema = {
    properties: {
      tglRapat: {
        type: 'string',
        title: 'Tanggal Rapat PK',
        ui: { widget: 'date', mode: 'date', displayFormat: 'dd-MM-yyyy' },
      },
      didampingi: {
        type: 'string',
        title: 'Penanganan Lebih Lanjut',
        enum: [
          { value: '0111', label: 'Belum diputuskan' },
          { value: '4111', label: 'Tidak Didampingi' },
          { value: '5111', label: 'Transfer' },
          { value: '6111', label: 'Didampingi' },
          { value: '7111', label: 'Didampingi sebagai ghost lawyer' },
        ],
        ui: {
          widget: 'select',
        },
      },
      ppPendamping: {
        type: 'string',
        title: 'PP Pendamping',
        ui: {
          widget: 'select',
          asyncData: () => this.mtVocabHelper.getUsers(['3']),
          visibleIf: {
            didampingi: (value: any) => value === '0111' || value === '6111' || value === '7111',
          },
        },
      },
      statusAlasanTdk: {
        type: 'string',
        title: 'Alasan bila kasus tidak didampingi/transfer',
        ui: {
          widget: 'textarea',
          autosize: { minRows: 6, maxRows: 12 },
          visibleIf: {
            didampingi: (value: any) => value === '4111' || value === '5111',
          },
        },
      },
      targetAkhirAdvokasi: {
        type: 'string',
        title: 'Target Akhir Advokasi',
        ui: {
          widget: 'textarea',
          autosize: { minRows: 6, maxRows: 12 },
        },
      },
      strategiAdvokasi: {
        type: 'string',
        title: 'Strategi Advokasi',
        ui: {
          widget: 'textarea',
          autosize: { minRows: 6, maxRows: 12 },
        },
      },
    },
    required: ['ppPendamping', 'didampingi', 'tglRapat', 'statusAlasanTdk'],
    ui: {
      size: 'large',
    },
  };

  schemaAnalisa: SFSchema = {
    properties: {
      korban: {
        type: 'string',
        title: 'Korban',
        readOnly: true,
        ui: {
          widget: 'custom',
        },
      },
      pelaku: {
        type: 'string',
        title: 'Pelaku',
        readOnly: true,
        ui: {
          widget: 'custom',
        },
      },
      issues: {
        type: 'string',
        title: 'Issue Lokal',
        ui: {
          widget: 'select',
          mode: 'multiple',
          asyncData: () => this.mtVocabHelper.getMtVocabEnum(61, 'kode'),
        },
      },
      hakTerdampak: {
        type: 'string',
        title: 'Hak Terdampak',
        ui: {
          widget: 'tree-select',
          multiple: true,
          allowClear: true,
          dropdownStyle: { 'max-height': '300px' },
          asyncData: () => {
            return of(this.dataHakTerdampak);
          },
          expandChange: e => {
            this.loading = true;
            // console.log(e);
            return this.mtVocabHelper.getMtVocabChildTree(3, e.node.key).pipe(res => {
              this.loading = false;
              return res;
            });
          },
        },
      },
    },
    ui: {
      size: 'large',
    },
  };

  schemaPilihPelaku: SFSchema = {
    properties: {
      personId: {
        type: 'string',
        title: 'Pelaku',
        readOnly: true,
        ui: {
          widget: 'custom',
        },
      },
      jenisPelaku: {
        type: 'string',
        title: 'Jenis Pelaku',
        ui: {
          widget: 'tree-select',
          allowClear: true,
          dropdownStyle: { 'max-height': '300px' },
          asyncData: () => {
            return of(this.dataJenisPelaku);
          },
          expandChange: e => {
            this.loading = true;
            // console.log(e);
            return this.mtVocabHelper.getMtVocabChildTree(4, e.node.key).pipe(res => {
              this.loading = false;
              return res;
            });
          },
        },
      },
    },
    required: ['personId'],
    ui: {
      size: 'large',
    },
  };

  schemaKlasifikasiDokumen: SFSchema = {
    properties: {
      classifications: {
        type: 'string',
        title: 'Klasifikasi Pendokumenan',
        ui: {
          widget: 'tree-select',
          multiple: true,
          allowClear: true,
          dropdownStyle: { 'max-height': '300px' },
          asyncData: () => {
            return of(this.dataKlasifikasiDokumen);
          },
          expandChange: e => {
            this.loading = true;
            return this.mtVocabHelper.getMtVocabChildTree(72, e.node.key).pipe(res => {
              this.loading = false;
              return res;
            });
          },
        },
      },
    },
    ui: {
      size: 'large',
    },
  };

  schemaTransfer: SFSchema = {
    properties: {
      tglTransfer: {
        type: 'string',
        title: 'Tanggal Transfer',
        ui: { widget: 'date', mode: 'date', displayFormat: 'dd-MM-yyyy' },
      },
      network: {
        type: 'string',
        title: 'Ditransfer Ke',
        ui: {
          widget: 'select',
          asyncData: () => this.mtVocabHelper.getNetworksEnum('1'),
        },
      },
      catatan: {
        type: 'string',
        title: 'Catatan',
        ui: {
          widget: 'textarea',
          autosize: { minRows: 6, maxRows: 12 },
        },
      },
    },
    required: ['tglTransfer', 'network'],
    ui: {
      size: 'large',
    },
  };

  submitAnalisa(data) {
    // console.log(data);
    // console.log(this.korbanData);

    // console.log('hoiii');
    this.loading = true;
    this.destroyCaseIssue
      .mutate({ where: { caseId: { id: this.data.id } } })
      .toPromise()
      .then(
        res => {
          this.loading = false;
          this.loading = true;
          this.destroyKorban
            .mutate({ where: { caseId: { id: this.data.id } } })
            .toPromise()
            .then(
              res => {
                this.loading = false;
                this.loading = true;
                this.destroyPelaku
                  .mutate({ where: { caseId: { id: this.data.id } } })
                  .toPromise()
                  .then(
                    // tslint:disable-next-line: no-shadowed-variable
                    res => {
                      this.loading = false;
                      this.loading = true;
                      this.destroyCaseViolatedRight
                        .mutate({ where: { caseId: { id: this.data.id } } })
                        .toPromise()
                        .then(
                          // tslint:disable-next-line: no-shadowed-variable
                          res => {
                            this.loading = false;
                            // console.log('siniwoii');
                            this.dataMutationUpdateUmum(this.processAnalisa(data), { id: this.data.id });
                          },
                          error => {
                            this.loading = false;
                            this.msg.error(JSON.stringify(error));
                          },
                        );
                      // this.dataMutationUpdateUmum(this.processAktifitasPendampingan(data), { id: this.data.id });
                    },
                    error => {
                      this.loading = false;
                      this.msg.error(JSON.stringify(error));
                    },
                  );
                // this.dataMutationUpdateUmum(this.processAktifitasPendampingan(data), { id: this.data.id });
              },
              error => {
                this.loading = false;
                this.msg.error(JSON.stringify(error));
              },
            );
        },
        error => {
          this.loading = false;
          this.msg.error(JSON.stringify(error));
        },
      );
  }

  submitRapatPK(data) {
    // console.log(data);
    this.dataMutationUpdateUmum(this.processDataRapatPK(data), { id: this.data.id });
  }

  submitTransfer(data) {
    // console.log(data);
    this.dataMutationUpdateUmum(this.processTransfer(data), { id: this.data.id });
  }

  submitCatatanPendampingan(data) {
    // console.log(data);
    this.dataMutationUpdateUmum(this.processCatatanPendampingan(data), { id: this.data.id });
  }

  submitLampiranDokumen(data) {
    // console.log(data);
    this.dataMutationUpdateUmum(this.processLampiranDokumen(data), { id: this.data.id });
    this.fileList.length = 0;
  }

  submitAktifitasPendampingan(data) {
    this.loading = true;
    // console.log(data);
    if (this.modeEditModal === 'edit') {
      // console.log('hoiii');

      this.destroyNonlitGQL
        .mutate({ where: { caseProgressActivityId: { id: data.id } } })
        .toPromise()
        .then(
          res => {
            this.destroyLitGQL
              .mutate({ where: { caseProgressActivityId: { id: data.id } } })
              .toPromise()
              .then(result => {
                this.loading = false;
                this.dataMutationUpdateUmum(this.processAktifitasPendampingan(data), { id: this.data.id });
              });
          },
          error => {
            this.loading = false;
            this.msg.error(JSON.stringify(error));
          },
        );
    } else {
      this.loading = false;
      this.dataMutationUpdateUmum(this.processAktifitasPendampingan(data), { id: this.data.id });
    }
  }

  submitKlasifikasiDokumen(data) {
    this.loading = true;
    // console.log(data);

    // console.log('hoiii');

    this.destroyCaseClassification
      .mutate({ where: { caseId: { id: this.data.id } } })
      .toPromise()
      .then(
        res => {
          this.loading = false;
          this.dataMutationUpdateUmum(this.processKlasifikasiDokumen(data), { id: this.data.id });
        },
        error => {
          this.loading = false;
          this.msg.error(JSON.stringify(error));
        },
      );
  }

  processAktifitasPendampingan(data): CaseUpdateInput | string {
    if (this.modeEditModal === 'edit') {
      const activitieslit = <CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput[]>[];
      if (data.activitieslit) {
        for (const a of data.activitieslit) {
          activitieslit.push({
            kodeMt: a,
          });
        }
      }
      const activitiesnonlit = <CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput[]>[];
      if (data.activitiesnonlit) {
        for (const a of data.activitiesnonlit) {
          activitiesnonlit.push({
            kodeMt: a,
          });
        }
      }
      return <CaseUpdateInput>{
        activities: {
          update: [
            {
              data: {
                capaian: data.capaian,
                createdBy: this.settingService.user.name,
                hambatan: data.hambatan,
                judulAktifitas: data.judulAktifitas,
                position: data.position,
                rencanaStrategi: data.rencanaStrategi,
                targetAdvokasi: data.targetAdvokasi,
                tglAktifitas: moment(data.tglAktifitas).toDate(),
                activitieslit: activitieslit.length !== 0 ? { create: activitieslit } : null,
                activitiesnonlit: activitiesnonlit.length !== 0 ? { create: activitiesnonlit } : null,
                updatedBy: this.settingService.user.name,
              },
              where: { id: data.id },
            },
          ],
        },
      };
    } else {
      // console.log('masuksini');
      const activitieslit = <CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput[]>[];
      if (data.activitieslit) {
        for (const a of data.activitieslit) {
          activitieslit.push({
            kodeMt: a,
          });
        }
      }

      const activitiesnonlit = <CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput[]>[];
      if (data.activitiesnonlit) {
        for (const a of data.activitiesnonlit) {
          activitiesnonlit.push({
            kodeMt: a,
          });
        }
      }
      return <CaseUpdateInput>{
        activities: {
          create: [
            {
              capaian: data.capaian,
              createdBy: this.settingService.user.name,
              hambatan: data.hambatan,
              judulAktifitas: data.judulAktifitas,
              position: data.position,
              rencanaStrategi: data.rencanaStrategi,
              targetAdvokasi: data.targetAdvokasi,
              tglAktifitas: moment(data.tglAktifitas).toDate(),
              activitieslit: activitieslit.length !== 0 ? { create: activitieslit } : null,
              activitiesnonlit: activitiesnonlit.length !== 0 ? { create: activitiesnonlit } : null,
            },
          ],
        },
      };
    }
  }

  processAnalisa(data): CaseUpdateInput | string {
    const korban = <CaseKorbanCreateWithoutCaseIdInput[]>[];
    const pelaku = <CasePelakuCreateWithoutCaseIdInput[]>[];
    const issues = <CaseIssueCreateWithoutCaseIdInput[]>[];
    const violatedRight = <CaseViolatedRightCreateWithoutCaseIdInput[]>[];
    for (const a of this.korbanData) {
      korban.push({ personId: { connect: { id: a.id } } });
    }
    for (const a of this.pelakuData) {
      if ('jenisPelaku' in a) {
        if (a.jenisPelaku) {
          pelaku.push({ personId: { connect: { id: a.personId.id } }, jenisPelaku: a.jenisPelaku });
        } else {
          pelaku.push({ personId: { connect: { id: a.personId.id } } });
        }
      } else {
        pelaku.push({ personId: { connect: { id: a.personId.id } } });
      }
    }
    for (const a of data.hakTerdampak) {
      violatedRight.push({ kodeMt: a });
    }
    for (const a of data.issues) {
      issues.push({ kodeMt: a });
    }

    return <CaseUpdateInput>{
      korbans: { create: korban },
      pelakus: { create: pelaku },
      violatedrights: { create: violatedRight },
      issues: { create: issues },
    };
  }

  processKlasifikasiDokumen(data): CaseUpdateInput | string {
    const classification = <CaseClassificationCreateWithoutCaseIdInput[]>[];

    for (const a of data.classifications) {
      classification.push({ kodeMt: a });
    }

    return <CaseUpdateInput>{
      classifications: { create: classification },
    };
  }

  processCatatanPendampingan(data): CaseUpdateInput | string {
    if ('progresses' in this.data) {
      if (this.data.progresses !== null) {
        return <CaseUpdateInput>{
          application: { update: { tahap: '3012' } },
          progresses: {
            update: {
              catatan: data.catatan,
              jenisPeradilan: data.jenisPeradilan,
              updatedBy: this.settingService.user.name,
            },
          },
        };
      } else {
        // console.log('masuksini');
        return <CaseUpdateInput>{
          application: { update: { tahap: '3012' } },
          updatedBy: this.settingService.user.name,
          progresses: <CaseProgressUpdateOneWithoutCaseIdInput>{
            create: <CaseProgressCreateWithoutCaseIdInput>{
              updatedBy: '',
              catatan: data.catatan,
              jenisPeradilan: data.jenisPeradilan,
              createdBy: this.settingService.user.name,
            },
          },
        };
      }
    }
  }

  processLampiranDokumen(data): CaseUpdateInput | string {
    let filename = '';
    if (this.fileList[0]) {
      if (`filename` in this.fileList[0]) {
        if (this.fileList[0].filename) {
          filename = this.fileList[0].filename;
        }
      }
    }
    if (this.modeEditModal === 'add') {
      return <CaseUpdateInput>{
        documents: {
          create: [
            {
              createdBy: this.settingService.user.name,
              jenisDokumen: data.jenisDokumen,
              judulDokumen: data.judulDokumen,
              keterangan: data.keterangan,
              filename: filename,
              link: data.link,
            },
          ],
        },
      };
    } else {
      return <CaseUpdateInput>{
        documents: {
          update: [
            {
              data: {
                jenisDokumen: data.jenisDokumen,
                judulDokumen: data.judulDokumen,
                keterangan: data.keterangan,
                link: data.link,
                filename: filename,
                updatedBy: this.settingService.user.name,
              },
              where: { id: data.id },
            },
          ],
        },
      };
    }
  }

  processTransfer(data): CaseUpdateInput | string {
    if ('transfer' in this.data) {
      if (this.data.transfer) {
        return <CaseUpdateInput>{
          transfer: {
            update: {
              catatan: data.catatan,
              network: { connect: { id: data.network } },
              updatedBy: this.settingService.user.name,
              tglTransfer: moment(data.tglTransfer).toDate(),
            },
          },
        };
      } else {
        // console.log('masuksini');
        return {
          transfer: {
            create: {
              catatan: data.catatan,
              network: { connect: { id: data.network } },
              createdBy: this.settingService.user.name,
              tglTransfer: moment(data.tglTransfer).toDate(),
            },
          },
        };
      }
    }
  }

  processDataRapatPK(data): CaseUpdateInput | string {
    if ('progresses' in this.data) {
      if (this.data.progresses) {
        console.log(this.data.progresses);
        return 'Status penanganan lebih lanjut tidak bisa dirubah karena sudah ada aktifitas pendampingan';
      }
    }
    if ('activities' in this.data) {
      if (this.data.activities) {
        if (this.data.activities.length > 0) {
          console.log(this.data.activities);
          return 'Status penanganan lebih lanjut tidak bisa dirubah karena sudah ada aktifitas pendampingan';
        }
      }
    }
    switch (data.didampingi) {
      case '0111':
        return <CaseUpdateInput>{
          statusPendampingan: '0111',
          application: { update: { tahap: '2012' } },
          pk: {
            update: {
              tglRapat: moment(data.tglRapat).toDate(),
              updatedBy: this.settingService.user.name,
              didampingi: data.didampingi,
              ppPendamping: { connect: { id: data.ppPendamping } },
              statusAlasanTdk: '',
              targetAkhirAdvokasi: data.targetAkhirAdvokasi,
              strategiAdvokasi: data.strategiAdvokasi,
            },
          },
          transfer: 'transfer' in this.data ? (this.data.transfer !== null ? { delete: true } : null) : null,
        };
      case '4111':
        return <CaseUpdateInput>{
          statusPendampingan: '4111',
          application: { update: { tahap: '2012' } },
          pk: {
            update: {
              tglRapat: moment(data.tglRapat).toDate(),
              updatedBy: this.settingService.user.name,
              didampingi: data.didampingi,
              targetAkhirAdvokasi: data.targetAkhirAdvokasi,
              strategiAdvokasi: data.strategiAdvokasi,
              ppPendamping:
                'ppPendamping' in this.data.pk
                  ? this.data.pk.ppPendamping !== null
                    ? { disconnect: true }
                    : null
                  : null,
              statusAlasanTdk: data.statusAlasanTdk,
            },
          },
          transfer: 'transfer' in this.data ? (this.data.transfer !== null ? { delete: true } : null) : null,
        };
      case '5111':
        return <CaseUpdateInput>{
          statusPendampingan: '5111',
          application: { update: { tahap: '2012' } },
          pk: {
            update: {
              tglRapat: moment(data.tglRapat).toDate(),
              updatedBy: this.settingService.user.name,
              didampingi: data.didampingi,
              targetAkhirAdvokasi: data.targetAkhirAdvokasi,
              strategiAdvokasi: data.strategiAdvokasi,
              ppPendamping:
                'ppPendamping' in this.data.pk
                  ? this.data.pk.ppPendamping !== null
                    ? { disconnect: true }
                    : null
                  : null,
              statusAlasanTdk: data.statusAlasanTdk,
            },
          },
          transfer:
            'transfer' in this.data
              ? this.data.transfer !== null
                ? null
                : { create: { tglTransfer: moment().toDate() } }
              : { create: { tglTransfer: moment().toDate() } },
        };
      case '6111':
        return <CaseUpdateInput>{
          statusPendampingan: '6111',
          application: { update: { tahap: '2012' } },
          pk: {
            update: {
              tglRapat: moment(data.tglRapat).toDate(),
              updatedBy: this.settingService.user.name,
              didampingi: data.didampingi,
              ppPendamping: { connect: { id: data.ppPendamping } },
              targetAkhirAdvokasi: data.targetAkhirAdvokasi,
              strategiAdvokasi: data.strategiAdvokasi,
              statusAlasanTdk: '',
            },
          },
          transfer: 'transfer' in this.data ? (this.data.transfer !== null ? { delete: true } : null) : null,
        };

      case '7111':
        return <CaseUpdateInput>{
          statusPendampingan: '7111',
          application: { update: { tahap: '2012' } },
          pk: {
            update: {
              tglRapat: moment(data.tglRapat).toDate(),
              updatedBy: this.settingService.user.name,
              didampingi: data.didampingi,
              ppPendamping: { connect: { id: data.ppPendamping } },
              targetAkhirAdvokasi: data.targetAkhirAdvokasi,
              strategiAdvokasi: data.strategiAdvokasi,
              statusAlasanTdk: '',
            },
          },
          transfer: 'transfer' in this.data ? (this.data.transfer !== null ? { delete: true } : null) : null,
        };
    }
  }

  submitUmum(data) {
    // console.log(data);
    this.dataMutationUpdateUmum(data, { id: this.data.id });
  }

  submitPenangananLebihLanjut(data) {
    // console.log(data);
    this.dataMutationUpdateUmum(this.processPenangananLebihLanjut(data), { id: this.data.id });
  }

  processPenangananLebihLanjut(data): CaseUpdateInput | string {
    return <CaseUpdateInput>{
      statusPendampingan: data.statusPendampingan,
      updatedBy: this.settingService.user.name,
    };
  }

  submitTerminasi(data) {
    // console.log(data);
    this.dataMutationUpdateUmum(this.processTerminasi(data), { id: this.data.id });
  }

  processTerminasi(data): CaseUpdateInput | string {
    return <CaseUpdateInput>{
      caseClosed: data.caseClosed,
      caseClosedJenis: data.caseClosedJenis,
      application: { update: { tahap: '4012' } },
    };
  }

  editUmum(tpl: TemplateRef<{}>, title: string) {
    this.modalInstance = this.modalSrv.create({
      nzTitle: title,
      nzContent: tpl,
      nzWidth: this.card.nativeElement.offsetWidth,
      nzFooter: null,
      nzBodyStyle: {},
    });
  }

  editRapatPK(tpl: TemplateRef<{}>, title: string) {
    this.modalInstance = this.modalSrv.create({
      nzTitle: title,
      nzContent: tpl,
      nzWidth: this.card.nativeElement.offsetWidth,
      nzFooter: null,
      nzBodyStyle: {},
    });
  }

  async openModalRapatPK(template: TemplateRef<{}>) {
    this.loading = true;
    if (this.data.application.tahap === '4012') {
      this.msg.info('Kasus Sudah Diterminasi');
      this.loading = false;
      return;
    }
    if (!this.settingService.user.roles_type.find(el => el.type.id === 5)) {
      this.msg.info('Hanya Kabid yang bisa mengedit hasil Rapat PK');
      this.loading = false;
      return;
    }
    if (!this.data.pk) {
      this.msg.info('Tidak Ada Jadwal Rapat PK');
      this.loading = false;
      return;
    }

    if (!this.data.pk.tglRapat) {
      this.msg.info('Tidak Ada Jadwal Rapat PK');
      this.loading = false;
      return;
    }

    if (!moment().isSameOrAfter(moment(this.data.pk.tglRapat), 'day')) {
      this.msg.info('Hasil Rapat PK Baru Bisa Diedit Di Hari Rapat PK atau Setelahnya');
      this.loading = false;
      return;
    }

    if ('pk' in this.data) {
      if (this.data.pk) {
        this.dataModalTemp = JSON.parse(JSON.stringify(this.data.pk));
        if (this.dataModalTemp.ppPendamping) this.dataModalTemp.ppPendamping = this.dataModalTemp.ppPendamping.id;
      }
    }

    this.editRapatPK(template, 'Edit Data Rapat PK');
    this.loading = false;
  }

  async openModalTerminasi(template: TemplateRef<{}>) {
    this.loading = true;
    if (this.data.application.tahap === '4012') {
      this.msg.info('Kasus Sudah Diterminasi');
      this.loading = false;
      return;
    }
    if (!this.settingService.user.roles_type.find(el => el.type.id === 5)) {
      this.msg.info('Hanya Kabid yang bisa mengedit terminasi');
      this.loading = false;
      return;
    }

    this.dataModalTemp = {
      caseClosed: this.data.caseClosed,
      caseClosedJenis: this.data.caseClosedJenis,
    };

    // console.log(this.dataModalTemp);

    this.editUmum(template, 'Edit Data Terminasi');
    this.loading = false;
  }

  async openModalAnalisa(template: TemplateRef<{}>) {
    this.loading = true;
    if (this.data.application.tahap === '4012') {
      this.msg.info('Kasus Sudah Diterminasi');
      this.loading = false;
      return;
    }
    const ppList = await this.mtVocabHelper.findHandlingPPArray(this.data.id);

    if (!ppList[0].find(el => el.id === this.settingService.user.id)) {
      this.msg.info('Anda Tidak Pernah Menangani Kasus Ini');
      this.loading = false;
      return;
    }

    this.korbanData = this.data.korbans.map(res => res.personId);
    this.pelakuData = this.data.pelakus.map(res => res);

    for (const a of this.pelakuData) {
      if (!a.jenisPelaku) continue;
      a.jenisPelakuTeks = await this.mtVocabHelper.translateMtVocab(a.jenisPelaku);
    }

    const arrHakTerdampak = [];
    for (const a of this.data.violatedrights) {
      arrHakTerdampak.push(a.kodeMt);
    }

    const arrCaseIssues = [];
    for (const a of this.data.issues) {
      arrCaseIssues.push(a.kodeMt);
    }

    this.dataModalTemp = {
      hakTerdampak: arrHakTerdampak,
      issues: arrCaseIssues,
    };
    // console.log(this.dataModalTemp);
    // this.sfUmum. formData = {
    //   judulKasus: this.data.judulKasus,
    //   kronologiKasus: this.data.kronologiKasus,
    //   targetAdvokasi: this.data.targetAdvokasi,
    // };

    if (this.dataHakTerdampak.length === 0) {
      this.dataHakTerdampak = await this.mtVocabHelper.getAllTree(3);
    }

    this.editUmum(template, 'Edit Data Analisa');
    this.loading = false;
  }

  openModalListPerson(type: string) {
    this.korbanOrPelaku = type;
    this.add(this.listPerson, 'Pilih Person');
  }
  async openModalPelaku() {
    // this.korbanOrPelaku = type;
    if (this.dataJenisPelaku.length === 0) {
      this.dataJenisPelaku = await this.mtVocabHelper.getAllTree(4);
    }
    this.modalInstanceLevelTwo = this.modalSrv.create({
      nzTitle: 'Tambah Pelaku',
      nzContent: this.modalPelaku,
      nzWidth: this.card.nativeElement.offsetWidth,
      nzFooter: null,
      nzBodyStyle: {},
    });
  }
  add(tpl: TemplateRef<{}>, title: string) {
    this.modalInstance = this.modalSrv.create({
      nzTitle: title,
      nzContent: tpl,
      nzWidth: this.card.nativeElement.offsetWidth,
      nzFooter: null,
      nzBodyStyle: {},
    });
  }
  closeModalAndSaveData(event: AllPerson.Persons) {
    if (this.korbanOrPelaku === 'korban') {
      this.modalInstance.close();
      this.sfListPerson.setValue('/korban', event);
      this.korbanData.push(event);
      // console.log(this.korbanData);
      this.stKorban.reload();
    } else {
      this.modalInstance.close();
      this.sfPilihPelaku.setValue('/personId', event);
      // this.pelakuData.push(event);
      // console.log(this.pelakuData);
      // this.stPelaku.reload();
    }
  }

  async savePelaku(event: any) {
    // this.sfListPerson.setValue('/pelaku', event);
    // console.log(event);
    event.jenisPelakuTeks = await this.mtVocabHelper.translateMtVocab(event.jenisPelaku);
    this.pelakuData.push(event);
    this.modalInstanceLevelTwo.close();
    this.dataModalTempLevelTwo = {};
    // console.log(this.pelakuData);
    this.stPelaku.reload();
  }

  async openModalTransfer(template: TemplateRef<{}>) {
    this.loading = true;
    if (this.data.application.tahap === '4012') {
      this.msg.info('Kasus Sudah Diterminasi');
      this.loading = false;
      return;
    }
    if (!this.settingService.user.roles_type.find(el => el.type.id === 5)) {
      this.msg.info('Hanya Kabid yang bisa mengedit form Transfer');
      this.loading = false;
      return;
    }
    if ('pk' in this.data) {
      if (this.data.pk !== null) {
        if (this.data.pk.didampingi !== '5111') {
          this.msg.info('Hasil Rapat PK harus menjadi transfer untuk mengedit Form ini');
          this.loading = false;
          return;
        }
      } else {
        if (this.data.statusPendampingan !== '5111') {
          this.msg.info('Status penanganan lebih lanjut bukan untuk di transfer');
          this.loading = false;
          return;
        }
      }
    } else {
      if (this.data.statusPendampingan !== '5111') {
        this.msg.info('Status penanganan lebih lanjut bukan untuk di transfer');
        this.loading = false;
        return;
      }
    }

    if ('transfer' in this.data) {
      if (this.data.transfer) {
        // console.log(this.data.transfer);
        this.dataModalTemp = this.data.transfer;

        if ('network' in this.data.transfer) {
          if (this.data.transfer.network) {
            this.dataModalTemp.network = this.data.transfer.network.id;
          }
        }
      }
    }
    // console.log(this.dataModalTemp);

    this.editUmum(template, 'Edit Data Transfer');
    this.loading = false;
  }

  async openCatatanPendampingan(template: TemplateRef<{}>) {
    this.loading = true;
    if (this.data.application.tahap === '4012') {
      this.msg.info('Kasus Sudah Diterminasi');
      this.loading = false;
      return;
    }
    if (this.data.pk !== null) {
      if ('ppPendamping' in this.data.pk) {
        if (this.data.pk.ppPendamping) {
          if (this.data.pk.ppPendamping.id !== this.settingService.user.id) {
            this.msg.info('Hanya PP Pendamping Yang Bisa Menambahkan Catatan Pendampingan');
            this.loading = false;
            return;
          }
        } else {
          this.msg.info('Hanya PP Pendamping Yang Bisa Menambahkan Catatan Pendampingan');
          this.loading = false;
          return;
        }
      }
    } else {
      this.msg.info('PP Pendamping Belum Ditentukan');
      this.loading = false;
      return;
    }
    if ('progresses' in this.data) {
      if (this.data.progresses) {
        this.dataModalTemp = JSON.parse(JSON.stringify(this.data.progresses));
        // console.log(this.dataModalTemp);
        if (this.dataModalTemp.jenisPeradilan) {
          const arrjenisPeradilan = (await this.mtVocabHelper.findParent(this.dataModalTemp.jenisPeradilan)).reverse();
          // console.log(arrjenisPeradilan);
          let longEnumjenisPeradilan: any;
          let ind = -1;
          for (const b of arrjenisPeradilan) {
            const titleAsync = await this.mtVocabHelper.translateMtVocab(b);
            ind++;
            switch (ind) {
              case 0:
                longEnumjenisPeradilan = {
                  title: titleAsync,
                  key: b,
                  children: [],
                };
                break;
              case 1:
                longEnumjenisPeradilan.children.push({
                  title: titleAsync,
                  key: b,
                  children: [],
                });
                break;

              default:
                break;
            }
          }

          this.dataModalTemp.jenisPeradilanEnum = longEnumjenisPeradilan;
        }
      }
    }

    // console.log(this.dataModalTemp);

    this.editUmum(template, 'Edit Data Jenis Peradilan');
    this.loading = false;
  }

  async openAktifitasPendampinganAdd(template: TemplateRef<{}>) {
    this.loading = true;
    if (this.data.application.tahap === '4012') {
      this.msg.info('Kasus Sudah Diterminasi');
      this.loading = false;
      return;
    }
    if (this.data.pk !== null) {
      if ('ppPendamping' in this.data.pk) {
        if (!this.data.pk.ppPendamping) {
          this.msg.info('Hanya PP Pendamping Yang Bisa Menambahkan Catatan Pendampingan');
          this.loading = false;
          return;
        }
        if (this.data.pk.ppPendamping.id !== this.settingService.user.id) {
          this.msg.info('Hanya PP Pendamping Yang Bisa Menambahkan Catatan Pendampingan');
          this.loading = false;
          return;
        }
      }
    } else {
      this.msg.info('PP Pendamping Belum Ditentukan');
      this.loading = false;
      return;
    }
    if ('activities' in this.data) {
      if (this.data.activities) {
        if (this.data.activities.length > 0) {
          this.dataModalTemp = this.data.activities;
        }
      }
    }
    this.modeEditModal = 'add';
    this.dataModalTemp = {};
    // console.log(this.dataModalTemp);
    this.editAktifitasPendampingan(template, 'Add Data Aktifitas Pendampingan');
    this.loading = false;
  }

  async openLampiranDokumenAdd(template: TemplateRef<{}>) {
    this.fileList = [];
    if (!this.settingService.user.roles_type.find(el => el.type.id === 6)) {
      this.msg.info('Hanya Dokumentalis yang bisa menambah Dokumen');
      this.loading = false;
      return;
    }
    this.loading = true;

    this.modeEditModal = 'add';
    this.dataModalTemp = {};
    // console.log(this.dataModalTemp);
    this.editAktifitasPendampingan(template, 'Add Data Lampiran Dokumen');
    this.loading = false;
  }

  async openModalUmum(template: TemplateRef<{}>) {
    this.loading = true;
    if (this.data.application.tahap === '4012') {
      this.msg.info('Kasus Sudah Diterminasi');
      this.loading = false;
      return;
    }

    const ppList = await this.mtVocabHelper.findHandlingPPArray(this.data.id);

    if (!ppList[0].find(el => el.id === this.settingService.user.id)) {
      this.msg.info('Anda Tidak Pernah Menangani Kasus Ini');
      this.loading = false;
      return;
    }

    this.dataModalTemp = {
      judulKasus: this.data.judulKasus,
      kronologiKasus: this.data.kronologiKasus,
      targetAdvokasi: this.data.targetAdvokasi,
    };
    // console.log(this.dataModalTemp);
    // this.sfUmum. formData = {
    //   judulKasus: this.data.judulKasus,
    //   kronologiKasus: this.data.kronologiKasus,
    //   targetAdvokasi: this.data.targetAdvokasi,
    // };
    this.editUmum(template, 'Edit Data Umum');
    this.loading = false;
  }

  async openModalKlasifikasiDokumen(template: TemplateRef<{}>) {
    this.loading = true;
    if (!this.settingService.user.roles_type.find(el => el.type.id === 6)) {
      this.msg.info('Hanya Dokumentalis yang bisa mengedit Dokumen');
      this.loading = false;
      return;
    }
    const arrKlasifikasiDokumen = [];
    for (const a of this.data.classifications) {
      arrKlasifikasiDokumen.push(a.kodeMt);
    }
    this.dataModalTemp = {
      classifications: arrKlasifikasiDokumen,
    };
    // console.log(this.dataModalTemp);
    // this.sfUmum. formData = {
    //   judulKasus: this.data.judulKasus,
    //   kronologiKasus: this.data.kronologiKasus,
    //   targetAdvokasi: this.data.targetAdvokasi,
    // };
    if (this.dataKlasifikasiDokumen.length === 0) {
      this.dataKlasifikasiDokumen = await this.mtVocabHelper.getAllTree(72);
    }
    this.editUmum(template, 'Edit Data Klasifikasi Dokumen');
    this.loading = false;
  }

  async openModalPenangananLebihLanjut(template: TemplateRef<{}>) {
    this.loading = true;
    if (this.data.application.tahap === '4012') {
      this.msg.info('Kasus Sudah Diterminasi');
      this.loading = false;
      return;
    }
    // const ppList = await this.mtVocabHelper.findHandlingPPArray(this.data.id);

    if ('pk' in this.data) {
      if (this.data.pk !== null) {
        this.msg.info('Sudah ada Rapat PK, edit keputusan melalui Rapat PK');
        this.loading = false;
        return;
      }
    }

    this.dataModalTemp = {
      statusPendampingan: this.data.statusPendampingan,
    };
    // console.log(this.dataModalTemp);
    // this.sfUmum. formData = {
    //   judulKasus: this.data.judulKasus,
    //   kronologiKasus: this.data.kronologiKasus,
    //   targetAdvokasi: this.data.targetAdvokasi,
    // };
    this.editUmum(template, 'Edit Penanganan Lebih Lanjut');
    this.loading = false;
  }

  dataMutationUpdateUmum(data: CaseUpdateInput | string, id: CaseWhereUniqueInput) {
    this.loading = true;
    if (typeof data === 'string') {
      this.msg.info(data);
      this.loading = false;
      return;
    }
    // console.log(data);
    this.putCaseGQL
      .mutate(<PutCaseMutationVariables>{ where: id, data: data })
      .pipe(take(1))
      .subscribe(
        () => {
          this.loading = false;
          this.msg.success('Data Berhasil Diubah');
          this.getData();
          if (this.modalInstance) this.modalInstance.close();
          if (this.modalInstance) this.modalSrv.closeAll();
          this.translateMtVocab();
        },
        error => {
          this.loading = false;
          this.msg.error('Data Gagal Diubah');
          this.msg.error(JSON.stringify(error));
        },
      );
  }

  schemaKonsultasi: SFSchema = {
    properties: {
      judulAktifitas: {
        type: 'string',
        title: 'Judul Aktifitas',
      },
      isiKonsul: {
        type: 'string',
        title: 'Isi Konsultasi',
        ui: { widget: 'textarea', autosize: { minRows: 6, maxRows: 12 } },
      },
      harapan: {
        type: 'string',
        title: 'Harapan',
        ui: { widget: 'textarea', autosize: { minRows: 6, maxRows: 12 } },
      },
      saranHukum: {
        type: 'string',
        title: 'Saran Hukum',
        ui: { widget: 'textarea', autosize: { minRows: 6, maxRows: 12 } },
      },
      rencanaTindakLanjut: {
        type: 'string',
        title: 'Rencana Tindak Lanjut',
        ui: { widget: 'textarea', autosize: { minRows: 6, maxRows: 12 } },
      },
    },
    ui: {
      size: 'large',
    },
  };

  submitKonsultasi(data) {
    // console.log(data);
    if (this.modeEditModal === 'add') {
      this.dataMutationUpdateUmum(this.processDataConsultation(data), { id: this.data.id });
    } else {
      this.dataMutationUpdateUmum(this.processDataConsultationEdit(data), { id: this.data.id });
    }
  }

  processDataConsultation(data) {
    const appList: CaseConsultationAppCreateWithoutCaseConsultationIdInput[] = [];
    const logRequestToday = this.data.logRequests.find(el => moment().isSame(el.tglRequest, 'day'));
    // console.log(logRequestToday);
    for (const a of logRequestToday.pp) {
      const b = <CaseConsultationAppCreateWithoutCaseConsultationIdInput>{
        appConsultation: { connect: { id: a.appConsultation.id } },
      };
      appList.push(b);
    }

    const dataInput = <CaseUpdateInput>{
      logRequests: { update: [{ where: { ID: logRequestToday.ID }, data: { statusRequest: '2' } }] },
      consultations: {
        create: [
          {
            isiKonsul: data.isiKonsul,
            judulAktifitas: data.judulAktifitas,
            harapan: data.harapan,
            saranHukum: data.saranHukum,
            rencanaTindakLanjut: data.rencanaTindakLanjut,
            tglKonsul: moment().toDate(),
            apps: { create: appList },
          },
        ],
      },
    };
    return dataInput;
  }
  processDataConsultationEdit(data) {
    const appList: CaseConsultationAppCreateWithoutCaseConsultationIdInput[] = [];
    const logRequestToday = this.data.logRequests.find(
      el => moment().isSame(el.tglRequest, 'day') && el.caseId.id === this.data.id,
    );
    // console.log(logRequestToday);
    for (const a of logRequestToday.pp) {
      const b = <CaseConsultationAppCreateWithoutCaseConsultationIdInput>{
        appConsultation: { connect: { id: a.appConsultation.id } },
      };
      appList.push(b);
    }
    const dataInput = <CaseUpdateInput>{
      logRequests: { update: [{ where: { ID: logRequestToday.ID }, data: { statusRequest: '2' } }] },
      consultations: {
        update: [
          {
            where: { id: data.id },
            data: {
              isiKonsul: data.isiKonsul,
              judulAktifitas: data.judulAktifitas,
              harapan: data.harapan,
              saranHukum: data.saranHukum,
              rencanaTindakLanjut: data.rencanaTindakLanjut,
            },
          },
        ],
      },
    };
    return dataInput;
  }

  editKonsultasi(tpl: TemplateRef<{}>, title: string) {
    this.modalInstance = this.modalSrv.create({
      nzTitle: title,
      nzContent: tpl,
      nzWidth: this.card.nativeElement.offsetWidth,
      nzFooter: null,
      nzBodyStyle: {},
    });
  }

  editAktifitasPendampingan(tpl: TemplateRef<{}>, title: string) {
    this.modalInstance = this.modalSrv.create({
      nzTitle: title,
      nzContent: tpl,
      nzWidth: this.card.nativeElement.offsetWidth,
      nzFooter: null,
      nzBodyStyle: {},
    });
  }

  openModalKonsultasiAdd(template: TemplateRef<{}>) {
    if (!this.checkEligibleConsultation()) {
      this.msg.info('Tidak Ada Request Konsultasi');
      return;
    }
    this.modeEditModal = 'add';

    this.dataModalTemp = {};
    // console.log(this.dataModalTemp);
    this.editKonsultasi(template, 'Add Data Konsultasi');
  }

  openModalKonsultasiEdit(template: TemplateRef<{}>, data) {
    this.modeEditModal = 'edit';

    this.dataModalTemp = data;
    // console.log(this.dataModalTemp);
    this.editKonsultasi(template, 'Edit Data Konsultasi');
  }

  openModalAktifitasEdit(template: TemplateRef<{}>, data) {
    this.modeEditModal = 'edit';
    this.dataModalTemp = {};
    this.dataModalTemp = data;
    this.dataModalTemp.activitieslit = data.activitieslit.map(res => res.kodeMt);
    this.dataModalTemp.activitiesnonlit = data.activitiesnonlit.map(res => res.kodeMt);
    // console.log(this.dataModalTemp);

    this.editKonsultasi(template, 'Edit Data Aktifitas Pendampingan');
  }

  openModalLampiranDokumenEdit(template: TemplateRef<{}>, data) {
    this.modeEditModal = 'edit';

    this.dataModalTemp = data;
    if (`filename` in this.dataModalTemp) {
      if (this.dataModalTemp.filename) {
        if (!this.fileList[0]) this.fileList.push(<UploadFile>(<unknown>{ filename: '', file: '' }));
        this.fileList[0].filename = this.dataModalTemp.filename;
        this.fileList[0].name = this.dataModalTemp.filename;
      }
    }

    // console.log(this.dataModalTemp);
    this.editKonsultasi(template, 'Edit Data Lampiran Dokumen');
  }

  async openModalKonsultasiView(template: TemplateRef<{}>, data) {
    const listPP = await this.mtVocabHelper.findHandlingPPString(this.data.id);

    this.dataModalTemp = data;
    this.dataModalTemp.listPP = listPP[0];
    // console.log(listPP);
    this.modeEditModal = 'edit';
    // console.log(this.dataModalTemp);
    this.editKonsultasi(template, 'View Data Konsultasi');
  }

  async openModalAktifitasView(template: TemplateRef<{}>, data) {
    // const listPP = await this.mtVocabHelper.findHandlingPPString(this.data.id);

    this.dataModalTemp = data;
    this.modeEditModal = 'edit';
    // console.log(this.dataModalTemp);
    this.editKonsultasi(template, 'View Data Aktifitas Pendampingan');
  }

  dataMutationUpdateKonsultasi(data: CaseUpdateInput, id: CaseWhereUniqueInput) {
    this.putCaseGQL
      .mutate({ where: id, data: data })
      .pipe(take(1))
      .subscribe(
        () => {
          this.msg.success('Data Berhasil Diubah');
          this.getData();
          if (this.modalInstance) this.modalInstance.close();
        },
        error => {
          this.msg.error('Data Gagal Diubah');
          this.msg.error(JSON.stringify(error));
        },
      );
  }

  // table
  columnsConsultation: STColumn[] = [
    {
      title: 'Action',
      fixed: 'left',
      width: '120px',
      buttons: [
        {
          text: 'Edit',
          click: (item: any) => {
            this.openModalKonsultasiEdit(this.modalContentKonsultasi, item);
          },
          iif: (item: any) => {
            return this.checkEligibleConsultationEdit();
          },
        },
        {
          text: 'View',
          click: (item: any) => {
            this.openModalKonsultasiView(this.modalContentKonsultasiView, item);
          },
        },
      ],
    },
    {
      title: 'Tgl Konsul',
      index: 'tglKonsul',
      type: 'date',
      sort: {
        default: 'ascend',
        compare: (a: any, b: any) => moment(b.tglKonsul).unix() - moment(a.tglKonsul).unix(),
      },
    },
    {
      title: 'Judul Aktifitas',
      index: 'judulAktifitas',
    },
    {
      title: 'PP',
      index: 'applicationId.clients',
      format: (item, col) => {
        // console.log(item);
        const pp = item.apps.find(el => {
          if (el.appConsultation.roles_type.find(element => element.type.id === 3)) {
            return true;
          } else return false;
        });
        // console.log(pp);
        return pp.appConsultation.name;
      },
    },
    {
      title: 'APBH',
      index: 'applicationId.clients',
      format: (item, col) => {
        item.apps.forEach((el, ind, obj) => {
          if (el.appConsultation.roles_type.find(app => app.type.id !== 4)) {
            obj.splice(ind, 1);
          }
        });
        // console.log(item.apps);
        const formatText = item.apps.map(val => {
          return val.appConsultation.name;
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

  columnsKorban: STColumn[] = [
    {
      title: 'Nama Lengkap',
      index: 'namaLengkap',
    },
    {
      title: 'Action',
      fixed: 'left',
      width: '120px',
      buttons: [
        {
          text: 'Delete',
          click: (item: any) => {
            this.korbanData.forEach((el, ind) => {
              if (el.id === item.id) {
                this.korbanData.splice(ind, 1);
              }
            });
            if (item.id) this.deletedKorban.push({ id: item.id });
            this.stKorban.removeRow(item);
            this.sfListPerson.setValue('/korban', this.korbanData);
          },
        },
      ],
    },
  ];

  columnsPelaku: STColumn[] = [
    {
      title: 'Nama Lengkap',
      index: 'personId.namaLengkap',
    },
    {
      title: 'Jenis Pelaku',
      index: 'jenisPelakuTeks',
    },
    {
      title: 'Action',
      fixed: 'left',
      width: '120px',
      buttons: [
        {
          text: 'Delete',
          click: (item: any) => {
            this.pelakuData.forEach((el, ind) => {
              if (el.id === item.id) {
                this.pelakuData.splice(ind, 1);
              }
            });
            if (item.id) this.deletedPelaku.push({ id: item.id });
            this.stPelaku.removeRow(item);
            this.sfListPerson.setValue('/pelaku', this.pelakuData);
          },
        },
      ],
    },
  ];

  columnsCatatanPendampingan: STColumn[] = [
    {
      title: 'Action',
      buttons: [
        {
          text: 'Edit',
          click: (item: any) => {
            this.openModalAktifitasEdit(this.modalContentAktifitasPendampingan, item);
          },
          iif: (item: any) => {
            if (!(`ppPendamping` in this.data.pk)) return false;
            if (!this.data.pk.ppPendamping) return false;
            if (!this.data.pk.ppPendamping.id) return false;
            return (
              this.data.pk.ppPendamping.id === this.settingService.user.id && this.data.application.tahap !== '4012'
            );
          },
        },
        {
          text: 'View',
          click: (item: any) => {
            this.openModalAktifitasView(this.modalContentAktifitasView, item);
          },
        },
      ],
      fixed: 'left',
      width: '120px',
    },
    {
      title: 'Tanggal',
      index: 'tglAktifitas',
      type: 'date',
      sort: {
        default: 'ascend',
        compare: (a: any, b: any) => moment(b.tglKonsul).unix() - moment(a.tglKonsul).unix(),
      },
    },
    {
      title: 'Judul Aktifitas',
      index: 'judulAktifitas',
    },
  ];

  columnsLampiranDokumen: STColumn[] = [
    {
      title: 'Action',
      buttons: [
        {
          text: 'Edit',
          click: (item: any) => {
            // console.log(item);
            this.openModalLampiranDokumenEdit(this.modalLampiranDokumen, item);
          },
          iif: (item: any) => {
            if (!this.settingService.user.roles_type.find(el => el.type.id === 6)) {
              return false;
            } else {
              return true;
            }
          },
        },
        {
          text: 'View',
          click: (item: any) => {
            this.openModalLampiranDokumenEdit(this.modalLampiranDokumenView, item);
          },
        },
      ],
      fixed: 'left',
      width: '120px',
    },
    {
      title: 'Tanggal',
      index: 'createdAt',
      type: 'date',
      sort: {
        default: 'ascend',
        compare: (a: any, b: any) => moment(b.createdAt).unix() - moment(a.createdAt).unix(),
      },
    },
    {
      title: 'Judul Dokumen',
      index: 'judulDokumen',
    },
  ];

  columnsReferral: STColumn[] = [
    {
      title: 'Tanggal Referral',
      index: 'tglTransfer',
      type: 'date',
      sort: {
        default: 'ascend',
        compare: (a: any, b: any) => moment(b.tglTransfer).unix() - moment(a.tglTransfer).unix(),
      },
    },
    {
      title: 'Klien',
      index: 'client.namaLengkap',
    },
    {
      title: 'Referral Ke',
      index: 'network.name',
    },
    {
      title: 'Catatan',
      index: 'catatan',
    },
  ];

  checkEligibleConsultation() {
    // return false;
    if (this.data.consultations.find(el => moment().isSame(el.tglKonsul, 'day') && el.caseId.id === this.data.id))
      return false;
    const logRequestToday = this.data.logRequests.find(
      el => moment().isSame(el.tglRequest, 'day') && el.caseId.id === this.data.id,
    );
    if (!logRequestToday) return false;
    if (logRequestToday.pp.find(el => el.appConsultation.id === this.settingService.user.id)) {
      return true;
    } else {
      return false;
    }
  }
  checkEligibleConsultationEdit() {
    // return false;

    const logRequestToday = this.data.logRequests.find(
      el => moment().isSame(el.tglRequest, 'day') && el.caseId.id === this.data.id,
    );
    if (!logRequestToday) return false;
    if (logRequestToday.pp.find(el => el.appConsultation.id === this.settingService.user.id)) {
      return true;
    } else {
      return false;
    }
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

  async openModalClient(client: any, template: TemplateRef<{}>) {
    this.loading = true;
    console.log(client);
    if ('tglLahir' in client.personId) {
      if (client.personId.tglLahir) {
        client.personId.tglLahirTeks = moment(client.personId.tglLahir).format('DD-MM-YYYY');
      }
    }
    if ('pendapatan' in client) {
      if (client.pendapatan) {
        client.pendapatanTeks = await this.mtVocabHelper.translateMtVocab(client.pendapatan);
      }
    }
    if ('pekerjaan' in client.personId) {
      if (client.personId.pekerjaan) {
        client.personId.pekerjaanTeks = await this.mtVocabHelper.translateMtVocab(client.personId.pekerjaan);
      }
    }
    this.dataModalTemp = client;
    this.modalInstance = this.modalSrv.create({
      nzTitle: 'Detail Klien',
      nzContent: template,
      nzWidth: this.card.nativeElement.offsetWidth,
      nzFooter: null,
      nzBodyStyle: {},
    });
    this.loading = false;
  }
}
