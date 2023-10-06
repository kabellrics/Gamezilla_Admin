import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestampToDate'
})
export class TimestampToDatePipe implements PipeTransform {
  transform(timestamp: number): string {
    // Votre logique de conversion ici
    const milliseconds = timestamp * 1000;
    const date = new Date(milliseconds);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    //return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    //return `${year}-${month}-${day}`;
    return `${year}`;
  }
}
