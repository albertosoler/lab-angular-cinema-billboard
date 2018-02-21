import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})


export class MovieComponent implements OnInit {
  id:number;
  movies:any;
  constructor(public route:ActivatedRoute, public movieSample:MoviesService) {
    this.route.params.subscribe( p => {
      this.id = p.id;
    });
  }

  ngOnInit() {
    this.movies = this.movieSample.getMovie(this.id);
  }

}
