import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Student} from '../students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }
  
  public getStudents(): Observable<Student[]> {
    const url = "http://localhost:8080/students"
    return this.http.get<Student[]>(url);
  }
}
