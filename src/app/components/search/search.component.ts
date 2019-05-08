import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {
  resultados: any;
  constructor(private _spotify: SpotifyService) { }

  buscar(termino: string){
    this._spotify.getResultados(termino)
                 .subscribe((resp: any) => {
                  this.resultados = resp.artists.items;
                  console.log(this.resultados);
                 });
  }
}
