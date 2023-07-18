import { TestBed } from '@angular/core/testing';

import { AddMarksService } from './add-marks.service';

describe('AddMarksService', () => {
  let service: AddMarksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddMarksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
