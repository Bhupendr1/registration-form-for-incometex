import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReimbursementAdjuestmentRoutingModule } from './reimbursement-adjuestment-routing.module';
import { TelephonicAdjustmentComponent } from './telephonic-adjustment/telephonic-adjustment.component';
import { ReimbursementAnnualDedclarationComponent } from './reimbursement-annual-dedclaration/reimbursement-annual-dedclaration.component';
import { PeriodicalAdjustmentComponent } from './periodical-adjustment/periodical-adjustment.component';
import { ReimbursementTransferRequestComponent } from './reimbursement-transfer-request/reimbursement-transfer-request.component';
import { ReimbursementForwardComponent } from './reimbursement-forward/reimbursement-forward.component';
import { ReimbursementReportComponent } from './reimbursement-report/reimbursement-report.component';


@NgModule({
  declarations: [
    TelephonicAdjustmentComponent,
    ReimbursementAnnualDedclarationComponent,
    PeriodicalAdjustmentComponent,
    ReimbursementTransferRequestComponent,
    ReimbursementForwardComponent,
    ReimbursementReportComponent
  ],
  imports: [
    CommonModule,
    ReimbursementAdjuestmentRoutingModule
  ]
})
export class ReimbursementAdjuestmentModule { }
