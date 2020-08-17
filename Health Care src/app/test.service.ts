import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Test } from './tests';
import { Center } from 'src/center';
import { Login } from './login';
@Injectable({
  providedIn: 'root'
})
export class TestService {
  url="http://localhost:9090/test";
  constructor(private http : HttpClient ) {
  }
  findUserLogin(username: string,password :string) : Observable<Login>{
    return this.http.get<Login >("http://localhost:9090/admin/login/"+username+"/"+password);
  }

  findAllTests() : Observable<HttpResponse<Test[]>>
  {
      return this.http.get<Test []>(this.url,{ observe: 'response' });
  }
  addTest(test : Test ) : Observable<Test>
  {
    return this.http.post<Test>("http://localhost:9090/test",test);
  }
 deleteTest(testId : number) : Observable<any>
 {
   console.log("Id="+testId);
   return this.http.delete(`${this.url}/${testId}`, { responseType: 'text' });
 }
 updateTest(test:Test): Observable<Test> {
  return this.http.put<Test>(`${this.url}` ,test);
}
  }
  

  
  
