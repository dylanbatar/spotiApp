import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/spotify.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {
  datos: any = {};
  tracks: any;
  loading: boolean;
  constructor(private _spotify: SpotifyService, private activedRoute: ActivatedRoute) {
    this.activedRoute.params.subscribe((parametro) => {
      this.getArtista(parametro['termino']);
    });
  }

  getArtista(id: string) {
    this.loading = true;
    this._spotify.getArtista(id).subscribe((resp) => {
      this.datos = resp;
    this._spotify.getTopTrack(id).subscribe( resp => {
        this.tracks = resp;
        this.loading = false;
        console.log(this.tracks);
      });
    });
  }
}
