import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { RouteRoutingModule } from './routes-routing.module';
// dashboard pages
import { DashboardV1Component } from './dashboard/v1/v1.component';
import { DashboardWorkplaceComponent } from './dashboard/workplace/workplace.component';
// passport pages
import { UserLoginComponent } from './passport/login/login.component';
// single pages
import { UserLockComponent } from './passport/lock/lock.component';
import { FormModule } from './form/form.module';
import { CasesComponent } from './dashboard/cases/cases.component';
const COMPONENTS = [
  DashboardV1Component,
  DashboardWorkplaceComponent,
  // passport pages
  UserLoginComponent,
  // single pages
  UserLockComponent,
];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    RouteRoutingModule,
    FormModule,
  ],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT, CasesComponent],
  entryComponents: COMPONENTS_NOROUNT,
})
export class RoutesModule { }
