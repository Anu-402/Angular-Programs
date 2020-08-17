import { Component, OnInit } from '@angular/core';
import { Test } from '../tests';
import { TestService } from '../test.service';
import { Center } from 'src/center';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewtest',
  templateUrl: './viewtest.component.html',
  styleUrls: ['./viewtest.component.css']
})
export class ViewtestComponent implements OnInit {

  arr:Test[]=[];
  test:Test=new Test();
  center:Center=new Center();
    constructor(private service : TestService, private router :Router)
    {
      service.findAllTests().subscribe( data =>{this.arr = data.body;
        console.log(data);
      })
    }
  ngOnInit(): void {
  }
   addTest()
   {
    this.router.navigate(['add']);
  }
  deleteTest(testId: number) {
    this.service.deleteTest(testId).subscribe(data => this.test=data);
    this.service.findAllTests().subscribe(data=>this.arr=data.body);
   }
   updateTest(id)
   {
     this.router.navigate(['update',id]);
   }    
   logout(){
    let str = sessionStorage.getItem("user");
    console.log(str);
    alert( str+" Logout Success");
    this.router.navigate(['login']);
    sessionStorage.clear();
  }
}
