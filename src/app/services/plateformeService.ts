import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Plateforme, PlateformesResult } from '../model/plateforme';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlateformeService {
  private apibaseUrl = 'http://192.168.1.17:900/api/plateforme/';

  constructor(private http: HttpClient) { }

  // Fonction pour effectuer la requête HTTP GET et obtenir les données
  getPlateformeData(): Observable<Plateforme[]> {
    return this.http.get<PlateformesResult>(this.apibaseUrl +'read.php').pipe(
      map((plateformes: PlateformesResult) => {
        return this.convertKeyParameter(plateformes);
      })
    );
  }

  getPlateformeByFirstLetter(letter: string): Observable<Plateforme[]> {
    var urlpath = this.apibaseUrl + 'readbyletter.php?Id=' + letter;
    return this.http.get<PlateformesResult>(urlpath).pipe(
      map((plateformes: PlateformesResult) => {
        return this.convertKeyParameter(plateformes);
      })
    );
  }

  getPlateformeByIdData(id: number): Observable<Plateforme> {
    var urlpath = this.apibaseUrl + 'single_read.php?Id=' + id;
    return this.http.get<Plateforme>(urlpath);
    //  .pipe(
    //  map((data: any) => {
    //    return {
    //      Id: data.Id,
    //      Name: data.Name,
    //      Fanart: data.Fanart,
    //      ShowOrder: data.ShowOrder,
    //      PlateformeTypeId: data.PlateformeTypeId
    //    } as Plateforme;
    //  })
    //).subscribe((plateforme: Plateforme) => {
    //  return plateforme;
    //})
  }
  private convertKeyParameter(plateformes: PlateformesResult): Plateforme[] {
    return plateformes.body.map(plate => ({
      Id: plate.Id,
      Fanart: plate.Fanart,
      Logo: plate.Logo,
      Name: plate.Name,
      ShowOrder: plate.ShowOrder,
      PlateformeTypeId: plate.PlateformeTypeId,
      IsActif: plate.IsActif
    }));
  }
}
