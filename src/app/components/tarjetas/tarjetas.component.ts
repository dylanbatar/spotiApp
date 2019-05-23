import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
})
export class TarjetasComponent {

  @Input() items;
  constructor(private router: Router) { }

  // Obtener el id para las busqueda de los artistas
  getArtistaId(item: any) {
    if (item.type === 'album') {
      console.log(item.artists[0].id);
      this.router.navigate(['artista', item.artists[0].id]);
    } else {
      console.log(item.id);
      this.router.navigate(['artista', item.id]);
    }
  }

}
