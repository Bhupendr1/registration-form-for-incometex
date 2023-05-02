import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent } from './app.component';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormComponent } from './form/form.component';
import {FormsModule} from '@angular/forms';
import {UserComponent } from './user/user.component';
import {ReactiveFormsModule } from '@angular/forms';
import {EmployeeLoginAdminComponent } from './employee-login-admin/employee-login-admin.component';
import {EmployeDetailsReportComponent } from './employe-details-report/employe-details-report.component';
import {SalaryDeductionServiceComponent } from './salary-deduction-service/salary-deduction-service.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TogglesidemenuComponent } from './togglesidemenu/togglesidemenu.component';
import {FooterComponent } from './footer/footer.component';
import {TAMedicalBillComponent } from './EmployeeCorner/ta-medical-bill/ta-medical-bill.component';
import {MasterDataComponent } from './EmployeeCorner/master-data/master-data.component';
import {EmployeeReportComponent } from './EmployeeCorner/employee-report/employee-report.component';
import {TaMedicalBillModule } from './EmployeeCorner/ta-medical-bill/ta-medical-bill.module';
import {ReimbursementAdjuestmentComponent } from './EmployeeCorner/reimbursement-adjuestment/reimbursement-adjuestment.component';
import {EmployeeTransferRequestComponent } from './EmployeeCorner/employee-transfer-request/employee-transfer-request.component';
import {EmployeeDetailsComponent } from './EmployeeCorner/employee-details/employee-details.component';
import {EmployeeDeductionRequestComponent } from './EmployeeCorner/employee-deduction-request/employee-deduction-request.component';
import {NpsReportComponent } from './EmployeeCorner/nps-report/nps-report.component';
import {AdvanceSalaryRequestComponent } from './EmployeeCorner/advance-salary-request/advance-salary-request.component';
import {ReimbursementAnnualDeclarationComponent } from './EmployeeCorner/reimbursement-annual-declaration/reimbursement-annual-declaration.component';
import {UpdateNoComponent } from './EmployeeCorner/update-no/update-no.component';
import {MatExpansionModule } from '@angular/material/expansion';
import {MatIconModule } from '@angular/material/icon';
import {MatListModule } from '@angular/material/list';
import {MatSidenavModule } from '@angular/material/sidenav';
import {MatCardModule } from '@angular/material/card';
import {PayManagerServiceService } from './service/pay-manager-service.service';
import {HttpClientModule } from '@angular/common/http';
import {HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    UserComponent,
    EmployeeLoginAdminComponent,
    EmployeDetailsReportComponent,
    SalaryDeductionServiceComponent,
    FooterComponent,
    TAMedicalBillComponent,
    MasterDataComponent,
    EmployeeReportComponent,
    ReimbursementAdjuestmentComponent,
    EmployeeTransferRequestComponent,
    EmployeeDetailsComponent,
    EmployeeDeductionRequestComponent,
    NpsReportComponent,
    AdvanceSalaryRequestComponent,
    ReimbursementAnnualDeclarationComponent,
    UpdateNoComponent,
    TogglesidemenuComponent,
    HeaderComponent
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    TaMedicalBillModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    MatCardModule,
    HttpClientModule
    ],
  providers: [PayManagerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
