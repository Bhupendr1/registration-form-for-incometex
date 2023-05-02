import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaMedicalBillRoutingModule } from './ta-medical-bill-routing.module';
import { EmployeeMedicalBillComponent } from './employee-medical-bill/employee-medical-bill.component';
import { TAMedicalAnnexureComponent } from './ta-medical-annexure/ta-medical-annexure.component';
import { EmployeeTABillComponent } from './employee-ta-bill/employee-ta-bill.component';
import { EmployeeBillForwardComponent } from './employee-bill-forward/employee-bill-forward.component';
import { EmployeeBillStatusComponent } from './employee-bill-status/employee-bill-status.component';
import { BillWiseStatusComponent } from './bill-wise-status/bill-wise-status.component';


@NgModule({
  declarations: [
    EmployeeMedicalBillComponent,
    TAMedicalAnnexureComponent,
    EmployeeTABillComponent,
    EmployeeBillForwardComponent,
    EmployeeBillStatusComponent,
    BillWiseStatusComponent
  ],
  imports: [
    CommonModule,
    TaMedicalBillRoutingModule,
  ],
  

})
export class TaMedicalBillModule { }
