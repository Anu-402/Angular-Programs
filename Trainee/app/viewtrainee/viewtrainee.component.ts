import { Component, OnInit } from '@angular/core';
import { Trainee } from '../trainee';
import { TraineeService } from '../trainee.service';

@Component({
  selector: 'app-viewtrainee',
  templateUrl: './viewtrainee.component.html',
  styleUrls: ['./viewtrainee.component.css']
})
export class ViewtraineeComponent implements OnInit {
arr:Trainee[]=[];
trainee:Trainee=new Trainee();
  constructor(private service : TraineeService)
  {
    service.getAllTrainees().subscribe( data =>{this.arr = data.body;
    console.log(data);
    })
  }
  ngOnInit(): void {
  }

}
