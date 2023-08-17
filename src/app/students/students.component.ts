import { Component, OnDestroy, OnInit } from '@angular/core';
import { StudentsService } from './students.service';
import { Observable, Subscription, of } from 'rxjs';
import { Student } from '../students';
import { Router } from '@angular/router';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit, OnDestroy {

  students: Student[] = []
  private subscriptions: Subscription[] = [];
  selectedStudents: Student[] = [];

  isChecked: boolean = false;
  clicked: boolean = false;
  isClicked: boolean = false;
  isDeleting: boolean = false;
  isEditting: boolean = false
  selectedStudent!: Student;
  isSelectedStudent: boolean = false;

  studentId!: number;
  firstname!: string;
  lastname!: string;
  admission!: string;
  form!: string;

  notification!: string;
  count: number = 0;

  student: Student = {
    studentId: 0,
    firstName: '',
    lastName: '',
    form: '',
    admissionNumber: ''
  };




  constructor(private service: StudentsService, private router: Router) { }

  public navigateToDetails(student: Student) {
    this.router.navigate(['/marks', student.studentId], {
      state: {
        student
      }
    });
  }

  // public handleCheckbox(student: Student, event: any) {
  //   this.isChecked = true;
  //   if (this.isChecked) {
  //     console.log(student);
  //   }
  // }

  public addStudent() {
    this.isClicked = true;
    this.clearStudentDetails();
  }
  public _addStudent() {

    this.student.firstName = this.firstname;
    this.student.lastName = this.lastname;
    this.student.admissionNumber = this.admission;
    this.student.form = this.form;


    return this.subscriptions.push(this.service.addStudent(this.student).subscribe(value => {
      this.student = value;
      this.notification = 'Student Added';
      this.isClicked = false;
    }
    )
    );
  }


  public deleteStudent() {
    let studentId = this.selectedStudent.studentId;
    this.students.splice(this.students.indexOf(this.selectedStudent), 1)
    return this.subscriptions.push(this.service.deleteStudent(studentId).subscribe({
      next: () => {
        this.notification = 'Student Deleted';
        this.isSelectedStudent = false;
      },
      error: (e) => this.notification = JSON.stringify(e.error),

    }


    ))

  }
  public deleteSelectedStudents() {
    for (const student of this.selectedStudents) {
      this.service.deleteStudent(student.studentId).subscribe({
        next: () => {
          this.students = this.students.filter(s => s !== student);
          this.notification = 'Selected Student(s) Deleted';
        },
        error: (e) => this.notification = JSON.stringify(e.error),
        complete: () => {
          this.selectedStudents = [];
        }
      });
    }
  }
  changes(e: any, student: Student) {
    if (e.target.checked) {
      this.isSelectedStudent = true;
      this.selectedStudent = student;


      console.log(student)
    } else {
      console.log("wassuh")
    }
  }

  public editStudent() {
    this.isEditting = true;
    console.log(this.selectedStudent);
  }

  public ischecked() {
    this.isChecked
  }

  public _editStudent() {
    console.log(this.count)
    return this.subscriptions.push(this.service.editStudent(this.selectedStudent).subscribe(val => {
      this.selectedStudent = val;
      this.notification = 'Student Edited';
      this.isEditting = false;
      this.isSelectedStudent = false;

    }
    ))

  }




  public selectStudent(student: Student, event: any) {
    if (event.target.checked) {
      this.isSelectedStudent = true;
      this.selectedStudent = student;


    } else {
      this.isSelectedStudent = false;
      this.clearStudentDetails();
    }
  }
  public selectStudents(student: Student, event: any) {

    if (event.target.checked) {
      this.count++
      this.isSelectedStudent = true;
      this.selectedStudent = student;
      this.selectedStudents.push(student);
    } else {
      this.count--;
      this.isSelectedStudent = false;
      const index = this.selectedStudents.indexOf(student);
      if (index !== -1) {
        this.selectedStudents.splice(index, 1);
      }
    }
    if (this.count > 1) {
      this.isDeleting = true;
      this.isEditting=false;

    } else if (this.count > 0) {
      this.isClicked = false;
      this.isDeleting = false;
      this.isSelectedStudent = true;
    } else {
      this.isDeleting = false;
      this.isEditting = false;
    }
    return this.count;
  }

  public clearStudentDetails() {
    this.firstname = '';
    this.lastname = '';
    this.admission = '';
    this.form = '';
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscriptions => subscriptions.unsubscribe())
  }

  ngOnInit(): void {
    this.subscriptions.push(this.service.getStudents().subscribe(val =>
      this.students = val
    ));
  }
}
