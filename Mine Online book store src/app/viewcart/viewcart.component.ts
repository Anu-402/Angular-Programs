import { Component, OnInit } from '@angular/core';
import { CartInformation } from 'src/CartInformation';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { BookInformation } from 'src/BookInformation';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {
arr:CartInformation[]=[];
customerId:number;
cartId:number;
cart:CartInformation=new CartInformation();
book:BookInformation=new BookInformation();
  constructor(private service : CartService, private router :Router) 
  {
    service.viewCartByCustomerId(this.customerId).subscribe( data =>{this.arr = data.body;
      console.log(data);
    })
   }

  ngOnInit(): void {
  }
  removeCartItem(cartId: number) {
    this.service.removeCartItem(cartId).subscribe(data => this.cart=data);
    this.service.viewCartByCustomerId(this.customerId).subscribe(data=>this.arr=data.body);
   }
}
