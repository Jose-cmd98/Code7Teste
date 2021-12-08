import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; //import do httpClient
import { Movie } from '../models/movies.model';   //Import do modelo movie
import { Observable } from 'rxjs'; // import do Observable (assync)


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  //array dos dados do json
  listaFilmes = [];

  // conectando apiRest
  private url = 'http://localhost:3000/movies'

  constructor(private httpClient: HttpClient) {
    this.listaFilmes = [];
   }
   //retorna o array de filmes
   get filmes(){
     return this.listaFilmes;
   }
   //chamada assync retornando a interface que retorna a chamada http
   all():Observable<Movie[]>{
     return this.httpClient.get<Movie[]>(this.url)
   }
   //metodo post assync
   adicionar(movie: any): Observable<Movie>{
     return this.httpClient.post<Movie>(this.url, movie)
   }


   //Retorna a mesma chamada do (all) porem, passando o (id) como parametro
   show(id: number): Observable<Movie>{
     return this.httpClient.get<Movie>(this.url)
   }
}
