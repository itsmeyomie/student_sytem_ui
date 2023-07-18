import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMarksProfileComponent } from './student-marks-profile.component';

describe('StudentMarksProfileComponent', () => {
  let component: StudentMarksProfileComponent;
  let fixture: ComponentFixture<StudentMarksProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentMarksProfileComponent]
    });
    fixture = TestBed.createComponent(StudentMarksProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
