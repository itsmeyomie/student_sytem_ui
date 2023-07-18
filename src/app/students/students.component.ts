import { Component, OnInit } from '@angular/core';
import { StudentsService } from './students.service';
import { Observable, Subscription } from 'rxjs';
import { Student } from '../students';
import {DataSource} from '@angular/cdk/collections';
import { Marks } from '../marks';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit{

  students:Student[]=[]

  
 
  displayedColumns: string[] = ['studentId', 'firstName', 'lastName', 'admissionNumber','form'];

 

  constructor(private service:StudentsService){}
  ngOnInit(): void {
   const studentSubscription=this.service.getStudents().subscribe(val=>
      this.students=val
    )
  }

   


  }


