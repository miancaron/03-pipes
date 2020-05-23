import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas: boolean = true): string {

    value = value.toLowerCase();
    
    // Cada palabra será un elemento de una matriz
    let nombres: string[] = value.split(' ');

    if ( todas ){
      // map aplica una función a cada elemento de una matriz y devuelve una matriz cuyos elementos
      // son el resultado de aplicar la función a los elementos originales.
      nombres = nombres.map( (nombre: string) => {
        nombre = nombre[0].toUpperCase() + nombre.substr(1);
        return nombre;
      }
      );

    } else {
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }

    // console.log(nombres);

    // Juntar los elementos de una matriz separados por ' '
    return nombres.join(' ');

  }

}
