import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  {path: 'artista' , component: ArtistaComponent},
  {path: 'search/:termino' , component: SearchComponent},
  {path: 'artista/:termino' , component: ArtistaComponent},
  {path: '' , pathMatch: 'full', redirectTo: 'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
