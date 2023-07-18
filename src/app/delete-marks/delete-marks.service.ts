import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteMarksService {

  constructor(private http: HttpClient) { }

  public deleteMarks(studentId: number): Observable<void> {
    const url = `http://localhost:8080/${studentId}`;
    return this.http.delete<void>(url);
  }
}
