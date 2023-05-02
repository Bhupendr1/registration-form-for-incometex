import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeReportRoutingModule } from './employee-report-routing.module';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { LastPayCertificateComponent } from './last-pay-certificate/last-pay-certificate.component';
import { PaySlipMonthWiseComponent } from './pay-slip-month-wise/pay-slip-month-wise.component';
import { GAEmployeeDetailsComponent } from './ga-employee-details/ga-employee-details.component';
import { EmployeePaymentReportComponent } from './employee-payment-report/employee-payment-report.component';


@NgModule({
  declarations: [
    PersonalDetailComponent,
    LastPayCertificateComponent,
    PaySlipMonthWiseComponent,
    GAEmployeeDetailsComponent,
    EmployeePaymentReportComponent
  ],
  imports: [
    CommonModule,
    EmployeeReportRoutingModule
  ]
})
export class EmployeeReportModule { }
