import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewcartComponent } from './viewcart/viewcart.component';


const routes: Routes = [
  {
    path:"view",
    component:ViewcartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
