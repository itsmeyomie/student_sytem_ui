import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeleteMarksComponent } from './delete-marks.component';
import { DeleteMarksRoutingModule } from './delete-marks-routing.module';



@NgModule({
  declarations: [
    DeleteMarksComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DeleteMarksRoutingModule
  ]
})
export class DeleteMarksModule { }
