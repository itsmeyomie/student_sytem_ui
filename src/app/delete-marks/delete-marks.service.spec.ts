import { TestBed } from '@angular/core/testing';

import { DeleteMarksService } from './delete-marks.service';

describe('DeleteMarksService', () => {
  let service: DeleteMarksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteMarksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
