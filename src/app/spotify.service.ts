import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  // optimizacion de peticiones
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    // headers de la API (el token se vence cada 1 hora)
    const headers = new HttpHeaders({
      'Authorization': `Bearer BQC8b7_XepR5GnOHSbTPHGXXyOX-GsiXDxr14i3ZbmYLCci15NdnNucgt8Gz0c6FSy2cjjRnAFYmNqm4Oxs`
    });
    return this.http.get(url, { headers });
  }

  // obtener nuevos lanzamientos de spotify 
  getNuevaMusica() {
    return this.getQuery('browse/new-releases')
      .pipe(map((data) => data['albums'].items,(err)=>{console.log(err);
      }));
  }

  // Busquesdas por spotify
  getResultados(termino: string) {
    return this.getQuery(`search?query=${termino}&type=artist&market=CO&offset=0&limit=20`)
      .pipe(map((data) => data['artists'].items));
  }

  // obtener el perfil de un artista
  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  // obtener lo mas sonado del artista
  getTopTrack(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=ES`)
      .pipe(map( (data) => data['tracks']));
  }
}
