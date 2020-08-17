import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {

  arr : Employee [] =[];
  emp : Employee = new Employee();
  constructor(private service : EmployeeService)
  {
    //service.getAllEmployees().subscribe( data =>this.arr=data);
    service.getAllEmployees().subscribe( data =>{this.arr = data.body;
    console.log(data);
    })
  }

  delete(employeeId : number)
  {
    this.service.deleteEmployeeById(employeeId).subscribe(data=>this.emp=data);
    //this.service.getAllEmployees().subscribe( data => this.arr=data);
    this.service.getAllEmployees().subscribe( data => this.arr=data.body);
  }

  ngOnInit(): void {
  }

}
