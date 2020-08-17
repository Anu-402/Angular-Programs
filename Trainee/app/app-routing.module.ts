import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddtraineeComponent } from './addtrainee/addtrainee.component';
import { DeletetraineeComponent } from './deletetrainee/deletetrainee.component';
import { ViewtraineeComponent } from './viewtrainee/viewtrainee.component';
const routes: Routes = [
  {
    path :'add',
    component:AddtraineeComponent
  },
  {
     path:"delete",
    component:DeletetraineeComponent
    
  },
  {
    path:"view",
    component:ViewtraineeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
