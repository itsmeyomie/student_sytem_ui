import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMarksComponent } from './add-marks.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
 {
  path:'',
  component:AddMarksComponent
 }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AddMarksRoutingModule { }
