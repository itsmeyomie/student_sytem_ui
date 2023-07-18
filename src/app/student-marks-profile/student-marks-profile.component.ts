import { Component, OnDestroy, OnInit } from '@angular/core';
import { Marks } from '../marks';
import { StudentMarksProfileService } from './student-marks-profile.service';
import { Subscription, map, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../students';

@Component({
  selector: 'app-student-marks-profile',
  templateUrl: './student-marks-profile.component.html',
  styleUrls: ['./student-marks-profile.component.css']
})
export class StudentMarksProfileComponent implements OnInit ,OnDestroy{
 



  constructor(private viewService: StudentMarksProfileService,private route: ActivatedRoute) { }


private marksSubscription:Subscription=new Subscription();

  ngOnDestroy(): void {
    if(this.marksSubscription){
      this.marksSubscription.unsubscribe();
    }
  }
   

  student:Student={
    id: 0,
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
    studentId:this.student,
    total: 0,
    average: 0,
    grade: ''
  }

 

  ngOnInit(): void { this.marksSubscription.add(
    this.route.params.pipe(
      map(param => param['id']),
      switchMap(id => this.viewService.viewMarks(id))
    ).subscribe(data => {
      
      this.studentMarks = data;
      
    }));
  }
}  


