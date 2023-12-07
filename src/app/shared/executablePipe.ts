import { Pipe, PipeTransform } from "@angular/core";
import { ExecutableService } from "../services/executableService";
import { Observable, map, of } from "rxjs";

@Pipe({ name: 'executablename' })
export class ExecutablePipe implements PipeTransform
{
    constructor(private executableService: ExecutableService) { }
  transform(value: string): Observable<string> {
    if (value != "-1") {
      return this.executableService.getExecutableData().pipe(
        map(data => data.find(x => x.Id === value)?.Name || '')
      );
    }
    else {
      return of("Toutes les plateformes");
    }
  }
}
