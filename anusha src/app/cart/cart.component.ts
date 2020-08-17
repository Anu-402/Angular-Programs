import { Component, OnInit } from '@angular/core';
import { CustomerInformation } from '../model/customer-information';
import { CartInformation } from '../model/cart-information';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CartInformationServiceService } from '../services/cart-information-service.service';
import { OrderInformation } from '../model/order-information';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // order : OrderInformation;
  products: Observable<CustomerInformation[]>;
  cartProducts:CartInformation[]=[];
  customerid: number;
  i:number=0; quantity:number=0; total: number=0;
  customer: CustomerInformation;
  

  constructor( private http:HttpClient, private route: ActivatedRoute, private cartService: CartInformationServiceService) { }

  ngOnInit(): void {
    this.customerid = this.route.snapshot.params['customerid'];
    console.log(this.customerid);
    this.getCartDetails();
    this.customer = new CustomerInformation();
    this.customer.customerId = this.customerid;
  }
   
  getCartDetails() {
    this.cartService.viewCartByCustomerId(this.customerid)
    .subscribe(data=>{
      this.cartProducts=data;
      console.log(this.cartProducts);
     
     
    });
  }

 
 removecartItem(cartId: number) {
  this.cartService.removecartItem(cartId).subscribe(data =>{console.log(data);
    this.getCartDetails();} );
  //this.service.findAllTests().subscribe(data=>this.arr=data.body);
 }
  
clearCartByCustomerId()
{
  this.cartService.clearCartByCustomerId(this.customerid).subscribe(data=>{
    console.log(data);
    this.getCartDetails();
  });
}

  
}

