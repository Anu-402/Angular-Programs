import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartInformationServiceService {
url="http://localhost:9090/bookstore/removecartitem";
url1="http://localhost:9090/bookstore/clearcartbycustomerid";
  constructor(private http: HttpClient) { }
  
  viewCartByCustomerId(customerid:number): Observable<any> {
    return this.http.get('http://localhost:9090/bookstore/viewcartbycustomerid/'+customerid);
  }
  removecartItem(cartId : number) : Observable<any>
 {
   console.log("Id="+cartId);
   return this.http.delete(`${this.url}/${cartId}`, { responseType: 'text' });
 }
 clearCartByCustomerId(customerId : number) : Observable<any>
 {
   console.log("Id="+customerId);
   return this.http.delete(`${this.url1}/${customerId}`, { responseType: 'text' });
 }
}
