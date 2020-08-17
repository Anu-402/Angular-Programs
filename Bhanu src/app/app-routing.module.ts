import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewcartComponent } from './viewcart/viewcart.component';

const routes: Routes = [
  {
    path:"viewdetail",
    component:ViewcartComponent
  }
  // {
  //   path : '',
  //   redirectTo : '/view',
  //   pathMatch : 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
