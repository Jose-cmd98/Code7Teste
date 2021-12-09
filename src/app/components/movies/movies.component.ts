import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


import { Movie } from './../../models/movies.model';
import { MoviesService } from './../../service/movies.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  public sort!: string;

  //array de filmes
  movie!: any[];

  constructor(private service:MoviesService, private router:Router) { }

  ngOnInit(): void {
    //faz chamada assync do array de filmes
    this.service.all().subscribe((filmes: Movie[]) => {
      this.movie = filmes;
    })
  }

  //futura implementacao de busca por id do filme
  open(id: number): void{
    this.router.navigate(['movies/', id]);
  }

}
