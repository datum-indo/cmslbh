import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { GetCaseGQL, GetCase } from '@shared';
import { map, tap } from 'rxjs/operators';
import { QueryRef } from 'apollo-angular';
import { Subscription, Observable } from 'rxjs';
import { FormBuilder, FormArray, Validators, FormGroup, FormControl } from '@angular/forms';
import { _HttpClient } from '@delon/theme';
import { MtVocabHelper } from '@shared/helper';
import {
  NzFormatEmitEvent,
  NzTreeNodeOptions,
  NzTreeBase,
  NzTreeComponent,
  NzTreeSelectComponent,
} from 'ng-zorro-antd';
import { query } from './query';
import * as moment from 'moment';
@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnalisisComponent implements OnInit {
  @ViewChild('tree') tree: NzTreeSelectComponent;
  cases: QueryRef<GetCase.Query, GetCase.Variables>;
  data: any;
  caseObs: Subscription;
  loading = false;
  analisaForm: FormGroup;
  urlQuery = `http://${window.location.hostname}:3000/query`;
  urlCsv = `http://${window.location.hostname}:3000/query/csv`;
  groupObservable = this.http.post(this.urlQuery, {
    query: 'select distinct `group` from `src_analisa`',
  });
  nodeArray = {};
  sebaranKasus: any;
  sebaranPerson: any;
  sebaranPermohonan: any;
  queryTemplate: Promise<Array<any>>;
  selectedTemplate: any;

  constructor(
    private getCaseGQL: GetCaseGQL,
    public fb: FormBuilder,
    public http: _HttpClient,
    public mtVocabHelper: MtVocabHelper,
    public cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.analisaForm = new FormGroup({
      analisaFilter: new FormArray([this.initQuestion()]),
    });

    this.queryTemplate = this.http
      .post(this.urlQuery, {
        query: 'select `name`,`template`,`id` from `src_template`',
      })
      .toPromise();
  }

  initNode(i, kodeList) {
    // console.log(kodeList);

    this.mtVocabHelper
      .getMtVocabParentTree(Number(kodeList))
      .toPromise()
      .then(res => {
        this.nodeArray[kodeList] = res;
        // console.log(this.nodeArray);
        this.cdr.detectChanges();
      });
  }

  onExpandChange(e: NzFormatEmitEvent, i): void {
    const node = e.node;
    // console.log(node);
    if (node && node.getChildren().length === 0 && node.isExpanded) {
      this.loadNode(i, node).then(data => {
        node.addChildren(data);
      });
    }
  }

  loadNode(i, node: any): Promise<NzTreeNodeOptions[]> {
    return this.mtVocabHelper
      .getMtVocabChildTree(Number(i), node.key)
      .pipe(res => {
        // console.log(res);
        return res;
      })
      .toPromise();
  }

  changeQuery() {
    this.groupObservable = this.http.post(this.urlQuery, {
      query: 'select distinct `label` from `src_analisa`',
    });
  }

  initQuestion() {
    return new FormGroup({
      group: new FormControl(''),
      field: new FormControl(''),
      fieldList: new FormControl(''),
      operator: new FormControl(''),
      operatorList: new FormControl(''),
      nilai: new FormControl(''),
      nilaiIdList: new FormControl(''),
      nodes: new FormControl(),
      logika: new FormControl(''),
    });
  }

  getFieldList(i) {
    return this.analisaForm.value.analisaFilter[i].fieldList;
  }

  queryFieldList(i) {
    // this.analisaForm.value.analisaFilter[i].fieldList = [];
    this.analisaForm.value.analisaFilter[i].fieldList = this.http
      .post(this.urlQuery, {
        query: `select \`alias\`, \`label\`,\`field\`,\`type\`,\`source\`,\`kode_list\` from \`src_analisa\` where \`group\`= '${
          this.analisaForm.value.analisaFilter[i].group
        }' ORDER BY \`label\``,
      })
      .toPromise();
  }

  getOperatorList(i) {
    return this.analisaForm.value.analisaFilter[i].operatorList;
  }

  queryOperatorList(i) {
    // this.analisaForm.value.analisaFilter[i].operatorList = [];
    this.analisaForm.value.analisaFilter[i].operatorList = this.http
      .post(this.urlQuery, {
        query: `select \`label\`,\`operator\`,\`type\` from \`src_operator\` where \`type\`= '${
          this.analisaForm.value.analisaFilter[i].field.type
        }' ORDER BY \`label\``,
      })
      .toPromise();
  }

  getNilaiIdList(i) {
    return this.analisaForm.value.analisaFilter[i].nilaiIdList;
  }

  queryNilaiIdList(i) {
    // this.analisaForm.value.analisaFilter[i].nilaiIdList = [];
    this.analisaForm.value.analisaFilter[i].nilaiIdList = this.http
      .post(this.urlQuery, {
        query: this.analisaForm.value.analisaFilter[i].field.source,
      })
      .toPromise();
  }

  addFilter() {
    const control = <FormArray>this.analisaForm.get('analisaFilter');
    control.push(this.initQuestion());
  }

  getFilter(form) {
    // console.log(form.get('sections').controls);
    return form.controls.analisaFilter.controls;
  }

  getGroup() {
    return this.http.post(this.urlQuery, { query: 'select distinct `group` from `src_analisa`' });
  }

  getField;
  // findAnalisis() {
  //   this.cases = this.getCaseGQL.watch(this.searchGenerator(), {
  //     fetchPolicy: 'no-cache',
  //   });
  //   this.loading = true;
  //   this.caseObs = this.cases.valueChanges
  //     .pipe(
  //       map(result => result.data.cases),
  //       tap(() => (this.loading = false)),
  //     )
  //     .subscribe(res => {
  //       this.data = res;
  //     });
  // }

  // searchGenerator(){

  // }
  refreshForm(i, level, downloadNode?) {
    if (
      downloadNode &&
      (this.analisaForm.value.analisaFilter[i].field.type === 'mt_tree' ||
        this.analisaForm.value.analisaFilter[i].field.type === 'mt_unrestricted')
    ) {
      this.initNode(i, this.analisaForm.value.analisaFilter[i].field.kode_list);
    }
    const arr = this.analisaForm.get('analisaFilter') as FormArray;
    const formGroup = (<FormGroup>arr.at(i)) as FormGroup;
    switch (level) {
      case 1:
        formGroup.get('field').reset();
        formGroup.get('fieldList').reset();
        formGroup.get('operator').reset();
        formGroup.get('operatorList').reset();
        formGroup.get('nodes').reset();
        formGroup.get('nilai').reset();
        formGroup.get('nilaiIdList').reset();
        formGroup.get('logika').reset();
        break;
      case 2:
        formGroup.get('operator').reset();
        formGroup.get('operatorList').reset();
        formGroup.get('nilai').reset();
        formGroup.get('nilaiIdList').reset();
        // formGroup.get('nodes').reset();
        formGroup.get('logika').reset();
        break;
      case 3:
        formGroup.get('nilai').reset();
        formGroup.get('nilaiIdList').reset();
        // formGroup.get('nodes').reset('');
        formGroup.get('logika').reset();
        break;
      case 4:
        formGroup.get('logika').reset();
        break;

      default:
        break;
    }

    // formGroup.get('field').reset();
    // formGroup.get('fieldList').reset();
    // // formGroup.get('operator').reset();
    // formGroup.get('operatorList').reset();
    // formGroup.get('nilai').reset();
    // formGroup.get('nilaiIdList').reset();
    // formGroup.get('logika').reset();
    // // setValue({
    // //   field: new FormControl(''),
    // //   fieldList: new FormControl(''),
    // //   operator: new FormControl(''),
    // //   operatorList: new FormControl(''),
    // //   nilai: new FormControl(''),
    // //   nilaiIdList: new FormControl(''),
    // //   logika: new FormControl(''),
    // // });
  }
  isFormArrayLast(i) {
    const arr = this.analisaForm.get('analisaFilter') as FormArray;
    if (arr.length - 1 === i) {
      // const arr = this.analisaForm.get('analisaFilter') as FormArray;
      // const formGroup = (<FormGroup>arr.at(i)) as FormGroup;
      // formGroup.get('logika').reset();
      return true;
    } else return false;
  }

  isFormArrayOnlyOne() {
    const arr = this.analisaForm.get('analisaFilter') as FormArray;
    // console.log(arr.length);
    if (arr.length === 1) {
      return true;
    } else return false;
  }

  deleteList(i) {
    const arr = this.analisaForm.get('analisaFilter') as FormArray;
    arr.removeAt(i);
  }
  reset() {
    this.analisaForm.get('analisaFilter').reset();
  }

  async getData() {
    if (!this.analisaForm.value.analisaFilter[0].operator.operator) {
      return null;
    }
    const arr = this.analisaForm.get('analisaFilter') as FormArray;
    arr
      .at(arr.length - 1)
      .get('logika')
      .setValue('');
    // console.log(this.analisaForm.value);

    this.loading = true;
    const builtQuery = await this.queryBuilder(this.analisaForm.value.analisaFilter);
    // console.log(builtQuery);
    await this.submitQuery(builtQuery);
    this.loading = false;
    this.cdr.detectChanges();
  }

  async submitQuery(builtQuery) {
    const where = ' where ';
    this.sebaranKasus = await this.http
      .post(this.urlQuery, {
        query: query.defaultCase + where + builtQuery,
      })
      .pipe(
        map(res => {
          const sebaranKasus: any = {
            totalKasus: 0,
            totalDidampingi: 0,
            totalTransfer: 0,
            totalTidakDidampingi: 0,
          };
          // console.log(res);
          if (!res) return sebaranKasus;
          if (res.length === 0) return sebaranKasus;

          sebaranKasus.totalKasus = res.length;
          sebaranKasus.totalDidampingin = res.filter(el => {
            return el.didampingi;
          }).length;
          sebaranKasus.totalTidakDidampingi = res.filter(el => {
            return !el.didampingi;
          }).length;
          sebaranKasus.totalTransfer = res.filter(el => {
            return el.transfer;
          }).length;
          return sebaranKasus;
        }),
      )
      .toPromise();
    // console.log(builtQuery);
    this.sebaranPerson = await this.http
      .post(this.urlQuery, {
        query: query.defaultPerson + where + builtQuery,
      })
      .pipe(
        map(res => {
          const sebaranPerson: any = {
            totalKorban: 0,
            totalPelaku: 0,
            totalKlien: 0,
          };
          // console.log(res);
          if (!res) return sebaranPerson;
          if (res.length === 0) return sebaranPerson;
          // console.log([...new Set(res.filter(res => res.korban !== null).map(item => item.korban))]);
          sebaranPerson.totalKlien = res.length;
          sebaranPerson.totalPelaku = [
            ...new Set(res.filter(resa => resa.pelaku !== null).map(itema => itema.pelaku)),
          ].length;
          sebaranPerson.totalKorban = [
            ...new Set(res.filter(resb => resb.korban !== null).map(itemb => itemb.korban)),
          ].length;
          return sebaranPerson;
        }),
      )
      .toPromise();
    this.sebaranPermohonan = await this.http
      .post(this.urlQuery, {
        query: query.defaultPermohonan + where + builtQuery,
      })
      .pipe(
        map(res => {
          const sebaranPermohonan: any = {
            totalPermohonan: 0,
            totalPenerimaManfaat: 0,
          };
          // console.log(res);
          if (!res) return sebaranPermohonan;
          if (res.length === 0) return sebaranPermohonan;

          sebaranPermohonan.totalPermohonan = res.length;
          sebaranPermohonan.totalPenerimaManfaat = res.reduce(function(previousValue, currentValue) {
            return previousValue + currentValue.jumlah_penerima_manfaat;
          }, 0);
          return sebaranPermohonan;
        }),
      )
      .toPromise();
  }

  async queryBuilder(form: Array<any>) {
    if (!this.analisaForm.value.analisaFilter[0].operator.operator) {
      return null;
    }
    // todo change foreach to for of because async doesnt work
    let builtQuery = '';
    for (const [ind, el] of form.entries()) {
      let nilai = el.nilai;
      switch (el.field.type) {
        case 'text':
          if (typeof nilai === 'string') nilai = "'" + nilai + "'";
          break;
        case 'numeric':
          if (!nilai) break;
          if (nilai < 0) {
            nilai = 0;
          }
          break;
        case 'mt_tree':
          if (el.operator.operator === 'in') {
            const arr = await this.mtVocabHelper.getMtVocabSub(Number(el.field.kode_list), nilai);
            let queryNilai = '(';
            arr.forEach((el, ind) => {
              queryNilai = queryNilai + "'" + el + "'";
              if (arr.length - 1 !== ind) {
                queryNilai = queryNilai + ',';
              }
            });
            nilai = queryNilai + ')';
            // console.log(queryNilai);
            break;
          }
          if (typeof nilai === 'string') nilai = "'" + nilai + "'";
          break;
        case 'mt':
          if (typeof nilai === 'string') nilai = "'" + nilai + "'";
          break;
        case 'id':
          if (typeof nilai === 'string') nilai = "'" + nilai + "'";
          break;
        case 'date':
          if (!nilai) break;
          const date = moment(nilai).format('YYYY-MM-DD');
          nilai = `DATE ('${date}')`;
          break;
        case 'check':
          break;

        default:
          break;
      }

      if (form.length - 1 === ind) el.logika = '';
      // console.log(form.length - 1);
      // console.log(ind);
      if (el.field.type === 'date' && nilai) {
        builtQuery =
          builtQuery +
          ` DATE(\`${el.field.alias}\`.\`${el.field.field}\`) ${el.operator.operator} ${nilai} ${
            el.logika ? el.logika : ''
          }`;
      } else {
        builtQuery =
          builtQuery +
          ` \`${el.field.alias}\`.\`${el.field.field}\` ${el.operator.operator} ${nilai ? nilai : ''} ${
            el.logika ? el.logika : ''
          }`;
      }
    }
    return builtQuery;
  }

  async runTemplate() {
    if (!this.selectedTemplate) return;
    const builtQuery = await this.queryBuilder(this.analisaForm.value.analisaFilter);
    if (!builtQuery) {
      return;
    }
    // console.log(builtQuery);
    const where = ' where ';
    this.loading = true;
    this.cdr.detectChanges();
    // console.log(this.selectedTemplate + where + builtQuery);
    this.http
      .post(
        this.urlCsv,
        {
          query: builtQuery,
          template: this.selectedTemplate,
        },
        {},
        { responseType: 'blob' },
      )
      .subscribe(async res => {
        // console.log(res);
        const a = document.createElement('a');
        a.href = URL.createObjectURL(res);
        const queryTemplate = await this.queryTemplate;
        const templateName = queryTemplate.find(el => el.id === this.selectedTemplate);

        a.download = `template-${templateName.name}-${moment().format('YYYY-MM-DD')}.csv`;
        // start download
        a.click();
        this.loading = false;
        this.cdr.detectChanges();
      });
  }
}
