import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceOrderComponent } from './place-order/place-order.component'
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  { path: 'placeOrder/:customerid', component: PlaceOrderComponent},
  { path: 'cart/:customerid', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PlaceOrderComponent, CartComponent]
