import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterDataRoutingModule } from './master-data-routing.module';
import { UpdateEmpPayDateComponent } from './update-emp-pay-date/update-emp-pay-date.component';
import { PersonalDetailsUpdatesComponent } from './personal-details-updates/personal-details-updates.component';
import { EmployeeSchemeRequestComponent } from './employee-scheme-request/employee-scheme-request.component';
import { UpdateNoDetailsRequestComponent } from './update-no-details-request/update-no-details-request.component';
import { PersonalDataRequestComponent } from './personal-data-request/personal-data-request.component';
import { DeleteRejectedRequestComponent } from './delete-rejected-request/delete-rejected-request.component';
import { BankAccountUpdateComponent } from './bank-account-update/bank-account-update.component';
import { PersonalDetailsUpdateComponent } from './personal-details-update/personal-details-update.component';


@NgModule({
  declarations: [
    UpdateEmpPayDateComponent,
    PersonalDetailsUpdatesComponent,
    EmployeeSchemeRequestComponent,
    UpdateNoDetailsRequestComponent,
    PersonalDataRequestComponent,
    DeleteRejectedRequestComponent,
    BankAccountUpdateComponent,
    PersonalDetailsUpdateComponent
  ],
  imports: [
    CommonModule,
    MasterDataRoutingModule
  ]
})
export class MasterDataModule { }
