import { MoviesService } from './../../service/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movies.model';

@Component({
  selector: 'app-showmovie',
  templateUrl: './showmovie.component.html',
  styleUrls: ['./showmovie.component.scss']
})
export class ShowmovieComponent implements OnInit {

  movie!: Movie;

  constructor(private ActivatedRoute: ActivatedRoute, private service: MoviesService) { }

  ngOnInit(): void {
    const id = this.ActivatedRoute.snapshot.paramMap.get('id'); //const id guarda o metodo get retornando id
    this.service.show(id!).subscribe((movie: Movie) =>{ // usando metodo show do service que faz a chamada da api
      this.movie = movie;                               // e atribuindo movie que recebe Movie(model) ao movie que uso no template
    })
  }

}
