import { TestBed, inject } from '@angular/core/testing';

import { StockCalcService } from './stock-calc.service';

describe('StockCalcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockCalcService]
    });
  });

  it('should ...', inject([StockCalcService], (service: StockCalcService) => {
    expect(service).toBeTruthy();
  }));
});
