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
  //variavel do tipo Movie(model)
  movie!: Movie;

  constructor(private ActivatedRoute: ActivatedRoute, private service: MoviesService) { }

  ngOnInit(): void {
   this.show(this.ActivatedRoute.snapshot.params['id']);
  }
  //FUTURA IMPLEMENTACAO
  private show(id: number){
    this.service.show(id).subscribe((movie:Movie) => {
      this.movie = movie;
    })
  }
}
