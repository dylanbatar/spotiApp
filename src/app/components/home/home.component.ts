import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent{
  newSongs: any;
  constructor(private _spotify: SpotifyService) {
    // obtener las canciones del servicio de spotify
    this._spotify.getNuevaMusica()
                .subscribe((resp: any ) => {
                  this.newSongs = resp;
                  console.log(this.newSongs);
                });
  }
}
