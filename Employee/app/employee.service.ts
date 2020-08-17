import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Employee } from './employee';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url ="http://localhost:9090/employee/" ;

  constructor(private http : HttpClient ) {

  }

  /* getAllEmployees() : Observable<Employee[]>
  {
      return this.http.get<Employee []>(this.url);
  } */

  getAllEmployees() : Observable<HttpResponse<Employee[]>>
  {
      return this.http.get<Employee []>(this.url,{ observe: 'response' });
  }

  deleteEmployeeById(employeeId : number) : Observable<Employee>
  {
    console.log(" Id = "+employeeId);
    return this.http.delete<Employee>("http://localhost:9090/employee/"+employeeId);
  }

  findEmployeeById(employeeId : number) : Observable<Employee>
  {
    console.log(" Id = "+employeeId);
    return this.http.get<Employee>("http://localhost:9090/employee/"+employeeId);
  }

  addEmployee(employee : Employee ) : Observable<Employee>
  {
    console.log("Service : "+employee.employeeId);
    return this.http.post<Employee>("http://localhost:9090/employee",employee);
  }





}
