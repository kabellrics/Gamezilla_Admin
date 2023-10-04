import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ParameterService } from "./parameterService";
import { SGBDGameResult, SGDBGame } from "../model/steamgriddb/SGDBGame";
import { Observable, catchError, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SteamGridDbService {
    private apiUrl = 'https://www.steamgriddb.com/api/v2';
    apiKey: string | any;

  constructor(private http: HttpClient, private parametreService: ParameterService) {
    this.parametreService.getParameterData().subscribe((data) => {
      var params = data;
      this.apiKey = params.find(x => x.Id == "14")?.Valeur;
    });
  }

  searchGamesByName(gameName: string): Observable<SGBDGameResult> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Bearer ' + this.apiKey
    });

    const url = `${this.apiUrl}/search/autocomplete/${gameName}`;

    return this.http.get<SGBDGameResult>(url, { headers });
    //const axios = require('axios');

    //let config = {
    //  method: 'get',
    //  maxBodyLength: Infinity,
    //  url: this.apiUrl+'/search/autocomplete/'+gameName,
    //  headers: {
    //    'Authorization': 'Bearer ' + this.apiKey
    //  }
    //};

    //axios.request(config)
    //  .then((response: { data: any; }) => {
    //    return JSON.stringify(response.data);
    //  })
    //  .catch((error: any) => {
    //    console.log(error);
    //  });
  }

  getLogoBySteamgriddbId(steamgriddbId: string) {
    // Implémentez la recherche de logo par SteamGridDB ID.
    // Utilisez le package node-steamgriddb pour effectuer la recherche.
    // Par exemple, vous pouvez effectuer une requête HTTP GET à l'URL `${this.apiUrl}/games/${steamgriddbId}/logo`.
  }

  getGridBySteamgriddbId(steamgriddbId: string, width: number, height: number) {
    // Implémentez la recherche de Grid au format 600x900 par SteamGridDB ID.
    // Utilisez le package node-steamgriddb pour effectuer la recherche.
    // Par exemple, vous pouvez effectuer une requête HTTP GET à l'URL `${this.apiUrl}/games/${steamgriddbId}/grid?width=${width}&height=${height}`.
  }

  getHeroBySteamgriddbId(steamgriddbId: string) {
    // Implémentez la recherche de héros en utilisant le SteamGridDB ID.
    // Utilisez le package node-steamgriddb pour effectuer la recherche.
    // Par exemple, vous pouvez effectuer une requête HTTP GET à l'URL `${this.apiUrl}/games/${steamgriddbId}/hero`.
  }

  //searchAutocompleteGrid(text: string): Observable<SGBDGameResult> {
  //  const headers = new HttpHeaders({
  //    'Authorization': `Bearer ${this.apiKey}`
  //  });

  //  const options = { headers: headers };
  //  const url = `${this.apiUrl}/api/v2/search/autocomplete/${text}`;

  //  return this.http.get<SGBDGameResult>(url, options).pipe(
  //    catchError((error: any) => {
  //      // Gérer l'erreur ici et renvoyer une erreur observable
  //      console.error('Erreur HTTP :', error);
  //      return throwError(error);
  //    })
  //  );
  //}
}
