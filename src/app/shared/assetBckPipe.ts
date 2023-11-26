import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'assetbck' })
export class AssetBckPipe implements PipeTransform {
  transform(value: string): string {
    return 'http://192.168.1.17:900/uploads/console/background/' + value;
  }
}
