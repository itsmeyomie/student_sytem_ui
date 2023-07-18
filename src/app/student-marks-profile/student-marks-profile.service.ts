import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marks } from '../marks';

@Injectable({
  providedIn: 'root'
})
export class StudentMarksProfileService {

  constructor(private http: HttpClient) { }

  public viewMarks(studentId: number): Observable<Marks> {
    const url = `http://localhost:8080/marks/${studentId}`;  
    return this.http.get<Marks>(url);
  }
}


