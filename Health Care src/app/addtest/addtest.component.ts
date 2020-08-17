import { Component, OnInit } from '@angular/core';
import { Test } from '../tests';
import { Router } from '@angular/router';
import { TestService } from '../test.service';
import { Center } from 'src/center';

@Component({
  selector: 'app-addtest',
  templateUrl: './addtest.component.html',
  styleUrls: ['./addtest.component.css']
})
export class AddtestComponent implements OnInit {
test:Test=new Test();
center:Center=new Center()
temp:Test=new Test();
submitted=false;
  constructor(private service : TestService
    ,private router:Router) { }

  ngOnInit(): void {
  }
  addTest()
  {
    this.service.addTest(this.test).subscribe(data=>this.temp=data)
     this.router.navigate(['/view']);
  }

}
