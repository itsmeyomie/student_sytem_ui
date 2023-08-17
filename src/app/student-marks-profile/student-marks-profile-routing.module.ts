import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentMarksProfileComponent } from './student-marks-profile.component';


const routes: Routes = [

  {
    path:':id',
    component: StudentMarksProfileComponent
  },
 

 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class StudentMarksProfileRoutingModule { }
