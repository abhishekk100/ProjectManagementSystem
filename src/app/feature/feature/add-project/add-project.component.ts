import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { ProjectDetails } from '../../project-details';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  constructor(private fb:FormBuilder,private services:UserService){

  }
  projectForm:FormGroup;
  project:ProjectDetails=new ProjectDetails();
 ngOnInit():void
{
this.projectForm = this.fb.group({
  projectName:'',
  reason:'',
  division:'',
  department:'',
  startDate:Date,
  endDate:Date,
  location:'',
  status:"Register"
})
} 
  onSubmit(proForm:FormGroup){
// console.log(proForm.value);
this.project = proForm.value;
console.log(this.project);
this.services.addProject(this.project).subscribe((data:any)=>{
  console.log(data);
});

}
}
