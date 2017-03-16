import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../service/firebase.service';
import { DateFxnsService } from '../../service/date-fxns.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-complete-serve',
  templateUrl: './complete-serve.component.html',
  styleUrls: ['./complete-serve.component.css']
})
export class CompleteServeComponent implements OnInit {
  completeServe: any;

  constructor(
    private dateService: DateFxnsService,
    private firebaseService:FirebaseService
  ) { }

  ngOnInit() {
    this.firebaseService.getAllForSarved(this.firebaseService.uid, this.dateService.formatDateString()).subscribe(completeServe => {
      this.completeServe = completeServe;
    });
  }

}
