import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../students';

@Injectable({
  providedIn: 'root'
})
export class DeleteStudentService {

  constructor(private http: HttpClient) { }

  public deleteAll(): Observable<any> {
    const url = "http://localhost:8080/students"
    return this.http.delete<any>(url)
  }

}