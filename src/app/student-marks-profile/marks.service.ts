import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Marks } from '../marks';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarksService {

  constructor(private http: HttpClient) { }

  public addMarks(marks: Marks): Observable<Marks> {
    const url = "http://localhost:8080/marks"
    return this.http.post<Marks>(url, marks)
  }
  public deleteMarks(marksId: number): Observable<void> {
    const url = `http://localhost:8080/marks/${marksId}`;
    return this.http.delete<void>(url);
  }

  public editMarks(marks: Marks): Observable<Marks> {
    const url = `http://localhost:8080/marks/${marks.studentId.studentId}`;
    return this.http.put<Marks>(url, marks);
  }
  public viewMarks(studentId: number): Observable<Marks> {
    const url = `http://localhost:8080/marks/${studentId}`;  
    return this.http.get<Marks>(url);
  }
  
}
