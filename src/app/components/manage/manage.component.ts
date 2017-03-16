import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../service/firebase.service';
import { DateFxnsService } from '../../service/date-fxns.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  store: any;
  daySum: any;
  data: any;

  constructor(
    private firebaseService:FirebaseService,
    private dateService: DateFxnsService
  ) { }

  ngOnInit() {
    this.firebaseService.getDaySum().subscribe(daySum => {
      this.daySum = daySum;
    });
  }

  testUpdate() {
    this.data = {
      name: 'prodname',
      date: this.dateService.formatDate(),
      costin: 1000,
      volin: 100,
      costout: 300,
      volout: 20,
      balcost: 200,
      balvol: 30 
    }
    console.log('Am super set to go!');

    this.firebaseService.updateSum(this.data);
  }

}
