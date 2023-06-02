import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProjectComponent } from './add-project/add-project.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ListProjectComponent } from './list-project/list-project.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddProjectComponent,
    DashBoardComponent,
  ListProjectComponent],
  imports: [
    CommonModule,
  ReactiveFormsModule
  ],
  exports:[
    AddProjectComponent,
    DashBoardComponent,
  ListProjectComponent
  ]
})
export class FeatureModule { }
