import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer) {

  }

  /**
   * "video | DomseguroPipe:{{ https://www.youtube.com/embed/ }}
   * value | DomseguroPipe:url
   * @param value 
   * @param url 
   */
  transform(value: string, url: string): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
