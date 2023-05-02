import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  panelOpenState = false;
  title = 'incometextform';
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
