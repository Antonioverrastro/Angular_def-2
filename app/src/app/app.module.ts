import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserContainerComponent } from './user-container/user-container.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserSingleComponent } from './user-single/user-single.component';
import { OrderContainerComponent } from './order-container/order-container.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderSingleComponent } from './order-single/order-single.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    UserContainerComponent,
    UserListComponent,
    UserDetailComponent,
    UserSingleComponent,
    OrderContainerComponent,
    OrderListComponent,
    OrderSingleComponent,
    OrderDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
