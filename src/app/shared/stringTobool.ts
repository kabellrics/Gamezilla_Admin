import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'stringtobool' })
export class StringToBoolPipe implements PipeTransform {
  transform(value: string): boolean {
    return value === '1';
  }
}
