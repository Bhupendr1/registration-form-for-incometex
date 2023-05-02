import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillWiseStatusComponent } from './bill-wise-status/bill-wise-status.component';
import { EmployeeBillForwardComponent } from './employee-bill-forward/employee-bill-forward.component';
import { EmployeeBillStatusComponent } from './employee-bill-status/employee-bill-status.component';
import { EmployeeMedicalBillComponent } from './employee-medical-bill/employee-medical-bill.component';
import { EmployeeTABillComponent } from './employee-ta-bill/employee-ta-bill.component';
import { TAMedicalAnnexureComponent } from './ta-medical-annexure/ta-medical-annexure.component';

const routes: Routes = [
 {path:'',component:EmployeeMedicalBillComponent},
 {path:'TAMedicalAnnexure',component:TAMedicalAnnexureComponent},
 {path:'EmployeeTABillComponent',component:EmployeeTABillComponent},
 {path:'EmployeeBillForwardComponent',component:EmployeeBillForwardComponent},
 {path:'EmployeeBillStatusComponent',component:EmployeeBillStatusComponent},
 {path:'BillWiseStatusComponent',component:BillWiseStatusComponent}
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaMedicalBillRoutingModule { }
