import { Component, OnDestroy, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import moment from 'moment';
import { BehaviorSubject, EMPTY, of } from 'rxjs';
import { map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { GetDashboardDataGQL } from '@shared';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent implements OnDestroy, OnInit {
  webSite!: any[];
  loading = false;
  formGroup = new FormGroup({
    dateRange: new FormControl([moment().subtract(1, 'year').startOf('day').toDate(), moment().startOf('day').toDate()])
  })
  getDataTrigger = new BehaviorSubject<Date[] | undefined>(this.formGroup.get('dateRange').value)

  processData = this.getDataTrigger.pipe(

    switchMap(res => {
      if (res) {
        return this.getDashboardData.fetch({
          whereAggActiveCase: { createdAt: { gte: res[0], lte: res[1] }, caseClosed: { equals: true } },
          whereAggApplication: { createdAt: { gte: res[0], lte: res[1] } },
          whereAggCase: { createdAt: { gte: res[0], lte: res[1] } },
          whereAggConsultation: { createdAt: { gte: res[0], lte: res[1] } },
          whereAggFinishedCase: { createdAt: { gte: res[0], lte: res[1] }, caseClosed: { equals: false } },
          whereAggRujukan: { tglTransfer: { gte: res[0], lte: res[1] } },
          whereAggTransfer: { tglTransfer: { gte: res[0], lte: res[1] } },
        }, { notifyOnNetworkStatusChange: true, fetchPolicy: 'no-cache' }).pipe(switchMap(res => {
          if (res.loading) {
            return EMPTY
          } else {
            return of(res.data)
          }
        }))
      } else {
        return EMPTY
      }
    }),

  )


  constructor(
    private getDashboardData: GetDashboardDataGQL
  ) {

  }

  findData() {
    this.getDataTrigger.next(this.formGroup.get('dateRange').value)
  }

  ngOnInit() {
  }


  ngOnDestroy(): void {
  }
}
