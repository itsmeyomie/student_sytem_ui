import { TestBed } from '@angular/core/testing';

import { StudentMarksProfileService } from './student-marks-profile.service';

describe('StudentMarksProfileService', () => {
  let service: StudentMarksProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentMarksProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
