import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddmoviesComponent } from './addmovies/addmovies.component';
import { ViewmoviesComponent } from './viewmovies/viewmovies.component';
import { SearchmoviesComponent } from './searchmovies/searchmovies.component';



const routes: Routes = [
  { path  : 'add',
    component : AddmoviesComponent
  },
  {
    path : 'view',
    component : ViewmoviesComponent
  },
  {
    path : 'search',
    component : SearchmoviesComponent
  },
  {
    path : '',
    redirectTo : '/add',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule { }
