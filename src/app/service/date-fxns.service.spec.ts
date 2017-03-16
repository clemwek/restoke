import { TestBed, inject } from '@angular/core/testing';

import { DateFxnsService } from './date-fxns.service';

describe('DateFxnsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateFxnsService]
    });
  });

  it('should ...', inject([DateFxnsService], (service: DateFxnsService) => {
    expect(service).toBeTruthy();
  }));
});
