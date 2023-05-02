import { Component } from '@angular/core';
import { PayManagerServiceService } from '../service/pay-manager-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employe-details-report',
  templateUrl: './employe-details-report.component.html',
  styleUrls: ['./employe-details-report.component.scss']
})
export class EmployeDetailsReportComponent {
  constructor(private _api:PayManagerServiceService,private _fb: FormBuilder, private router:Router) {
  }
  form!: FormGroup;
  INTEGER_REGEXP = /^[0-9]*$/;
  CHART_REGEXP = /^[a-zA-Z]+$/;
  isFormSubmitted = false;
  ngOnInit(): void {
    this.form = this._fb.group({
      EmployeeName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(this.CHART_REGEXP),
        ]),
      ],
     
    });
  }
  // Example starter TypeScript for disabling form submissions if there are invalid fields

  // Fetch all the forms we want to apply custom Bootstrap validation styles to

  // On submit button handler. Maybe you need to calculate the loan...
  validateForm() {
    debugger
    // Flag to indicate if uses clicked the Calculate button.
    this.isFormSubmitted = true;
    if (this.form.invalid) {
      return
    } else {
      let rdata = {
        "Nicuid": 12233
      }
    this._api.postRequestUrl01(rdata,"EmployeeDetails/getEmployeeDetail").subscribe((result)=>{
      console.log(result)
      this.router.navigate(['SalaryDeducationService'])

    })
    }
  }
}
