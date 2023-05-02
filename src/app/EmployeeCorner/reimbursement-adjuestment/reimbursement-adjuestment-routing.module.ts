import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeriodicalAdjustmentComponent } from './periodical-adjustment/periodical-adjustment.component';
import { ReimbursementAnnualDedclarationComponent } from './reimbursement-annual-dedclaration/reimbursement-annual-dedclaration.component';
import { ReimbursementForwardComponent } from './reimbursement-forward/reimbursement-forward.component';
import { ReimbursementReportComponent } from './reimbursement-report/reimbursement-report.component';
import { ReimbursementTransferRequestComponent } from './reimbursement-transfer-request/reimbursement-transfer-request.component';
import { TelephonicAdjustmentComponent } from './telephonic-adjustment/telephonic-adjustment.component';
const routes: Routes = [
  {path:'TelephonicAdjustmentComponent',component:TelephonicAdjustmentComponent},
  {path:'ReimbursementAnnualDedclarationComponent',component:ReimbursementAnnualDedclarationComponent},
  {path:'PeriodicalAdjustmentComponent',component:PeriodicalAdjustmentComponent},
  {path:'ReimbursementTransferRequestComponent',component:ReimbursementTransferRequestComponent},
  {path:'ReimbursementForwardComponent',component:ReimbursementForwardComponent},
  {path:'ReimbursementReportComponent',component:ReimbursementReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReimbursementAdjuestmentRoutingModule { }
