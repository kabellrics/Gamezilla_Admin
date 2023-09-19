import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Parameter, ParametersResult } from '../model/parameter';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParameterService {
  private apiUrl = 'http://192.168.1.17:900/api/parametre/read.php';

  constructor(private http: HttpClient) { }

  // Fonction pour effectuer la requête HTTP GET et obtenir les données
  getParameterData(): Observable<Parameter[]> {
    return this.http.get<ParametersResult>(this.apiUrl).pipe(
      map((parameters: ParametersResult) => {
        return this.convertKeyParameter(parameters);
      })
    );
  }
  private convertKeyParameter(parameters: ParametersResult): Parameter[]  {
    return parameters.body.map(param => ({
      Id: param.Id,
      Key: param.Clé,
      Clé: param.Clé,
      Valeur: param.Valeur
    }));
  }
}
