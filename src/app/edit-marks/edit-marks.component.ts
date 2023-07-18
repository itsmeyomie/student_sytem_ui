import { Component, OnDestroy, OnInit } from '@angular/core';
import { EditMarksService } from './edit-marks.service';
import { Marks } from '../marks';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-marks',
  templateUrl: './edit-marks.component.html',
  styleUrls: ['./edit-marks.component.css']
})
export class EditMarksComponent implements OnInit, OnDestroy {
  marksId!: number;
  chemistry!: number;
  english!: number;
  maths!: number;

  constructor(private editMarksService: EditMarksService) { }

  private editMarksSubscription:Subscription=new Subscription()

  ngOnDestroy(): void {
    if (this.editMarksSubscription) {
      this.editMarksSubscription.unsubscribe()
    }
  }

  ngOnInit(): void {

  }

  updateMarks(): void {
    this.editMarksService.patchMarks(this.marksId, this.chemistry, this.english, this.maths)
      .subscribe(
        (response: Marks) => {
          console.log('Marks updated successfully:', response);

        }
      );
  }
}
