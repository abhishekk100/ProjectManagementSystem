import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  logForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private service:UserService,private app:AppComponent){}
  user:User = new User();
  ngOnInit(): void {
      this.logForm = this.formBuilder.group({
        name:'',
        password:'' })
  }
  onSubmite(lgform:FormGroup){
this.user=lgform.value;
this.service.checkLoginUser(this.user).subscribe((data:any)=>{
  console.log(data);
  if(data)
  {
this.app.ls=3;
window.alert("Login Successful");
  }
  else{
    window.alert("Login Unsuccessful");
  }
})
  }
}
