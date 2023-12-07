import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, of } from "rxjs";
import { NonExecutable, NonExecutablesResult } from "../model/nonexecutable";

@Injectable({
  providedIn: 'root'
})
export class NonExecutableService {
  private apibaseUrl = 'http://192.168.1.17:900/api/nonexecutable/';

  constructor(private http: HttpClient) { }

  getNonExecutableData(): Observable<NonExecutable[]> {
    return this.http.get<NonExecutablesResult>(this.apibaseUrl + 'read.php').pipe(
      map((plateformes: NonExecutablesResult) => {
        return plateformes.body;
      })
    );
  }

  postNonExecutableUpdate(item: NonExecutable): Observable<any> {
    try {
      var itemJson = JSON.stringify(item); // Convertir l'objet en JSON
      itemJson = itemJson.replaceAll('true', '1').replaceAll('false', '0');
      var urlpath = this.apibaseUrl + 'update.php';
      return this.http.post<NonExecutable>(urlpath, itemJson)
        .pipe(
          catchError((error: any, caught: Observable<any>): Observable<any> => {
            var errorMessage = error.message;
            console.error('There was an error!', error);
            return of(); // Retourner un observable vide en cas d'erreur
          })
        );
    } catch (error) {
      console.error('Error while converting item to JSON:', error);
      return of(); // Retourner un observable vide en cas d'erreur de sérialisation
    }
  }
  getNonExecutableByIdData(id: number): Observable<NonExecutable> {
    var urlpath = this.apibaseUrl + 'single_read.php?Id=' + id;
    return this.http.get<NonExecutable>(urlpath);
  }
  saveAssetByUrl(url: string, type: string, name: string): Observable<string> {
    var urlpath = this.apibaseUrl + 'uploadurlasset.php?url=' + url + '&type=' + type + '&newname=' + name;
    //return this.http.get<string>(urlpath, { responseType: 'text' });
    return this.http.get(urlpath, { responseType: 'arraybuffer' }).pipe(
      map((response: ArrayBuffer) => {
        const textDecoder = new TextDecoder('utf-8');
        return textDecoder.decode(response);
      })
    );
  }

}
