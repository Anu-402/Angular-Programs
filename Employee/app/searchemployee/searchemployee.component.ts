import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-searchemployee',
  templateUrl: './searchemployee.component.html',
  styleUrls: ['./searchemployee.component.css']
})
export class SearchemployeeComponent implements OnInit {

  empid : number = 0;
  employee : Employee = new Employee();
  constructor(private service : EmployeeService) { }

  ngOnInit(): void {
  }

  searchEmployee()
  {
      this.service.findEmployeeById(this.empid).subscribe(data=>this.employee=data);
  }
}
