import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleGuard, JWTGuard } from '@delon/auth';
import { environment } from '@env/environment';
// layout
import { LayoutPassportComponent } from '../layout/passport/passport.component';
// dashboard pages
// import { DashboardV1Component } from './dashboard/v1/v1.component';
// passport pages
import { UserLoginComponent } from './passport/login/login.component';
// single pages
// import { UserLockComponent } from './passport/lock/lock.component';
import { LayoutBasicComponent } from '../layout/basic/basic.component';
import { LayoutBlankComponent } from '../layout/blank/blank.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutBasicComponent,
    canActivate: [JWTGuard],
    canActivateChild: [JWTGuard],
    children: [
      { path: '', redirectTo: 'landing', pathMatch: 'full' },
      // { path: 'dashboard/v1', component: DashboardV1Component },
      { path: 'landing', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
      // Exception
      { path: 'exception', loadChildren: () => import('./exception/exception.module').then(m => m.ExceptionModule) },
      { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
    ],
  },
  // passport
  {
    path: 'passport',
    component: LayoutPassportComponent,
    children: [
      {
        path: 'login',
        component: UserLoginComponent,
        data: { title: '登录', titleI18n: 'app.login.login' },
      },
      // {
      //   path: 'lock',
      //   component: UserLockComponent,
      //   data: { title: '锁屏', titleI18n: 'app.lock' },
      // },
    ],
  },
  { path: '**', redirectTo: 'exception/404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
      // NOTICE: If you use `reuse-tab` component and turn on keepingScroll you can set to `disabled`
      // Pls refer to https://ng-alain.com/components/reuse-tab
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class RouteRoutingModule { }
