import { Component } from '@angular/core';
import { DeleteMarksService } from './delete-marks.service';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-delete-marks',
  templateUrl: './delete-marks.component.html',
  styleUrls: ['./delete-marks.component.css']
})
export class DeleteMarksComponent {
  marksId!: number;

  constructor(private deleteMarksService: DeleteMarksService) { }

  private deleteMarksSubscription:Subscription=new Subscription();

  ngOnInit(): void {
   
  }

  deleteMarks(): void {
   this.deleteMarksSubscription.add( this.deleteMarksService.deleteMarks(this.marksId)
      .subscribe());
  }
}