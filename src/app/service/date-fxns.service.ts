import { Injectable } from '@angular/core';

@Injectable()
export class DateFxnsService {
  date: any;
  dateString: string;

  constructor(
    // date = new Date()
  ) { }

  formatDate() {
    this.date = new Date();

    this.dateString = (this.date.getMonth() + 1) + "/" + this.date.getDate() + "/" + this.date.getFullYear().toString();

    return this.dateString;
  }

  formatDateString() {
    this.date = new Date();

    this.dateString = String((this.date.getMonth() + 1)) + String(this.date.getDate()) + this.date.getFullYear().toString();

    return this.dateString;
  }

}
