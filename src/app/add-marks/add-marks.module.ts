import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddMarksComponent } from './add-marks.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddMarksRoutingModule } from './add-marks-routing.module';



@NgModule({
  declarations: [
    AddMarksComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    AddMarksRoutingModule
  ]
})
export class AddMarksModule { }
