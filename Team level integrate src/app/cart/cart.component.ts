import { Component, OnInit } from '@angular/core';
import { CartInformationServiceService } from '../services/cart-information-service.service';
import { CartInformation } from '../model/cart-information';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerInformation } from '../model/customer-information';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts:CartInformation[]=[];
  customerid: number;
  i:number=0; quantity:number=0; total: number=0;
  link: string;

  constructor(private route: ActivatedRoute, private cartService: CartInformationServiceService, private router: Router) { }

  ngOnInit(): void {
    this.customerid = this.route.snapshot.params['customerid'];
    console.log(this.customerid);
    this.getCartDetails();
  }
   
  getCartDetails() {
    this.cartService.viewCartByCustomerId(this.customerid)
    .subscribe(data=>{
      this.cartProducts=data;
      console.log(this.cartProducts);     
    });
  }

  updateCart(cartId: number, quantity: number){
    this.cartService.updateCart(cartId,quantity).subscribe(data=>{
      console.log(data);
    });
    alert("Cart Updated Successfully");
      this.getCartDetails();
  }

  removeCartItem(cartId: number) {
    this.cartService.removeCartItem(cartId).subscribe(data =>{console.log(data);
      alert("Item Deleted Successfully");
      this.getCartDetails();
    } );
   }
    
  clearCartByCustomerId()
  {
    this.cartService.clearCartByCustomerId(this.customerid).subscribe(data=>{
      console.log(data);
      alert("Cart Cleared Successfully");
      this.getCartDetails();
    });
  }

  checkOut(){
    this.link= 'placeOrder/'+this.customerid;
    this.router.navigate([this.link]);
  }

  goToHome(){
    this.router.navigate(['home']);
  }
findCustomer(){
  this.cartService.findCustomer(this.customerid).subscribe(data =>{
    console.log(data);
    if(data==""){
      this.router.navigate(['home']);
      alert("Please Login First");
    }
    else
     this.checkOut();
  });
  }
}
