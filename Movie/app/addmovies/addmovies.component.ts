import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie';

@Component({
  selector: 'app-addmovies',
  templateUrl: './addmovies.component.html',
  styleUrls: ['./addmovies.component.css']
})
export class AddmoviesComponent implements OnInit {

  movies : Movie = new Movie();
  temp : Movie = new Movie();
  constructor(private route: ActivatedRoute,private service : MoviesService,private router: Router) { }

  ngOnInit(): void {
  }

  addMovies()
  {
    console.log(this.movies);
    this.service.addMovies(this.movies).subscribe(data=>this.temp=data,error=>alert(error.error.errorMessage));
    alert("Added Succesfully");
    this.router.navigate(['view']);
  }

  searchMovie(){
    this.router.navigate(['search']);
  }

}
