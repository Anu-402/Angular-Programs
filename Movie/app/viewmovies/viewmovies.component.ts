import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movie.service';

import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie';


@Component({
  selector: 'app-viewmovies',
  templateUrl: './viewmovies.component.html',
  styleUrls: ['./viewmovies.component.css']
})
export class ViewmoviesComponent implements OnInit {

 
   arr : Observable<Movie[]>;

  constructor(private route: ActivatedRoute,private service : MoviesService,private router: Router )
  {
    }


  ngOnInit(): void {

    this.arr=this.service.findAllMovies();
  }

  add(){
    this.router.navigate(['add']);
  }
}
