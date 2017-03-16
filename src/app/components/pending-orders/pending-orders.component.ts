import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../service/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.css']
})
export class PendingOrdersComponent implements OnInit {
  order: any;
  retOrder: any;
  unpaid: any;

  constructor(
    private firebaseService:FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.firebaseService.getAllForUser(this.firebaseService.uid, 'order').subscribe(order => {
      this.order = order;
    });
  }

  makeDelivery(id) {
    // this.firebaseService.getOrderById(id).subscribe(retOrder => {
    //   console.log(retOrder);
    //   this.retOrder = retOrder;
    // });
    // this.firebaseService.saveToUnpaid(this.retOrder);
    // this.firebaseService.deleteEntry(this.retOrder.$key);

    this.firebaseService.getUserById(this.firebaseService.uid, 'order', id).subscribe(retOrder => {
      this.retOrder = retOrder;
    });
    this.firebaseService.saveToUser(this.firebaseService.uid, 'unpaid', this.retOrder);
    this.firebaseService.removeUserEntry(this.firebaseService.uid, 'order', this.retOrder.$key);

    this.router.navigate(['serve']);
  }

}
