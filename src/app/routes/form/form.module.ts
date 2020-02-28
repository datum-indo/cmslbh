import { NgModule } from '@angular/core';

import { SharedModule } from '@shared';
import { FormRoutingModule } from './form-routing.module';

import { ListPersonComponent } from './person/list-person/list-person.component';
import { CreatePersonComponent } from './person/create-person/create-person.component';
import { CreateApplicationComponent } from './application/create-application/create-application.component';
import { ListApplicationComponent } from './application/list-application/list-application.component';
import { CreateClientComponent } from './client/create-client/create-client.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { ConsultationQueueComponent } from './consultation-queue/consultation-queue.component';
import { ViewCaseComponent } from './case/view-case/view-case.component';
import { ListCaseComponent } from './case/list-case/list-case.component';
import { CaseTransferComponent } from './case/case-transfer/case-transfer.component';
import { CasePkComponent } from './case/case-pk/case-pk.component';
import { CaseDocumentComponent } from './case/case-document/case-document.component';
import { CaseConsultationComponent } from './case/case-consultation/case-consultation.component';
import { RapatQueueComponent } from './rapat-queue/rapat-queue.component';
import { ReferralQueueComponent } from './referral-queue/referral-queue.component';
import { AnalisisComponent } from './analisis/analisis.component';
import { CreateNetworkComponent } from './network/create-network/create-network.component';
import { ListNetworkComponent } from './network/list-network/list-network.component';

const COMPONENTS = [ListPersonComponent, CreatePersonComponent];

@NgModule({
  imports: [SharedModule, FormRoutingModule],
  declarations: [
    ...COMPONENTS,
    CreateApplicationComponent,
    ListApplicationComponent,
    CreateClientComponent,
    CreateUserComponent,
    ListUserComponent,
    ConsultationQueueComponent,
    ViewCaseComponent,
    ListCaseComponent,
    CaseTransferComponent,
    CasePkComponent,
    CaseDocumentComponent,
    CaseConsultationComponent,
    RapatQueueComponent,
    ReferralQueueComponent,
    AnalisisComponent,
    CreateNetworkComponent,
    ListNetworkComponent,
  ],
  entryComponents: [],
  exports: [...COMPONENTS],
})
export class FormModule {}
