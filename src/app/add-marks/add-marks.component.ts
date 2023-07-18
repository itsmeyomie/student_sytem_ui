import { Component, OnDestroy } from '@angular/core';
import { AddMarksService } from './add-marks.service';
import { Marks } from '../marks';
import { Student } from '../students';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-marks',
  templateUrl: './add-marks.component.html',
  styleUrls: ['./add-marks.component.css']
})
export class AddMarksComponent implements OnDestroy {

  constructor(private addService: AddMarksService) { }
  ngOnDestroy(): void {
    if(this.addmarksSubscription){
      this.addmarksSubscription.unsubscribe();
    }
  }

  private addmarksSubscription:Subscription=new Subscription()

  id!: number;
  maths!: number;
  english!: number;
  chemistry!: number;
  studentId!: number;

  student:Student={
    id: 0,
    firstName: '',
    lastName: '',
    form: '',
    admissionNumber: ''
  }
  marks: Marks = {
    marksId: 0,
    maths: 0,
    english: 0,
    chemistry: 0,
    studentId: this.student,
    total: 0,
    average: 0,
    grade: ''
  }

  

  public addMarks() {
    this.marks.marksId = this.id;
    this.marks.maths = this.maths;
    this.marks.english = this.english;
    this.marks.chemistry = this.chemistry;
    this.marks.studentId.id= this.studentId;

    return this.addmarksSubscription.add(this.addService.addmarks(this.marks).subscribe(value =>
      this.marks = value
    ))

  }

}
