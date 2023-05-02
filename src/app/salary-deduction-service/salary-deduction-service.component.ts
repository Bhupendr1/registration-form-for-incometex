import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PayManagerServiceService } from '../service/pay-manager-service.service';

@Component({
  selector: 'app-salary-deduction-service',
  templateUrl: './salary-deduction-service.component.html',
  styleUrls: ['./salary-deduction-service.component.scss']
})
export class SalaryDeductionServiceComponent {
  constructor(private _api: PayManagerServiceService, private _fb: FormBuilder) {
  }
  form!: FormGroup;
  INTEGER_REGEXP = /^[0-9]*$/;
  CHART_REGEXP = /^[a-zA-Z]+$/;
  isFormSubmitted = false;
  ngOnInit(): void {
    this.form = this._fb.group({
      SalaryDeduction: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(this.INTEGER_REGEXP),
        ]),
      ],DeductionAmount: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(this.INTEGER_REGEXP),
        ]),
      ],Reason:[
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(this.INTEGER_REGEXP),
        ]),
      ],
   });
  }
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
    })
    }
  }
}
