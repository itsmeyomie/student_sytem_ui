import { Component } from '@angular/core';
import { DeleteStudentService } from './delete-student.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']

})



export class DeleteStudentComponent {
constructor(private deleteService:DeleteStudentService){}

deleteAll() {
this.deleteService.deleteAll().subscribe()

}

}
