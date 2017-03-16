import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { FirebaseService } from './service/firebase.service';
import { DateFxnsService } from './service/date-fxns.service';
import { StockCalcService } from './service/stock-calc.service';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ManageComponent } from './components/manage/manage.component';
import { DailySummaryComponent } from './components/daily-summary/daily-summary.component';
import { AddStockComponent } from './components/add-stock/add-stock.component';
import { EditStockComponent } from './components/edit-stock/edit-stock.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';
import { ServeComponent } from './components/serve/serve.component';
import { AddSoldComponent } from './components/add-sold/add-sold.component';
import { EditSoldComponent } from './components/edit-sold/edit-sold.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PendingPayComponent } from './components/pending-pay/pending-pay.component';
import { PendingOrdersComponent } from './components/pending-orders/pending-orders.component';
import { CompleteServeComponent } from './components/complete-serve/complete-serve.component';
import { BreakdownSalesComponent } from './components/breakdown-sales/breakdown-sales.component';



export const firebaseConfig = {
  apiKey: 'AIzaSyA472HuN2EQlWMQkvr3Qv4u2FzkFXV4CLo',
  authDomain: 'restoke-285ee.firebaseapp.com',
  databaseURL: 'https://restoke-285ee.firebaseio.com',
  storageBucket: 'restoke-285ee.appspot.com',
  messagingSenderId: '30851705741'
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'manage', component: ManageComponent },
  { path: 'serve', component: ServeComponent },
  { path: 'complete_serve', component: CompleteServeComponent },
  { path: 'pending_order', component: PendingOrdersComponent },
  { path: 'addStock', component: AddStockComponent },
  { path: 'breakdown', component: BreakdownSalesComponent },
  { path: 'pending_payment', component: PendingPayComponent },
  { path: 'addSold/:id', component: AddSoldComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ManageComponent,
    DailySummaryComponent,
    AddStockComponent,
    EditStockComponent,
    AddUserComponent,
    EditUserComponent,
    ShowUsersComponent,
    ServeComponent,
    AddSoldComponent,
    EditSoldComponent,
    NavbarComponent,
    PendingPayComponent,
    PendingOrdersComponent,
    CompleteServeComponent,
    BreakdownSalesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    FirebaseService,
    DateFxnsService,
    StockCalcService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
