import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  url ="http://localhost:9090/movie/" ;

  constructor(private http : HttpClient ) {

  }
 
  findAllMovies() : Observable<Movie[]>
  {
    return this.http.get<Movie []>(`${this.url}`);
  }

  findMovieByGenre(movieGenre : String) : Observable<Movie[]>
  {
    console.log(" Id = "+movieGenre);
    return this.http.get<Movie[]>("http://localhost:9090/movie/"+movieGenre);
  }

  addMovies(movie : Movie ) : Observable<Movie>
  {
    console.log("Service : "+movie.movieId);
    return this.http.post<Movie>("http://localhost:9090/movie/",movie);
  }
}
