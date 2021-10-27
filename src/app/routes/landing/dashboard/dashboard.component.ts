import { Component, OnDestroy, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import moment from 'moment';
import { BehaviorSubject, EMPTY, of } from 'rxjs';
import { map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { GetDashboardDataGQL } from '@shared';
import { countBy, flatten, identity } from 'ramda';
import { MtVocabHelper } from '@shared/helper';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent implements OnDestroy, OnInit {
  webSite!: any[];
  loading = false;
  formGroup = new FormGroup({
    dateRange: new FormControl([
      moment()
        .subtract(1, 'year')
        .startOf('day')
        .toDate(),
      moment()
        .startOf('day')
        .toDate(),
    ]),
  });
  getDataTrigger = new BehaviorSubject<Date[] | undefined>(this.formGroup.get('dateRange').value);

  processData = this.getDataTrigger
    .pipe(
      switchMap(res => {
        if (res) {
          return this.getDashboardData
            .fetch(
              {
                whereCaseCategory: { caseId: { is: { createdAt: { gte: res[0], lte: res[1] } } } },
                whereOrientasiSeksual: { createdAt: { gte: res[0], lte: res[1] } },
                whereViolatedRights: { caseId: { is: { createdAt: { gte: res[0], lte: res[1] } } } },
                whereCaseModuses: { caseId: { is: { createdAt: { gte: res[0], lte: res[1] } } } },
                whereViolenceMethods: { caseId: { is: { createdAt: { gte: res[0], lte: res[1] } } } },
                whereAggActiveCase: { createdAt: { gte: res[0], lte: res[1] }, caseClosed: { equals: false } },
                whereAggApplication: { createdAt: { gte: res[0], lte: res[1] } },
                whereAggCase: { createdAt: { gte: res[0], lte: res[1] } },
                whereAggConsultation: { createdAt: { gte: res[0], lte: res[1] } },
                whereAggFinishedCase: { createdAt: { gte: res[0], lte: res[1] }, caseClosed: { equals: true } },
                whereAggRujukan: { tglTransfer: { gte: res[0], lte: res[1] } },
                whereAggTransfer: { tglTransfer: { gte: res[0], lte: res[1] } },
              },
              { notifyOnNetworkStatusChange: true, fetchPolicy: 'no-cache' },
            )
            .pipe(
              switchMap(res => {
                if (res.loading) {
                  return EMPTY;
                } else {
                  return of(res.data);
                }
              }),
            );
        } else {
          return EMPTY;
        }
      }),
    )
    .pipe(
      switchMap(async res => {
        const violatedRightsBarChartData = await this.caseViolatedRightsChartProcess(res.caseViolatedRights);
        const violenceMethodsBarChartdata = await this.caseViolenceMethodChartProcess(res.caseViolenceMethods);
        const modusesPieChartData = await this.caseModusesPieChartProcess(res.caseModuses);
        const orientasiSeksualPieChartData = this.caseOrientasiSeksualPieChartProcess(res.renamedcases);
        const caseCategoryBarChartData = await this.caseCategoryChartProcess(res.caseCategories);

        return {
          ...res,
          violatedRightsBarChartData,
          violenceMethodsBarChartdata,
          modusesPieChartData,
          orientasiSeksualPieChartData,
          caseCategoryBarChartData,
        };
      }),
    );

  constructor(private getDashboardData: GetDashboardDataGQL, private mtVocabHelper: MtVocabHelper) {}

  async caseCategoryChartProcess(data) {
    const kodeMtArr = data.map(res => res.kodeMt);
    const result = countBy<any>(identity, kodeMtArr);
    let resultArr = [];
    for (const key in result) {
      resultArr.push({
        x: `${await this.mtVocabHelper.translateMtVocab(key)}`,
        y: result[key],
        color: this.getRandomColor(),
      });
    }
    return resultArr;
  }

  async caseModusesPieChartProcess(data) {
    const kodeMtArr = data.map(res => res.kodeMt);
    const result = countBy<any>(identity, kodeMtArr);
    let resultArr = [];
    for (const key in result) {
      resultArr.push({
        x: `${await this.mtVocabHelper.translateMtVocab(key)}`,
        y: result[key],
        color: this.getRandomColor(),
      });
    }
    return resultArr;
  }

  caseOrientasiSeksualPieChartProcess(data) {
    const kodeMtArr = flatten(
      data.map(res =>
        res.application.clients.map(result => {
          return result.personId.orientasiSeksual ?? 'Tidak Diketahui';
        }),
      ),
    );
    const result = countBy<any>(identity, kodeMtArr);
    let resultArr = [];
    for (const key in result) {
      resultArr.push({
        x: key,
        y: result[key],
        color: this.getRandomColor(),
      });
    }
    return resultArr;
  }

  async caseViolenceMethodChartProcess(data) {
    const kodeMtArr = data.map(res => res.kodeMt);
    const result = countBy<any>(identity, kodeMtArr);
    let resultArr = [];
    for (const key in result) {
      resultArr.push({
        x: `${await this.mtVocabHelper.translateMtVocab(key)}`,
        y: result[key],
        color: this.getRandomColor(),
      });
    }
    return resultArr;
  }

  async caseViolatedRightsChartProcess(data) {
    const kodeMtArr = data.map(res => res.kodeMt);
    const result = countBy<any>(identity, kodeMtArr);
    let resultArr = [];
    for (const key in result) {
      resultArr.push({
        x: `${await this.mtVocabHelper.translateMtVocab(key)}`,
        y: result[key],
        color: this.getRandomColor(),
      });
    }
    return resultArr;
  }

  getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  findData() {
    this.getDataTrigger.next(this.formGroup.get('dateRange').value);
  }

  ngOnInit() {}

  ngOnDestroy(): void {}
}
