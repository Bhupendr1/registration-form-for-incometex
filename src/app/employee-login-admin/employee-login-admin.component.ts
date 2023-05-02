import { Component } from '@angular/core';
import { PayManagerServiceService } from '../service/pay-manager-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { flip } from '@popperjs/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-login-admin',
  templateUrl: './employee-login-admin.component.html',
  styleUrls: ['./employee-login-admin.component.scss']
})
export class EmployeeLoginAdminComponent {

  constructor(private _api: PayManagerServiceService, private _fb: FormBuilder ,private router:Router) {
  }
  form!: FormGroup;
  INTEGER_REGEXP = /^[0-9]*$/;
  CHART_REGEXP = /^[a-zA-Z]+$/;
  isFormSubmitted = false;
  ngOnInit(): void {
    this.form = this._fb.group({
      TreasuryCode: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(this.INTEGER_REGEXP),
        ]),
      ],
      DDOCode: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(this.INTEGER_REGEXP),
        ]),
      ],
      OfficeCode: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(this.INTEGER_REGEXP),
        ]),
      ],
      Nicuid: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(this.INTEGER_REGEXP),
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
      let rdata={
        "Nicuid": 2,
        "TreasuryCode": "3500",
        "DDOCode": 1125,
        "OfficeID": 1125
   
      }
      // let rdata = {
      //   "Nicuid": this.form.controls['Nicuid'].value,
      //   "TreasuryCode": this.form.controls['TreasuryCode'].value,
      //   "DDOCode": this.form.controls['DDOCode'].value,
      //   "OfficeID": this.form.controls['OfficeCode'].value
      // }
this._api.postRequestUrl01(rdata,"SuperAdminLogin/IsEmployeeExists").subscribe((result)=>{
  console.log(result)
  this.router.navigate(['Employedetails'])
})
    }
  }
}