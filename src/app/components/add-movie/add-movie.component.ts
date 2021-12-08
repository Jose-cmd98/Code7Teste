import { Router } from '@angular/router';
import { MoviesService } from './../../service/movies.service';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Movie } from 'src/app/models/movies.model';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {



  cadastro!: FormGroup;

  public nome!: string;
  public ano!: number;
  public diretor!: string;
  public genero!: string;
  public descricao!: string;
  public poster!: string;


  constructor(private fb: FormBuilder, private service: MoviesService, private router: Router) { }



  //form control usado para fazer a validação dos campos do form
  ngOnInit(): void {
    this.cadastro = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(500)]],
      poster: ['', Validators.required],
      ano: ['', Validators.required],
      diretor: ['',Validators.required],
      descricao: ['', Validators.required],
      genero: ['', Validators.required]
    })
  }

  //submit do form, const criado para fazer referencia aos dados do model.
  submit(): void{
    console.log('funcionando!');
    const dadosEmitidos: Movie = {
      nome: this.nome,
      ano: this.ano,
      diretor: this.diretor,
      genero: this.genero,
      descricao: this.descricao,
      poster: this.poster
    };
    //chamada do MovieService junto do metodo adicionar, passo os dados Movie como parametro, faço um subscribe, caso dê certo, ele salva e vai direto pra page movies
    this.service.adicionar(dadosEmitidos).subscribe((resultado) =>{
      this.router.navigateByUrl('movies'); //Para funcionar o metodo adicionar foi necessario dar um id a objeto json do filme
    })

  }
}
