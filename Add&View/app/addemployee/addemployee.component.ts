import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  emp : Employee = new Employee();
  temp : Employee = new Employee();
  constructor(private service : EmployeeService) { }

  ngOnInit(): void {
  }

  addEmployee()
  {
    console.log(this.emp);
    this.service.addEmployee(this.emp).subscribe(data=>this.temp=data);
  }
}
