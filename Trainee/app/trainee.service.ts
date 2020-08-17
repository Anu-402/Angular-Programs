import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trainee } from './trainee';
@Injectable({
  providedIn: 'root'
})
export class TraineeService {
url="http://localhost:9090/trainee";
constructor(private http : HttpClient ) {

}
getAllTrainees() : Observable<HttpResponse<Trainee[]>>
{
    return this.http.get<Trainee []>(this.url,{ observe: 'response' });
}

deleteTraineeById(traineeId : number) : Observable<Trainee>
{
  console.log(" Id = "+traineeId);
  return this.http.delete<Trainee>("http://localhost:9090/trainee/"+traineeId);
}

findTraineeById(traineeId : number) : Observable<Trainee>
{
  console.log(" Id = "+traineeId);
  return this.http.get<Trainee>("http://localhost:9090/trainee/"+traineeId);
}

addTrainee(trainee : Trainee ) : Observable<Trainee>
{
  console.log("Service : "+trainee.traineeId);
  return this.http.post<Trainee>("http://localhost:9090/trainee",trainee);
}
updateTrainee(id: number, value: any): Observable<Object> {
  return this.http.put(`${this.url}/${id}`, value);
}
}

