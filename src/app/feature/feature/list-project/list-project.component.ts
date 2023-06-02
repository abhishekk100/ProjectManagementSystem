import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { ProjectDetails } from '../../project-details';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css'],
})
export class ListProjectComponent implements OnInit {
  constructor(private service: UserService) {}
  projectArray: ProjectDetails[] = [];

  ngOnInit(): void {
    this.service.getAllProjectDetails().subscribe((data: ProjectDetails[]) => {
      this.projectArray = data;
    });
  }

changeStatus(proId:number,status:string){
  
this.service.changeProjectStatus(proId,status).subscribe((data:any)=>{
 if(data)
 {
  this.service.getAllProjectDetails().subscribe((data: ProjectDetails[]) => {
    this.projectArray = data;
  });
 }
 else{
  window.alert("Status Not Changed");
 }
})

}
}
// showListOfProject() {
//   // this.service.getAllProjectDetails().subscribe((data: ProjectDetails[]) => {
//   //   this.projectArray = data;
//   // });
// }
