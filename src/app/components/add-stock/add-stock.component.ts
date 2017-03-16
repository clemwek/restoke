import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../service/firebase.service';
import { DateFxnsService } from '../../service/date-fxns.service';
import { StockCalcService } from '../../service/stock-calc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {
  stockName: string;
  stockVolume: number;
  stockCost: number;

  constructor(
    private firebaseService: FirebaseService,
    private stockCal: StockCalcService,
    private dateService: DateFxnsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addNewStock() {
    let newStock = {
      name: this.stockName,
      volume: this.stockVolume,
      cost: this.stockCost
    }

    let data = {
      name: this.stockName,
      date: this.dateService.formatDate(),
      costin: this.stockCost,
      volin: this.stockVolume,
      costout: 0,
      volout: 0,
      balcost: (this.stockVolume*this.stockCost),
      balvol: this.stockVolume 
    }

    this.firebaseService.addStock(newStock);
    this.stockCal.makeSum( 'addStock', data);
    console.log("this is working ok");

    this.router.navigate(['manage']);
  }

}
