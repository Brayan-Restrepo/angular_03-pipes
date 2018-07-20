import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

    /**
     * 'value':'todas'
     * @param value es el texto para aplicar el filtro
     * @param todas es el filtro a aplicar 'value':'filtro'
     */
    transform(value: string, todas: boolean = true): string {

        value = value.toLowerCase();
        const nombres = value.split(' ');
        if (todas) {
            // tslint:disable-next-line:forin
            for (const i in nombres) {
                nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
            }
        }
        nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
        return nombres.join(' ');
    }
}