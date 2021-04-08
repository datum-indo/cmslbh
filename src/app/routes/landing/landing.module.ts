import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { CasesComponent } from './cases/cases.component';
import { CaseSummaryComponent } from './casesummary/casesummary.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingRoutingModule } from './landing-routing.module';


@NgModule({
  declarations: [DashboardComponent, CaseSummaryComponent, CasesComponent],
  imports: [
    SharedModule,
    LandingRoutingModule
  ],
})
export class LandingModule { }
