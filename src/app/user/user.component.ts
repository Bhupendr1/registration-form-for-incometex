import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PayManagerServiceService } from '../service/pay-manager-service.service';
import { login } from '../interface/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  isFormSubmitted = false;
  INTEGER_REGEXP = /^[0-9]*$/;
  CHART_REGEXP = /^[a-zA-Z]+$/;
  constructor(private _Api: PayManagerServiceService, private fb: FormBuilder, private route: Router) { }
  profileForm = this.fb.group({
    username: [
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(this.CHART_REGEXP),
      ]),
    ],
    password: [
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(this.INTEGER_REGEXP),
      ]),
    ],
    RadioValue: [
      '1',Validators.required],
    otp: [
      '',
      Validators.compose([
          Validators.required,
          Validators.pattern(this.INTEGER_REGEXP),
      ]),
    ],
  });
  ngOnInIt(): void {

  }

  onSubmit() {
    debugger
    this.isFormSubmitted = true;
    if (this.profileForm.invalid) {
      return
    } else {
      let rdata = {
        "UserName": this.profileForm.controls['username'].value,
        "Password": this.profileForm.controls['password'].value
      }
      this._Api.postRequestUrl01(rdata, "User/Login").subscribe((res) => {
        if (res) {
          this.route.navigate(['adminLogin'])
        }
      })
    }
    // else{
    //   let rdata={
    //     "UserName":this.profileForm.controls['username'].value,
    //     "Password":this.profileForm.controls['password'].value,
    //   }
    //   this._Api.userLogin(rdata).subscribe((result)=>{
    //     console.log(result)
    //   })
    // }
  }

}
