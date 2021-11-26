import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserContainerComponent } from "./user-container/user-container.component";
import { OrderContainerComponent } from "./order-container/order-container.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  {path: 'user', component: UserContainerComponent},
  {path: 'order', component: OrderContainerComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule{

}
