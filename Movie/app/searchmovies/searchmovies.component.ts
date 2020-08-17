import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Movie } from '../movie';
import { MoviesService } from '../movie.service';


@Component({
  selector: 'app-searchmovies',
  templateUrl: './searchmovies.component.html',
  styleUrls: ['./searchmovies.component.css']
})
export class SearchmoviesComponent implements OnInit {

  arr : Movie[]=[];
  movie : Movie = new Movie();
  movies : Observable<Movie[]>;

  constructor(private service : MoviesService) { }
  find(){
    this.movies=this.service.findMovieByGenre(this.movie.movieGenre);
    
  }

  ngOnInit(): void {
    
    
  }

  
}
