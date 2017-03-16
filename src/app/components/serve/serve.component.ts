import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../service/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-serve',
  templateUrl: './serve.component.html',
  styleUrls: ['./serve.component.css']
})
export class ServeComponent implements OnInit {
  available: any;

  constructor(
    private firebaseService:FirebaseService
  ) { }

  ngOnInit() {
    this.firebaseService.getAll('availablestock').subscribe(available => {
      this.available = available;
    });
  }
}
