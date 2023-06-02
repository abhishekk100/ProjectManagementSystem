import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
 
  h={totalProject:0,
 closProject:0,
 runningProjecng:0,
 cancelledProject:0,
registerProject:0
}
  constructor(private service:UserService){
this.getTotalDetailProject(); }
  ngOnInit(): void { }
 
getTotalDetailProject(){
  this.service.getTotaleProject().subscribe((data:any)=>{
    this.h.totalProject = data.totalCount;
    this.h.runningProjecng = data.runningCount;
    this.h.closProject = data.closeCount
    this.h.cancelledProject = data.cancleCount;
    this.h.registerProject = data.registerCount;
  });}
  show:number=0;
  display(n:number){
    this.show=n;
    this.getTotalDetailProject();
   
  }
}
