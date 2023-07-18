import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marks } from '../marks';

@Injectable({
  providedIn: 'root'
})
export class EditMarksService {

  constructor(private http: HttpClient) { }

 public patchMarks(marksId: number, chemistry: number, english: number, maths: number): Observable<Marks> {
    const url = `http://localhost:8080/${marksId}`;
    const updatedFields = { chemistry, english, maths };
    return this.http.patch<Marks>(url, updatedFields);
  }
}
