import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditMarksComponent } from './edit-marks.component';


const routes : Routes=[
  {
    path:'',
    component:EditMarksComponent
  }
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EditMarksRoutingModule { }
