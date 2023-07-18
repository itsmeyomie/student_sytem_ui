import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { StudentMarksProfileRoutingModule } from './student-marks-profile-routing.module';
import { RouterModule } from '@angular/router';
import { StudentMarksProfileComponent } from './student-marks-profile.component';



@NgModule({
  declarations: [
    StudentMarksProfileComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    StudentMarksProfileRoutingModule,
    RouterModule
  ]
})
export class StudentMarksProfileModule { }
