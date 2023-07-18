import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditMarksComponent } from './edit-marks.component';
import { EditMarksRoutingModule } from './edit-marks-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [EditMarksComponent],
  imports: [
    CommonModule,
    EditMarksRoutingModule,
    FormsModule

     ]
})
export class EditMarksModule { }
