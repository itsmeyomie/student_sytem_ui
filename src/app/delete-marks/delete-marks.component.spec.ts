import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMarksComponent } from './delete-marks.component';

describe('DeleteMarksComponent', () => {
  let component: DeleteMarksComponent;
  let fixture: ComponentFixture<DeleteMarksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteMarksComponent]
    });
    fixture = TestBed.createComponent(DeleteMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
