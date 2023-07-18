import { TestBed } from '@angular/core/testing';

import { EditMarksService } from './edit-marks.service';

describe('EditMarksService', () => {
  let service: EditMarksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditMarksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
