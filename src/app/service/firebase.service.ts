import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {

  // datetime = new Date();
  store: FirebaseListObservable<any[]>;
  daySum: FirebaseListObservable<any[]>;
  available: FirebaseListObservable<any[]>;
  order: FirebaseListObservable<any[]>;
  prodDet: FirebaseObjectObservable<any[]>;
  completeServe: FirebaseListObservable<any[]>;
  unpaid: FirebaseListObservable<any[]>;
  allUserRet: FirebaseListObservable<any[]>;
  retObj: FirebaseObjectObservable<any>;
  retAll: FirebaseListObservable<any[]>;
  total: any;
  record: any;
  folder: any;
  uid: any;

  constructor(
    private af: AngularFire 
  ) { 
    this.af.auth.subscribe(auth => {
      this.uid = auth.uid;
    });
  }

  // Fxns for user
  // this takes in the user id and cat then returns the list
  getAllForUser(uid, loc) {
    this.allUserRet = this.af.database.list('/users/'+uid+'/'+loc) as FirebaseListObservable<any[]>
    return this.allUserRet;
  }

  getAllForSarved(uid, date) {
    this.allUserRet = this.af.database.list('/users/'+uid+'/served/'+date) as FirebaseListObservable<any[]>
    return this.allUserRet;
  }

  addUserOrder(uid, order) {
    let refOrder = firebase.database().ref('/users/'+uid).child('/order');
    refOrder.push(order);
  }

  getUserById(uid, loc, id) {
    this.prodDet = this.af.database.object('/users/'+uid+'/'+loc+'/'+id) as FirebaseObjectObservable<any>;
    return this.prodDet;
  }

  saveToUser(uid, loc, data) {
    let refUnpaid = firebase.database().ref('/users/'+uid).child(loc);
    let test = refUnpaid.push(data);
  }

  saveToUserServed(uid, date, data) {
    let refUnpaid = firebase.database().ref('/users/'+uid+'/served').child(date);
    let test = refUnpaid.push(data);
  }

  getUserTotal(uid, date, name) {
    this.total = this.af.database.object('/record/usersTotals/'+uid+'/'+date+'/'+name) as FirebaseObjectObservable<any>;
    return this.total;
  }

  // saveToRecordUserTotal(uid, date, data) {
  //   this.getUserTotal(uid, date, data.name).subscribe(record => {
  //     console.log(record);
  //     this.record = record;
  //   });
  //   console.log(this.record);
  //   if (this.record.name) {
  //     data.volume += this.record.volume;
  //     data.cost = (data.cost * data.volume) + this.record.cost;
  //   } else {
  //     data.cost = (data.cost * data.volume);
  //   }
  //   data.table = null;
  //   console.log(data);
  //   let refUnpaid = firebase.database().ref('/record/usersTotals/'+uid+'/'+date).child(data.name);
  //   let test = refUnpaid.set(data);
  // }

  saveToRecordUserServed(uid, date, data) {
    let refUnpaid = firebase.database().ref('/record/users/'+uid).child(date);
    let test = refUnpaid.push(data);
  }

  removeUserEntry(uid, loc, id) {
    let refDel = firebase.database().ref('/users/'+uid+'/'+loc);
    refDel.child(id).remove();
  }

  //get user uid
  // const storeRef = firebase.database().ref();

  
  // get all for the store
  getAll(loc) {
    this.retAll = this.af.database.list('/store/'+loc) as FirebaseListObservable<any[]>
    return this.retAll;
  }  

  getStore() {
    this.store = this.af.database.list('/store') as FirebaseListObservable<Stores[]>
    return this.store;
  }

  getDaySum() {
    this.daySum = this.af.database.list('/store/daysum') as FirebaseListObservable<any[]>
    return this.daySum;
  }

  getAvailable() {
    this.available = this.af.database.list('/store/availablestock') as FirebaseListObservable<any[]>
    return this.available;
  }

  getOrder() {
    this.order = this.af.database.list('/store/order') as FirebaseListObservable<any[]>
    return this.order;
  }

  getUnpaid() {
    this.unpaid = this.af.database.list('/store/unpaid') as FirebaseListObservable<any[]>
    return this.unpaid;
  }

  getCompleteServe () {
    this.completeServe = this.af.database.list('/store/completeServe') as FirebaseListObservable<any[]>
    return this.completeServe;
  }

  getProdDet(id) {
    this.prodDet = this.af.database.object('/store/availablestock/'+id) as FirebaseObjectObservable<any>;
    return this.prodDet;
  }

  addOrder(order) {
    let refOrder = firebase.database().ref('/store').child('/order');
    let test = refOrder.push(order);
  }

  getOrderById(id) {
    this.prodDet = this.af.database.object('/store/order/'+id) as FirebaseObjectObservable<any>;
    return this.prodDet;
  }

  getById(loc, id) {
    this.retObj = this.af.database.object('/store/'+loc+'/'+id) as FirebaseObjectObservable<any>;
    return this.retObj;
  }

  saveToUnpaid(retOrder) {
    let refUnpaid = firebase.database().ref('/store').child('unpaid');
    let test = refUnpaid.push(retOrder);
  }

  saveStore(loc, data) {
    let refUnpaid = firebase.database().ref('/store').child(loc);
    let test = refUnpaid.push(data);
  }

  saveRecord(loc, data) {
    let refUnpaid = firebase.database().ref('/record').child(loc);
    let test = refUnpaid.push(data);
  }

  deleteEntry(id) {
    let refDel = firebase.database().ref('/store/order');
    refDel.child(id).remove();
  }

  removeEntry(loc, id) {
    let refDel = firebase.database().ref('/store/'+loc);
    refDel.child(id).remove();
  }

  //===============================================================//
                        //Manage//
  //===============================================================//
  addStock(data) {
    let refUnpaid = firebase.database().ref('/store/availablestock').child(data.name);
    refUnpaid.set(data);
  }
  
  updateSum(data) {
    let refUnpaid = firebase.database().ref('/store/daysum').child(data.name);
    refUnpaid.set(data);
  }

  getAllUserSales() {
    this.allUserRet = this.af.database.list('/record/users/') as FirebaseListObservable<any[]>
    return this.allUserRet;
  }

}

interface Stores {
  $key?: String;
  stockign: any;
  stockout: any;
  daysum: any;
  user: any;
}