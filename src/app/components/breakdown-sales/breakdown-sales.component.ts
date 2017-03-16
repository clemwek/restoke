import { Component, OnInit } from '@angular/core';
import { DateFxnsService } from '../../service/date-fxns.service';
import { FirebaseService } from '../../service/firebase.service';

@Component({
  selector: 'app-breakdown-sales',
  templateUrl: './breakdown-sales.component.html',
  styleUrls: ['./breakdown-sales.component.css']
})
export class BreakdownSalesComponent implements OnInit {
  userDets: any;

  constructor(
    private firebase: FirebaseService,
    private dateService: DateFxnsService
  ) { }

  ngOnInit() {
    this.firebase.getAllUserSales().subscribe(userDets => {
      this.userDets = userDets;
    });
  }

}
