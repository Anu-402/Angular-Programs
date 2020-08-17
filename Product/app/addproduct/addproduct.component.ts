import { Component, OnInit } from '@angular/core';
import { Product } from 'src/product';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
product:Product=new Product();
temp:Product=new Product();
  constructor(private service : ProductService
    ,private router:Router) { }

  ngOnInit(): void {
  }
addProduct()
{
  this.service.addProduct(this.product).subscribe(data=>this.temp=data)
  this.router.navigate(['/view']);
}
}
