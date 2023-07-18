import { Injectable } from '@angular/core';
import { Student } from '../students';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AddStudentService {

  constructor(private http: HttpClient) { }

  public addStudent(student: Student): Observable<Student> {
    const url = "http://localhost:8080/student"
    return this.http.post<Student>(url, student)
  }

}
