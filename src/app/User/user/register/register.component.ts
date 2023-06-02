import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;
  constructor(private service: UserService, private app: AppComponent) {}
  user: User = new User();
  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      dob: new FormControl(),
    });
  }
  onSubmit(form: FormGroup) {
    this.user = form.value;
    this.service.addAll(this.user).subscribe((data: any) => {
      if (data) {
        this.app.ls = 0;
        window.alert('Done');
      } else {
        window.alert('Not Done');  }
    });
  }
}
