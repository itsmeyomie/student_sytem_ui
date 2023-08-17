import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Student } from '../students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  public getStudents(): Observable<Student[]> {
    const url = "http://localhost:8080/students"
    return this.http.get<Student[]>(url);
  }
  public deleteStudent(studentId: number): Observable<void> {
    const url = `http://localhost:8080/student/${studentId}`
    return this.http.delete<void>(url)
  }
  public addStudent(student: Student): Observable<Student> {
    const url = "http://localhost:8080/student"
    return this.http.post<Student>(url, student)
  }

  public editStudent(student: Student): Observable<Student> {
    const url = `http://localhost:8080/student/${student.studentId}`
    return this.http.put<Student>(url, student);
  }
}
