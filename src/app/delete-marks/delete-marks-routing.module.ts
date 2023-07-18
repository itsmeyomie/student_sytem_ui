import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DeleteMarksComponent } from './delete-marks.component';

const routes : Routes=[
{
  path:'',
  component:DeleteMarksComponent
}


]



  


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DeleteMarksRoutingModule { }
