import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'assetlogo' })
export class AssetLogoPipe implements PipeTransform {
  transform(value: string): string {
      return 'http://192.168.1.17:900/uploads/console/logo/' + value;
  }
}
