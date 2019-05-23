import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  resultados: any;
  loading: boolean;
  alert: boolean;
  error: object;
  constructor(private _spotify: SpotifyService) { }

  buscar(termino: string) {
    this.loading = true;
    this._spotify.getResultados(termino)
      .subscribe((resp: any) => {
        this.loading = false;
        this.resultados = resp;
        console.log(this.resultados);
      }, (err) => {
        this.alert = true;
        this.error = err['error'].error.message;
      });
  }
}
