import { Component, OnInit } from '@angular/core';
import { Product } from 'src/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
arr:Product[]=[];
product:Product=new Product();
  constructor(private service : ProductService)
  {
    service.getAllProducts().subscribe( data =>{this.arr = data.body;
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

}
