import { Injectable } from '@angular/core';
import { DateFxnsService } from './date-fxns.service';
import { FirebaseService } from './firebase.service';

@Injectable()
export class StockCalcService {
  daySum: any;

  constructor(
    private date: DateFxnsService,
    private firebaseService: FirebaseService
  ) { }

  makeSum( op, data) {
    this.firebaseService.getById('daysum', data.name).subscribe(daySum => {
      this.daySum = daySum;
    });
    if (op === 'addStock') {
      if (this.daySum.name) {
        data.date = this.date.formatDate();
        data.balcost += this.daySum.balcost;
        data.balvol += this.daySum.balvol;

        this.firebaseService.updateSum(data);
      } else {
        this.firebaseService.updateSum(data);
      }
    } else if (op == 'sellStock') {
      if (this.daySum.name) {
        data.date = this.date.formatDate();
        data.balcost -= this.daySum.balcost;
        data.balvol -= this.daySum.balvol;

        this.firebaseService.updateSum(data);
      } else {
        this.firebaseService.updateSum(data);
      }
    }
  }

}
