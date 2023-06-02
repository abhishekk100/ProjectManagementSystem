import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Atm-UI';

  
  ls=0;
 show(n:number){
this.ls=n;
 }
}
