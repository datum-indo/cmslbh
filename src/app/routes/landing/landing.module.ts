import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { CasesComponent } from './cases/cases.component';
import { CaseSummaryComponent } from './casesummary/casesummary.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingRoutingModule } from './landing-routing.module';
import { G2BarModule } from '@delon/chart/bar';
import { G2CardModule } from '@delon/chart/card';
import { G2GaugeModule } from '@delon/chart/gauge';
import { G2MiniAreaModule } from '@delon/chart/mini-area';
import { G2MiniBarModule } from '@delon/chart/mini-bar';
import { G2MiniProgressModule } from '@delon/chart/mini-progress';
import { NumberInfoModule } from '@delon/chart/number-info';
import { G2PieModule } from '@delon/chart/pie';
import { G2RadarModule } from '@delon/chart/radar';
import { G2SingleBarModule } from '@delon/chart/single-bar';
import { G2TagCloudModule } from '@delon/chart/tag-cloud';
import { G2TimelineModule } from '@delon/chart/timeline';
import { G2WaterWaveModule } from '@delon/chart/water-wave';

@NgModule({
  imports: [
    SharedModule,
    G2BarModule,
    G2CardModule,
    G2GaugeModule,
    NumberInfoModule,
    G2MiniAreaModule,
    NumberInfoModule,
    G2MiniBarModule,
    G2MiniProgressModule,
    G2PieModule,
    G2RadarModule,
    G2SingleBarModule,
    G2TagCloudModule,
    G2TimelineModule,
    G2WaterWaveModule,
    LandingRoutingModule
  ],
  declarations: [DashboardComponent, CaseSummaryComponent, CasesComponent],
})
export class LandingModule { }
