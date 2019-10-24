import { Component, OnInit } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  movie: Movie = { 
    name: null,
    year: null,
    description: null,
    genre: null
  };
  constructor(private moviesService: MoviesService) {
    
   }

  ngOnInit() {
  }

  saveMovie(){
    this.moviesService.save(this.movie).subscribe((data) =>{
      alert('Egresado Guardado');
      console.log(data);
    }, (error)=>{
      console.log(error);
      alert('ocurrio un error');
    });
  }
}
