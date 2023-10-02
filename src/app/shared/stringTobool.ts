import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'stringtobool' })
export class StringToBool implements PipeTransform {
  transform(value: string): boolean {
    return value == "0" ? false : true;
  }
}
