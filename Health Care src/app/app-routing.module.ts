import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewtestComponent } from './viewtest/viewtest.component';
import { AddtestComponent } from './addtest/addtest.component';
import { UpdatetestComponent } from './updatetest/updatetest.component';
import { LoginComponent } from './login/login.component';
import { AuthguardService } from './authguard.service';



const routes: Routes = [
  {
    path:"add",
    component:AddtestComponent,
    canActivate:[AuthguardService]
  },
  {
    path:"view",
    component:ViewtestComponent
  }
  ,
  {
    path:"update/:id",
    component:UpdatetestComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path : '',
    redirectTo : '/login',
    pathMatch : 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

