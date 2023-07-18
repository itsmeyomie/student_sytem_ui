import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMarksComponent } from './edit-marks.component';

describe('EditMarksComponent', () => {
  let component: EditMarksComponent;
  let fixture: ComponentFixture<EditMarksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMarksComponent]
    });
    fixture = TestBed.createComponent(EditMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
