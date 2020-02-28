import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { _HttpClient, MenuService } from '@delon/theme';
import { NavigationEnd, Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard-v1',
  templateUrl: './v1.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardV1Component implements OnInit, OnDestroy {
  navigationSubscription: any;

  webSite: any[];
  salesData: any[];
  offlineChartData: any[];
  urlQuery = `http://${window.location.hostname}:3000/query`;
  urlGeocode = `http://${window.location.hostname}:3000/geocode`;
  dateRange = [
    moment().month() < 10
      ? moment()
          .year(moment().year() - 1)
          .month(10)
          .date(1)
          .toDate()
      : moment()
          .year(moment().year())
          .month(10)
          .date(1)
          .toDate(),
    moment().toDate(),
  ];
  jumlahKasus: any = 0;
  jumlahPenerimaManfaat: any = 0;
  kasusBerjalan: any = 0;
  kasusSelesai: any = 0;

  jumlahAplikasi: any = 0;
  jumlahTransfer: any = 0;
  jumlahRujukan: any = 0;
  jumlahKonsultasi: any = 0;

  hakTerlanggar = [{ name: '0', value: 0 }];
  unitSatuan = [{ name: '0', value: 0 }];
  latlngMap = [];
  jenisPeradilan = [{ name: '0', value: 0 }];
  issueLokal = [{ name: '0', value: 0 }];
  loading = false;

  hakTerlanggarOption = {
    view: [200, 300],
    schemeType: 'ordinal',
    showXAxis: true,
    showYAxis: true,
    gradient: false,
    showLegend: false,
    showXAxisLabel: true,
    xAxisLabel: 'Jumlah',
    showYAxisLabel: true,
    yAxisLabel: 'Hak Terlanggar',
    showGridLines: false,
    xScaleMin: 0,
    legendTitle: 'Hak Terlanggar',
  };

  unitSatuanOption = {
    view: [200, 300],
    schemeType: 'ordinal',
    showXAxis: true,
    showYAxis: true,
    gradient: false,
    showLegend: false,
    showXAxisLabel: true,
    xAxisLabel: 'Jumlah',
    showYAxisLabel: true,
    yAxisLabel: 'Unit Satuan',
    showGridLines: false,
    xScaleMin: 0,
    legendTitle: 'Unit Satuan',
  };

  jenisPeradilanOption = {
    view: [200, 300],
    schemeType: 'ordinal',
    showXAxis: true,
    showYAxis: true,
    gradient: false,
    showLegend: false,
    showXAxisLabel: true,
    xAxisLabel: 'Jumlah',
    showYAxisLabel: true,
    yAxisLabel: 'Jenis Peradilan',
    showGridLines: false,
    xScaleMin: 0,
    legendTitle: 'Jenis Peradilan',
  };

  issueLokalOption = {
    view: [200, 300],
    schemeType: 'ordinal',
    showXAxis: true,
    showYAxis: true,
    gradient: false,
    showLegend: false,
    showXAxisLabel: true,
    xAxisLabel: 'Jumlah',
    showYAxisLabel: true,
    yAxisLabel: 'Unit Satuan',
    showGridLines: false,
    xScaleMin: 0,
    labels: true,
    legendTitle: 'Issue Lokal',
  };

  constructor(
    private http: _HttpClient,
    private cdr: ChangeDetectorRef,
    private router: Router,
    public menuService: MenuService,
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  initialiseInvites() {
    this.menuService.resume();
  }

  ngOnInit() {
    this.findData();
  }

  async findData() {
    this.loading = true;
    const dateFrom = moment(this.dateRange[0]).format('YYYY-MM-DD');
    const dateTo = moment(this.dateRange[1]).format('YYYY-MM-DD');
    const dateFromText = `DATE ('${dateFrom}')`;
    const dateToText = `DATE ('${dateTo}')`;
    // console.log(`select count(*) as \`jumlahKasus from\` \`case\` WHERE created_at >= ${dateFromText}
    // AND created_at <${dateToText}`);
    const jumlahKasus = await this.http
      .post(this.urlQuery, {
        query: `select count(*) as \`jumlahKasus\` from \`case\` LEFT JOIN \`application\` on \`application\`.\`case\` = \`case\`.\`id\` WHERE \`case\`.created_at >= ${dateFromText}
        AND \`case\`.created_at <=${dateToText}`,
      })
      .toPromise();
    if (jumlahKasus.length > 0) this.jumlahKasus = jumlahKasus[0].jumlahKasus;

    const jumlahAplikasi = await this.http
      .post(this.urlQuery, {
        query: `select count(*) as \`jumlahAplikasi\` from \`application\` WHERE \`application\`.reg_date >= ${dateFromText}
      AND \`application\`.reg_date <=${dateToText}`,
      })
      .toPromise();
    if (jumlahAplikasi.length > 0) this.jumlahAplikasi = jumlahAplikasi[0].jumlahAplikasi;

    const jumlahKonsultasi = await this.http
      .post(this.urlQuery, {
        query: `select count(*) as \`jumlahKonsultasi\` from \`case_consultation\` WHERE created_at >= ${dateFromText}
    AND created_at <=${dateToText}`,
      })
      .toPromise();
    if (jumlahKonsultasi.length > 0) this.jumlahKonsultasi = jumlahKonsultasi[0].jumlahKonsultasi;

    const jumlahTransfer = await this.http
      .post(this.urlQuery, {
        query: `select count(*) as \`jumlahTransfer\` from \`CaseTransfer\` WHERE tglTransfer >= ${dateFromText}
  AND tglTransfer <=${dateToText} AND tglTransfer is not null`,
      })
      .toPromise();
    if (jumlahTransfer.length > 0) this.jumlahTransfer = jumlahTransfer[0].jumlahTransfer;

    const jumlahRujukan = await this.http
      .post(this.urlQuery, {
        query: `select count(*) as \`jumlahRujukan\` from \`CaseReferral\` WHERE tglTransfer >= ${dateFromText}
  AND tglTransfer <=${dateToText} and tglTransfer is not null`,
      })
      .toPromise();
    if (jumlahRujukan.length > 0) this.jumlahRujukan = jumlahRujukan[0].jumlahRujukan;

    const jumlahPenerimaManfaat = await this.http
      .post(this.urlQuery, {
        query: `select sum(\`application\`.\`jumlah_penerima_manfaat\`) as \`jumlahPenerimaManfaat\` from \`application\` WHERE reg_date >= ${dateFromText}
      AND reg_date <=${dateToText}`,
      })
      .toPromise();
    // console.log(jumlahPenerimaManfaat);
    if (jumlahPenerimaManfaat.length > 0)
      this.jumlahPenerimaManfaat = jumlahPenerimaManfaat[0].jumlahPenerimaManfaat
        ? jumlahPenerimaManfaat[0].jumlahPenerimaManfaat
        : 0;

    const kasusBerjalan = await this.http
      .post(this.urlQuery, {
        query: `select count(*) as \`kasusBerjalan\` from \`case\` LEFT JOIN \`application\` on \`application\`.\`case\` = \`case\`.\`id\` WHERE \`case\`.created_at >= ${dateFromText}
        AND \`case\`.created_at <=${dateToText} AND tahap != '4012'`,
      })
      .toPromise();
    // console.log(kasusBerjalan);
    if (kasusBerjalan.length > 0)
      this.kasusBerjalan = kasusBerjalan[0].kasusBerjalan ? kasusBerjalan[0].kasusBerjalan : 0;

    const kasusSelesai = await this.http
      .post(this.urlQuery, {
        query: `select count(*) as \`kasusSelesai\` from \`case\` LEFT JOIN \`application\` on \`application\`.\`case\` = \`case\`.\`id\` WHERE \`case\`.created_at >= ${dateFromText}
        AND \`case\`.created_at <=${dateToText} AND tahap = '4012'`,
      })
      .toPromise();
    // console.log(kasusSelesai);
    if (kasusSelesai.length > 0) this.kasusSelesai = kasusSelesai[0].kasusSelesai ? kasusSelesai[0].kasusSelesai : 0;

    const hakTerlanggar = await this.http
      .post(this.urlQuery, {
        query: `SELECT (select teks from mt_vocab where kode=kode_mt) as name, COUNT(*) as value
        FROM (select kode_mt,reg_date from case_violated_rights left join \`case\` on \`case_violated_rights\`.\`case_id\` = \`case\`.\`id\`  left join \`application\` on \`application\`.\`case\` = \`case\`.\`id\`) as a
        where reg_date >= ${dateFromText}
        AND reg_date <=${dateToText} AND kode_mt is not null
        Group By kode_mt
        Order By COUNT(*) DESC
        LIMIT 10
        
        
        `,
      })
      .toPromise();
    // console.log(hakTerlanggar);
    this.hakTerlanggar = hakTerlanggar;

    const jenisPeradilan = await this.http
      .post(this.urlQuery, {
        query: `SELECT (select teks from mt_vocab where kode=jenis_peradilan) as name, COUNT(*) as value
        FROM (select jenis_peradilan,reg_date from case_progress left join \`case\` on \`case_progress\`.\`id\` = \`case\`.\`progresses\`  left join \`application\` on \`application\`.\`case\` = \`case\`.\`id\` where jenis_peradilan is not null) as a
        where reg_date >= ${dateFromText}
        AND reg_date <=${dateToText} 
        Group By jenis_peradilan
        Order By COUNT(*) DESC
        LIMIT 10
      
      `,
      })
      .toPromise();
    // console.log(jenisPeradilan);
    this.jenisPeradilan = jenisPeradilan;

    const issueLokal = await this.http
      .post(this.urlQuery, {
        query: `SELECT (select teks from mt_vocab where kode=a.kode_mt) as name, COUNT(*) as value
        FROM (select kode_mt,reg_date from case_issue left join \`case\` on \`case_issue\`.\`case_id\` = \`case\`.\`id\`  left join \`application\` on \`application\`.\`case\` = \`case\`.\`id\`) as a
        where reg_date >= ${dateFromText}
        AND reg_date <=${dateToText} AND kode_mt is not null
        Group By kode_mt
        Order By COUNT(*) DESC
        LIMIT 10
        
        
        `,
      })
      .toPromise();
    // console.log(issueLokal);
    this.issueLokal = issueLokal;
    // console.log(this.issueLokal);
    const unitSatuan = await this.http
      .post(this.urlQuery, {
        query: `SELECT (select teks from mt_vocab where kode=unit_satuan) as name, COUNT(*) as value
      FROM (select unit_satuan,reg_date from client left join person on client.person_id = person.id left join application on application.id= client.application_id) as a
      where reg_date >= ${dateFromText}
      AND reg_date <=${dateToText} AND unit_satuan is not null
      Group By unit_satuan
      Order By COUNT(*) DESC
      LIMIT 10`,
      })
      .toPromise();
    // console.log(hakTerlanggar);
    this.unitSatuan = unitSatuan;
    await this.geocode();
    this.loading = false;
    this.cdr.detectChanges();
  }

  async geocode() {
    const dateFrom = moment(this.dateRange[0]).format('YYYY-MM-DD');
    const dateTo = moment(this.dateRange[1]).format('YYYY-MM-DD');
    const dateFromText = `DATE ('${dateFrom}')`;
    const dateToText = `DATE ('${dateTo}')`;
    const listAlamat = await this.http
      .post(this.urlQuery, {
        query: `SELECT 
        (select teks from mt_vocab where distrik_id= kode) as distrik_id
FROM
    (SELECT 
        unit_satuan, reg_date, distrik_id
    FROM
        client
    LEFT JOIN person ON client.person_id = person.id
    LEFT JOIN application ON application.id = client.application_id) AS a    where reg_date >= ${dateFromText}
    AND reg_date <=${dateToText}`,
      })
      .toPromise();
    // console.log(listAlamat);
    if (!listAlamat) {
      return;
    } else if (listAlamat.length === 0) {
      return;
    }
    const latlngList = [];
    for (const el of listAlamat) {
      // console.log(el.distrik_id);
      const latlng = await this.http
        .post(this.urlGeocode, { param: { address: el.distrik_id, country: 'Indonesia' } })
        .toPromise();
      // console.log(latlng);
      if (latlng) {
        if (latlng.length > 0) {
          latlngList.push({
            lat: latlng[0].latitude,
            lng: latlng[0].longitude,
          });
        }
      }
    }

    this.latlngMap = latlngList;
    // console.log(JSON.stringify(this.latlngMap));
    this.cdr.detectChanges();
    return;
  }

  ngOnDestroy() {
    // avoid memory leaks here by cleaning up after ourselves. If we
    // don't then we will continue to run our initialiseInvites()
    // method on every navigationEnd event.
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
