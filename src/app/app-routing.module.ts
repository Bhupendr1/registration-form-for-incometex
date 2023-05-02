import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormComponent} from './form/form.component';
import {UserComponent} from './user/user.component';
import {EmployeeLoginAdminComponent} from './employee-login-admin/employee-login-admin.component';
import {EmployeDetailsReportComponent} from './employe-details-report/employe-details-report.component';
import {SalaryDeductionServiceComponent} from './salary-deduction-service/salary-deduction-service.component';
import {TogglesidemenuComponent} from './togglesidemenu/togglesidemenu.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
const routes: Routes = [
  {path: '', redirectTo: 'Login', pathMatch: 'full'},
  {path:'Login',component:UserComponent},
  {path:'form',component:FormComponent},
  {path:'adminLogin',component:EmployeeLoginAdminComponent},
  {path:'Employedetails',component:EmployeDetailsReportComponent},
  {path:'SalaryDeducationService',component:SalaryDeductionServiceComponent},
  {path:'TogglesidemenuComponent',component:TogglesidemenuComponent},
  {path:'HeaderComponent',component:HeaderComponent},
  {path:'FooterComponent',component:FooterComponent},

  {
    path: 'Ta-Bill',
    loadChildren: () => import('../app/EmployeeCorner/ta-medical-bill/ta-medical-bill.module').then(m => m.TaMedicalBillModule)
  },
  {
    path: 'Master-Data',
    loadChildren: () => import('../app/EmployeeCorner/master-data/master-data.module').then(m => m.MasterDataModule)
  },
  {
    path: 'Employee-report',
    loadChildren: () => import('../app/EmployeeCorner/employee-report/employee-report.module').then(m => m.EmployeeReportModule)
  },
  // {
  //   path: 'HOD-Request',
  //   loadChildren: () => import('../app/EmployeeCorner/hodreport/hodreport.module').then(m => m.HODReportModule)
  // },
  {
    path: 'reimbursement-adjuestment',
    loadChildren: () => import('../app/EmployeeCorner/reimbursement-adjuestment/reimbursement-adjuestment.module').then(m => m.ReimbursementAdjuestmentModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
