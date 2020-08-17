import { Component, OnInit } from '@angular/core';
import { Trainee } from '../trainee';
import { TraineeService } from '../trainee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletetrainee',
  templateUrl: './deletetrainee.component.html',
  styleUrls: ['./deletetrainee.component.css']
})
export class DeletetraineeComponent implements OnInit {
trainee:Trainee=new Trainee();
temp:Trainee[]=[];
  constructor(private service:TraineeService, private router :Router
    ) { }

  ngOnInit(): void {
  }
  delete(traineeId : number)
  {
    this.service.deleteTraineeById(traineeId).subscribe(data=>this.trainee=data);
    this.service.getAllTrainees().subscribe( data => this.temp=data.body);
    this.router.navigate(['/view']);
  }
}
