import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url ="http://localhost:9090/product/" ;

  constructor(private http : HttpClient ) {
  }
  getAllProducts() : Observable<HttpResponse<Product[]>>
  {
      return this.http.get<Product []>(this.url,{ observe: 'response' });
  }

  deleteProductsById(productId : number) : Observable<Product>
  {
    console.log(" Id = "+productId);
    return this.http.delete<Product>("http://localhost:9090/product/"+productId);
  }
  addProduct(product : Product ) : Observable<Product>
  {
    console.log("Service : "+product.productId);
    return this.http.post<Product>("http://localhost:9090/product",product);
  }

}