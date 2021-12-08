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
     component: MoviesComponent
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
