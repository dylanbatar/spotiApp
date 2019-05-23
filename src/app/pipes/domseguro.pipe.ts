import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {
  constructor(private security:DomSanitizer){}
  transform(song: string, url?: string): any {
    return this.security.bypassSecurityTrustResourceUrl(url + song);
  }

}
