import { Component, OnInit } from '@angular/core';
import { Test } from '../tests';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../test.service';
import { Center } from 'src/center';

@Component({
  selector: 'app-updatetest',
  templateUrl: './updatetest.component.html',
  styleUrls: ['./updatetest.component.css']
})
export class UpdatetestComponent implements OnInit {
id:number;
test:Test=new Test();
center:Center=new Center();
submitted=false;
  constructor(privateroute:ActivatedRoute,private router:Router,private testService:TestService) { }

  ngOnInit(): void {
  }
updateTest(){
  console.log(this.test);
  this.testService.updateTest(this.test).subscribe(data=>console.log(data), error=>console.log(error));
  this.test=new Test();
  this.router.navigate(['/view']);
}

  

}
