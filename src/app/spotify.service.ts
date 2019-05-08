import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {}

  // obtener nuevos lanzamientos de spotify (el token se vence cada 1 hora)
  getNuevaMusica() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBJYn1tq93APQr53W7mlqfOyMb7bkuhNGqoZbuSPxnHi_-PWewExwsyrhG-b9AWq2f9UKuGyEXgfWghHD8'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
                    .pipe( map( (data) => {
                      return data['albums'].items;
                    }));
  }

  getResultados(termino: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBJYn1tq93APQr53W7mlqfOyMb7bkuhNGqoZbuSPxnHi_-PWewExwsyrhG-b9AWq2f9UKuGyEXgfWghHD8'
    });
    return this.http.get(`https://api.spotify.com/v1/search?query=${termino}&type=artist&market=CO&offset=0&limit=15`, {headers});
  }
}
