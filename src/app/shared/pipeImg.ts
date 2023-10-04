import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name:'imglink'})
export class ImgPipe implements PipeTransform {
  transform(value: string): string {
    if (value.includes("upload")) {
      return 'http://192.168.1.17:900/' + value;
    }
    else return value;
  }
}
