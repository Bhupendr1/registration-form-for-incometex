import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankAccountUpdateComponent } from './bank-account-update/bank-account-update.component';
import { DeleteRejectedRequestComponent } from './delete-rejected-request/delete-rejected-request.component';
import { EmployeeSchemeRequestComponent } from './employee-scheme-request/employee-scheme-request.component';
import { PersonalDataRequestComponent } from './personal-data-request/personal-data-request.component';
import { PersonalDetailsUpdateComponent } from './personal-details-update/personal-details-update.component';
import { PersonalDetailsUpdatesComponent } from './personal-details-updates/personal-details-updates.component';
import { UpdateEmpPayDateComponent } from './update-emp-pay-date/update-emp-pay-date.component';
import { UpdateNoDetailsRequestComponent } from './update-no-details-request/update-no-details-request.component';

const routes: Routes = [
  {path:'UpdateEmpPayDateComponent',component:UpdateEmpPayDateComponent},
  {path:'PersonalDetailsUpdatesComponent',component:PersonalDetailsUpdatesComponent},
  {path:'EmployeeSchemeRequestComponent',component:EmployeeSchemeRequestComponent},
  {path:'UpdateNoDetailsRequestComponent',component:UpdateNoDetailsRequestComponent},
  {path:'PersonalDataRequestComponent',component:PersonalDataRequestComponent},
  {path:'DeleteRejectedRequestComponent',component:DeleteRejectedRequestComponent},
  {path:'BankAccountUpdateComponent',component:BankAccountUpdateComponent},
  {path:'PersonalDetailsUpdateComponent',component:PersonalDetailsUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterDataRoutingModule {}
