import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../service/firebase.service';
import { DateFxnsService } from '../../service/date-fxns.service';
import { StockCalcService } from '../../service/stock-calc.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pending-pay',
  templateUrl: './pending-pay.component.html',
  styleUrls: ['./pending-pay.component.css']
})
export class PendingPayComponent implements OnInit {
  payment: any;
  retPayment: any;

  constructor(
    private firebaseService:FirebaseService,
    private dateService: DateFxnsService,
    private stockCalcService: StockCalcService,
    private router: Router
  ) { }

  ngOnInit() {
    this.firebaseService.getAllForUser(this.firebaseService.uid, 'unpaid').subscribe(payment => {
      this.payment = payment;
    });
  }

  makePayment(id) {
    // this.firebaseService.getById('unpaid', id).subscribe(retPayment => {
    //   this.retPayment = retPayment;
    // });
    // this.firebaseService.saveStore('served', this.retPayment);
    // this.retPayment.date = this.dateService.formatDate();
    // this.firebaseService.saveRecord('served', this.retPayment);
    // this.firebaseService.removeEntry('unpaid', this.retPayment.$key);

    this.firebaseService.getUserById(this.firebaseService.uid, 'unpaid', id).subscribe(retPayment => {
      this.retPayment = retPayment;
    });
    // this.firebaseService.saveToRecordUserTotal(this.firebaseService.uid, this.dateService.formatDateString(), this.retPayment);
    // this.stockCalcService.makeSum( 'sellStock', this.retPayment)
    this.firebaseService.saveToRecordUserServed(this.firebaseService.uid, this.dateService.formatDateString(), this.retPayment);
    this.firebaseService.saveToUserServed(this.firebaseService.uid, this.dateService.formatDateString(), this.retPayment);
    this.firebaseService.removeUserEntry(this.firebaseService.uid, 'unpaid', this.retPayment.$key);

    this.router.navigate(['serve']);
  }

}
