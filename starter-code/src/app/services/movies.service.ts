import { Injectable } from '@angular/core';
import movies from "../../sample-movies";

interface Movies{
    id:Number,
    title:String,
    poster:String,
    synopsis:String,
    genres:Array<String>,
    year:Number
    director:String,
    actors:Array<String>,
    hours:Array<String>
    room:Number
}


@Injectable()
export class MoviesService {

 movies: Array<Movies> = movies;
 

    constructor() { }

    getMovie(id):Movies{
        for(let i=0;i<this.movies.length;i++){
            if(this.movies[i].id == id){
                return this.movies[i];
            }
    }
}


    getMovies():Array<Movies>{
        return this.movies;
    }

    
}