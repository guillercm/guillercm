import { Pipe, PipeTransform } from '@angular/core';

// https://www.flaticon.com/search?word=%20html

@Pipe({
  name: 'imgTecnology'
})
export class ImgTecnologyPipe implements PipeTransform {

  transform(tecnology: string): unknown {
    return `static/img/tecnologies/${tecnology.toLowerCase().replaceAll(".", "-").replaceAll("#", "sharp")}.png`;
  }

}
