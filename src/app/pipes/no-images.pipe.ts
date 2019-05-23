import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImages'
})
export class NoImagesPipe implements PipeTransform {

  transform(imagen: any[]): string {
    if (!imagen) {
      return 'assets/img/noimage.png';
    }
    if (imagen.length > 0) {
      return imagen[0].url;
    } else {
      return  'assets/img/noimage.png';
    }
  }

}
