import { ShowmovieComponent } from './components/showmovie/showmovie.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
   redirectTo: 'movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    children: [
      {
        path: '',
        component: MoviesComponent
      },
      {

          path: ':id', //passando :id como parametro
           component: ShowmovieComponent

      }
    ]

    },
  {
    path: 'add-movie',
     component: AddMovieComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
