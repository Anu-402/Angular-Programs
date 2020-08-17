import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { TestService } from './test.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private router:Router,private service:TestService) { }
  canActivate(route: ActivatedRouteSnapshot ){

    let flag = false ;
    let user = sessionStorage.getItem("user");

    if( user )
    {
        flag=true;
    }
    return flag ;


}

}
