import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../service/firebase.service';
import { DateFxnsService } from '../../service/date-fxns.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-add-sold',
  templateUrl: './add-sold.component.html',
  styleUrls: ['./add-sold.component.css']
})
export class AddSoldComponent implements OnInit {
  id: any;
  volume: any;
  table: any;
  prodDet: any;
  order: any;
  uid: any = 'test';

  name: string;
  cost: number;
  // total: number;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private date: DateFxnsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getProdDet(this.id).subscribe(prodDet => {
      this.prodDet = prodDet;
    });

    this.name = this.prodDet.name;
    this.cost = this.prodDet.cost;
    // this.total = this.cost * this.volume;
  }


  submitOrder () {
    let order = {
      date: this.date.formatDate(),
      name: this.prodDet.name,
      uid: this.firebaseService.uid,
      cost: this.prodDet.cost,
      table: this.table,
      volume: this.volume    
    }
    
    this.firebaseService.addOrder(order);
    this.firebaseService.addUserOrder(this.firebaseService.uid, order);

    this.router.navigate(['serve']);

  }
}
