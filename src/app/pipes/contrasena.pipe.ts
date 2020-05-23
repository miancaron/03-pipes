import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean): string {
    if( activar ){

      let ocultar: string = '';

      for( let i = 0; i < value.length; i++ ){
        ocultar = ocultar + '*';
      }

      return ocultar;

    }
    else {

      return value;
      
    }

  }

}
