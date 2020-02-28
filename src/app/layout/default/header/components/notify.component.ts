import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
import * as distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import { NzMessageService } from 'ng-zorro-antd';
import { NoticeItem, NoticeIconList } from '@delon/abc';
import {
  GetLogRequestGQL,
  GetLogRequest,
  LogRequestWhereInput,
  SubscribeToLogSubscriptionVariables,
  SubscribeToLogSubscription,
  SubscribeToLogDocument,
} from '@shared';
import { QueryRef } from 'apollo-angular';
import { ACLService } from '@delon/acl';
import { SettingsService } from '@delon/theme';
import { map, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'header-notify',
  template: `
    <notice-icon
      [data]="data"
      [count]="count"
      [loading]="loading"
      btnClass="alain-default__nav-item"
      btnIconClass="alain-default__nav-item-icon"
      (select)="select($event)"
      (clear)="clear($event)"
      (popoverVisibleChange)="clickedBell($event)"
    ></notice-icon>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderNotifyComponent implements OnInit {
  data: NoticeItem[] = [
    {
      title: 'Konsultasi',
      list: [],
      emptyText: 'Tidak ada Notifikasi',
      emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg',
      clearText: 'Hapus Notifikasi',
    },
    {
      title: 'Referral',
      list: [],
      emptyText: 'Tidak ada Notifikasi',
      emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg',
      clearText: 'Hapus Notifikasi',
    },
  ];
  logData: any;
  count = 0;
  loading = false;
  log: QueryRef<GetLogRequest.Query, GetLogRequest.Variables>;
  logsObs: Subscription;
  notifData: any[] = [];

  constructor(
    private msg: NzMessageService,
    private cdr: ChangeDetectorRef,
    public getLogRequestGQL: GetLogRequestGQL,
    public aclService: ACLService,
    public settingService: SettingsService,
  ) {}

  ngOnInit() {
    this.log = this.getLogRequestGQL.watch(
      // <GetLogRequest.Variables>{ where: { pp_some: { appConsultation: { id: this.settingService.user.id } } } },
      this.searchGenerator(),
      {
        fetchPolicy: 'no-cache',
      },
    );
    // console.log('sampe sini');
    this.loading = true;
    this.logsObs = this.log.valueChanges
      .pipe(
        map(async result => {
          const tempLog = [];
          for (const a of result.data.logRequests) {
            const b = <any>{ ...a };
            b.noReg = a.applicationId.noReg;
            b.caseTitle = a.caseId ? a.caseId.judulKasus : '';
            b.dudukPerara = a.applicationId.dudukPerara;
            tempLog.push(b);
          }
          return tempLog;
        }),
        tap(() => (this.loading = false)),
      )
      .subscribe(async res => {
        // console.log(res);
        this.logData = await res;
        // console.log(this.logData);
      });
    this.subscribeKonsultasi();
  }

  subscribeKonsultasi() {
    this.log.subscribeToMore({
      document: SubscribeToLogDocument,
      variables: <SubscribeToLogSubscriptionVariables>{ where: { node: { jenisRequest: '1011' } } },
      updateQuery: (prev, { subscriptionData }) => {
        if (this.loading) return;
        setTimeout(() => {
          this.count = this.count + 1;
          // console.log(subscriptionData.data.logRequest);
          const item = { ...subscriptionData.data.logRequest.node };
          item.datetime = moment();
          this.notifData.unshift(item);
          this.cdr.detectChanges();
        }, 5000);
      },
      onError: err => {
        // console.log(err);
      },
    });
  }

  getData() {
    this.log
      .refetch(this.searchGenerator())
      .then(async res => {
        const tempLog = [];
        for (const a of res.data.logRequests) {
          const b = <any>{ ...a };
          b.noReg = a.applicationId.noReg;
          b.caseTitle = a.caseId.judulKasus ? a.caseId.judulKasus : 'Case Belum Dibuat!';
          b.dudukPerara = a.applicationId.dudukPerara;
          tempLog.push(b);
        }
        this.logData = tempLog;
      })
      .finally(() => {
        this.loading = false;
      });
  }

  searchGenerator(): GetLogRequest.Variables {
    if (this.aclService.data.roles.find(el => el === '2' || el === '1'))
      return <GetLogRequest.Variables>{
        where: {
          jenisRequest: '1011',
          // AND: [
          //   this.q.ppName !== null
          //     ? {
          //         pp_some: {
          //           appConsultation: {
          //             name_contains: this.q.ppName,
          //           },
          //         },
          //       }
          //     : {},
          //   this.q.clientName !== null
          //     ? {
          //         applicationId: {
          //           clients_some: {
          //             personId: { namaLengkap_contains: this.q.clientName },
          //           },
          //         },
          //       }
          //     : {},
          //   this.q.noReg !== null
          //     ? {
          //         applicationId: {
          //           noReg_contains: this.q.noReg,
          //         },
          //       }
          //     : {},
          // ],
        },
        last: 10,
      };
    // if (this.aclService.data.roles.find(el => el === '3' || el === '4')) console.log('nemu woy');
    // console.log('masuk sini');
    return <GetLogRequest.Variables>{
      where: <LogRequestWhereInput>this.aclService.data.roles.find(el => el === '3' || el === '4')
        ? {
            jenisRequest: '1011',
            // AND: [
            //   {
            //     pp_some: {
            //       appConsultation: {
            //         id: Number(this.settingService.user.id),
            //       },
            //     },
            //   },
            //   this.q.ppName !== null
            //     ? {
            //         pp_some: {
            //           appConsultation: {
            //             name_contains: this.q.ppName,
            //           },
            //         },
            //       }
            //     : {},
            //   this.q.clientName !== null
            //     ? {
            //         applicationId: {
            //           clients_some: {
            //             personId: { namaLengkap_contains: this.q.clientName },
            //           },
            //         },
            //       }
            //     : {},
            //   this.q.noReg !== null
            //     ? {
            //         applicationId: {
            //           noReg_contains: this.q.noReg,
            //         },
            //       }
            //     : {},
            // ],
          }
        : {},
      last: 10,
    };
  }

  private updateNoticeData(notices: any, type: string): NoticeItem[] {
    const data = this.data.slice();
    data.forEach(element => {
      element.list = [];
    });
    notices.forEach(element => {
      const template = <NoticeIconList>{
        id: element,
        title: `No Reg ${element.applicationId.noReg}`,
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
        type: type,
        read: false,
        description: element.caseId ? `Judul Kasus : ${element.caseId.judulKasus}` : '',
        status: 'urgent',
        color: undefined,
        datetime: element.datetime,
      };
      if (template.datetime)
        template.datetime = distanceInWordsToNow(template.datetime!, {
          locale: (window as any).__locale__,
        });
      if (template.status) {
        template.color = {
          todo: undefined,
          processing: 'blue',
          urgent: 'red',
          doing: 'gold',
        }[template.status];
      }
      data.find(w => w.title === template.type)!.list.push(template);
    });

    return data;
  }

  loadData() {
    // if (this.loading) return;
    // this.loading = true;
    // setTimeout(() => {
    // this.data = this.updateNoticeData([
    // {
    //   id: '000000001',
    //   title: '你收到了 14 份新周报',
    //   datetime: '2017-08-09',
    //   type: 'Kasus',
    //   description: 'blablabalba',
    //   read: false,
    // },
    // {
    //   id: '000000002',
    //   avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
    //   title: '你推荐的 曲妮妮 已通过第三轮面试',
    //   datetime: '2017-08-08',
    //   type: 'Referral',
    // },
    // {
    //   id: '000000003',
    //   avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
    //   title: '这种模板可以区分多种通知类型',
    //   datetime: '2017-08-07',
    //   read: true,
    //   type: '通知',
    // },
    // {
    //   id: '000000004',
    //   avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
    //   title: '左侧图标用于区分不同的类型',
    //   datetime: '2017-08-07',
    //   type: '通知',
    // },
    // {
    //   id: '000000005',
    //   avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
    //   title: '内容不要超过两行字，超出时自动截断',
    //   datetime: '2017-08-07',
    //   type: '通知',
    // },
    // {
    //   id: '000000006',
    //   avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
    //   title: '曲丽丽 评论了你',
    //   description: '描述信息描述信息描述信息',
    //   datetime: '2017-08-07',
    //   type: '消息',
    // },
    // {
    //   id: '000000007',
    //   avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
    //   title: '朱偏右 回复了你',
    //   description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
    //   datetime: '2017-08-07',
    //   type: '消息',
    // },
    // {
    //   id: '000000008',
    //   avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
    //   title: '标题',
    //   description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
    //   datetime: '2017-08-07',
    //   type: '消息',
    // },
    // {
    //   id: '000000009',
    //   title: '任务名称',
    //   description: '任务需要在 2017-01-12 20:00 前启动',
    //   extra: '未开始',
    //   status: 'todo',
    //   type: '待办',
    // },
    // {
    //   id: '000000010',
    //   title: '第三方紧急代码变更',
    //   description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
    //   extra: '马上到期',
    //   status: 'urgent',
    //   type: '待办',
    // },
    // {
    //   id: '000000011',
    //   title: '信息安全考试',
    //   description: '指派竹尔于 2017-01-09 前完成更新并发布',
    //   extra: '已耗时 8 天',
    //   status: 'doing',
    //   type: '待办',
    // },
    // {
    //   id: '000000012',
    //   title: 'ABCD 版本发布',
    //   description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
    //   extra: '进行中',
    //   status: 'processing',
    //   type: '待办',
    // },
    //   ]);
    //   this.loading = false;
    //   this.cdr.detectChanges();
    // }, 1000);
  }

  clear(type: string) {
    this.data.forEach(element => {
      element.list = [];
    });
    this.notifData.forEach(element => {
      element.list = [];
    });
  }

  select(res: any) {
    // console.log(res);
    this.msg.success(`点击了 ${res.title} 的 ${res.item.title}`);
  }

  clickedBell(res) {
    if (this.loading) return;
    this.loading = true;
    setTimeout(() => {
      this.count = 0;
      this.data = this.updateNoticeData(this.notifData, 'Konsultasi');
      // console.log(this.data);
      this.loading = false;
      this.cdr.detectChanges();
    }, 1000);
  }
}
