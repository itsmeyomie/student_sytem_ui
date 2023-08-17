import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Marks } from '../marks';

import { Subscription, map, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../students';
import { MarksService } from './marks.service';

@Component({
  selector: 'app-student-marks-profile',
  templateUrl: './student-marks-profile.component.html',
  styleUrls: ['./student-marks-profile.component.css']
})
export class StudentMarksProfileComponent implements OnInit, OnDestroy {







  constructor(private service: MarksService, private route: ActivatedRoute, private router: Router) {

    const state = this.router.getCurrentNavigation()?.extras.state
    if (state) {
      this.student = state['student']
    }

  }


  private marksSubscription: Subscription = new Subscription();

  ngOnDestroy(): void {
    if (this.marksSubscription) {
      this.marksSubscription.unsubscribe();
    }

  }

  isDeleting: boolean = false;
  clicked: boolean = false;
  isEditting: boolean = false;
  studentId!: number;
  firstName!: string;
  lastName!: string;
  notification!:string;


  student: Student = {
    studentId: 0,
    firstName: '',
    lastName: '',
    form: '',
    admissionNumber: ''
  }

  studentMarks: Marks = {
    marksId: 0,
    maths: 0,
    english: 0,
    chemistry: 0,
    studentId: this.student,
    total: 0,
    average: 0,
    grade: ''
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
  marksId!: number;
  id!: number;
  maths!: number;
  english!: number;
  chemistry!: number;
  _studentId!: number;
  total!: number;
  average!: number;
  grade!: string;




  ngOnInit(): void {

    this.route.params
      .pipe(
        switchMap(() => this.service.viewMarks(this.student.studentId))
      )
      .subscribe(data => {
        console.log(data);
        this.studentMarks = data;
        this.notification="on view Marks";
      }, error => {
        this.notification="No Marks Available"
        console.log("error")
      });
  }


  public addMarks() {
    this.marks.marksId = this.id;
    this.marks.maths = this.maths;
    this.marks.english = this.english;
    this.marks.chemistry = this.chemistry;
    this.marks.studentId.studentId = this.student.studentId;
    this.marks.average = this.average;
    this.marks.total = this.total;
    this.marks.grade = this.grade;

    console.log(this.marks)

    this.service.addMarks(this.marks).subscribe((value: Marks) =>{
      this.marks = value
      this.notification="Marks Added"
    }
    )

  }

  public updateMarks(): void {
  

    this.service.editMarks(this.marks)
      .subscribe(value =>{
        this.marks = value;
        this.notification="Marks Eddited"
      }
      

      );
  }


  deleteMarks(): void {
    this.service.deleteMarks(this.marksId)
      .subscribe();
  }

  public addingMarks() {
    this.clicked = true;

  }
  public doneAdding() {
    this.clicked = false;
  }

  public edittingMarks() {
    this.isEditting = true;
    this.marks=this.studentMarks;
    console.log(this.marks)
  }
  public doneEditting() {
    this.isEditting = false;
  }

  public deletingmarks() {
    this.marks=this.studentMarks;
   this.service.deleteMarks(this.marks.marksId).subscribe(()=>{
      this.notification="Marks Deleted";
   });
  }

  public doneDeleting() {
    this.isDeleting = false;
  }

}


