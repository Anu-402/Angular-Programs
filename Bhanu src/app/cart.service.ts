import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartInformation } from './CartInformation';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  url="http://localhost:9090/bookstore/viewcartbycustomerid/"
  constructor(private http : HttpClient) { }

  viewCartByCustomerId(customerId:number) : Observable<HttpResponse<CartInformation[]>>
  {
      return this.http.get<CartInformation []>(`${this.url}/${customerId}`,{ observe: 'response' });
  }
  removeCartItem(cartId : number) : Observable<any>
 {
   console.log("Id="+cartId);
   return this.http.delete("http://localhost:9090/removecartitem/"+cartId);
 }
}

