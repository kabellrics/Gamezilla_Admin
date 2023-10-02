import { Pipe, PipeTransform } from '@angular/core';
import { PlateformeService } from '../services/plateformeService';
import { Observable, map } from 'rxjs';

@Pipe({ name: 'plateformename' })
export class PlateformePipe implements PipeTransform {
  constructor(private plateformeService: PlateformeService) { }
  transform(value: string): Observable<string> {
    return this.plateformeService.getPlateformeData().pipe(
      map(data => data.find(x => x.Id === value)?.Name || '')
    );
  }
}
