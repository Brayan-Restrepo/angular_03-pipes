import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {


  transform(contrasena: string, activar: boolean = true): any {
    if (activar) {
      //  expresiones regulares
      contrasena = contrasena.replace(/./g, '*');
      return contrasena;
    } else {
      return contrasena;
    }
  }

}
