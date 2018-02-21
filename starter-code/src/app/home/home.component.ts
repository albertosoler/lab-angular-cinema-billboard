import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MoviesService]
})
export class HomeComponent implements OnInit {
  movies:Array<object>
  constructor(public themovies:MoviesService) { }

  ngOnInit() {
   this.movies = this.themovies.getMovies();
   console.log(this.movies)
  }
   
  }


