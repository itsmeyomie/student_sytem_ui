import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Marks } from '../marks';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddMarksService {

  constructor(private http:HttpClient) { }

  public addmarks(marks:Marks):Observable<Marks>{
  const url="http://localhost:8080/marks"
  alert(marks.chemistry)
  return this.http.post<Marks>(url,marks)
  }

}
