import { Component, ElementRef, HostListener, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { PayManagerServiceService } from 'src/app/service/pay-manager-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class HeaderComponent implements OnInit {
  userEmp_Details:any
  empinfo:any;
  showFiller = false;
  panelOpenState = false;
  makerToken:any;
  // url= "assets/images/photo_man.jpg";
  url :any;
  constructor( private _Service:PayManagerServiceService,private _eref: ElementRef) {
  }

  ngOnInit(): void {
    // this.empinfo=this._Service.userInfo();
    this.makerToken = sessionStorage.getItem('MpJwtToken');
    //this.makerToken=localStorage.getItem('mpJWTToken');
    // alert(this.makerToken);
    this.getDecodedAccessToken(this.makerToken);
    this.fetchServicesdetail();

  }

  getDecodedAccessToken(makerToken: string): any {


  }
  onClick(event:any) {

    if (!this._eref.nativeElement.contains(event.target)) // or some similar check
    this.toggle=false
   }
  fetchServicesdetail() {
  
  }
toggle : boolean = false;
clickEvent(e:any){
  e.preventDefault();
     if(this.toggle==false){

      this.toggle=true
     }else{
      this.toggle= false
     }
}
closemenu(e:any){
  this.toggle=false
}
}
function doSomething() {
  throw new Error('Function not implemented.');
}

