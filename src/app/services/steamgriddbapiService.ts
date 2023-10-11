import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ParameterService } from "./parameterService";
import { SGBDGameResult, SGDBGame } from "../model/steamgriddb/SGDBGame";
import { Observable, catchError, throwError } from "rxjs";
import { ImgResult } from "../model/steamgriddb/ImgResult";

@Injectable({
  providedIn: 'root'
})
export class SteamGridDbService {
  private apiUrl = 'http://192.168.1.17:900/api/steamgriddb/';
    apiKey: string | undefined;

  constructor(private http: HttpClient, private parametreService: ParameterService) {
    this.parametreService.getParameterData().subscribe((data) => {
      var params = data;
      this.apiKey = params.find(x => x.Id == "14")?.Valeur;
    });
  }

  searchGamesByName(gameName: string): Observable<SGBDGameResult> {
    var urlpath = this.apiUrl + 'searchbyname.php?name=' + gameName + '&token=' + this.apiKey;
    return this.http.get<SGBDGameResult>(urlpath);
  }

  getCoverBySteamgriddbId(steamgriddbId: string): Observable<ImgResult> {
    var urlpath = this.apiUrl + 'coverbygameid.php?id=' + steamgriddbId + '&token=' + this.apiKey;
    return this.http.get<ImgResult>(urlpath);
  }

  getLogoBySteamgriddbId(steamgriddbId: string)/*: Observable<ImgResult>*/ {
    // Implémentez la recherche de Grid au format 600x900 par SteamGridDB ID.
    // Utilisez le package node-steamgriddb pour effectuer la recherche.
    // Par exemple, vous pouvez effectuer une requête HTTP GET à l'URL `${this.apiUrl}/games/${steamgriddbId}/grid?width=${width}&height=${height}`.
  }

  getHeroBySteamgriddbId(steamgriddbId: string)/*: Observable<ImgResult>*/ {
    // Implémentez la recherche de héros en utilisant le SteamGridDB ID.
    // Utilisez le package node-steamgriddb pour effectuer la recherche.
    // Par exemple, vous pouvez effectuer une requête HTTP GET à l'URL `${this.apiUrl}/games/${steamgriddbId}/hero`.
  }

}
