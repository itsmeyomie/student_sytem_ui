import { Component, OnDestroy } from '@angular/core';
import { Student } from '../students';
import { AddStudentService } from './add-student.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnDestroy  {
  fname!: string;
  sname!: string;
  admission!: string;
  form!: string;

  private addStudentSubscription: Subscription = new Subscription();

  constructor(private addService: AddStudentService) { }
  ngOnDestroy(): void {
    if(this.addStudentSubscription){
      this.addStudentSubscription.unsubscribe();
    }
  }


  student: Student = {
    id: 0,
    firstName: '',
    lastName: '',
    form: '',
    admissionNumber: ''
  }


  public addStudent() {
    this.student.firstName = this.fname
    this.student.lastName = this.sname
    this.student.admissionNumber = this.admission
    this.student.form = this.form

    return this.addStudentSubscription.add(this.addService.addStudent(this.student).subscribe(value =>
      this.student = value)
    )

  }

}
