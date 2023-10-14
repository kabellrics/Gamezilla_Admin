import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Executable, ExecutablesResult } from '../model/executable';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExecutableService {
  private apibaseUrl = 'http://192.168.1.17:900/api/executable/';

  constructor(private http: HttpClient) { }

  // Fonction pour effectuer la requête HTTP GET et obtenir les données
  getExecutableData(): Observable<Executable[]> {
    return this.http.get<ExecutablesResult>(this.apibaseUrl + 'read.php').pipe(
      map((plateformes: ExecutablesResult) => {
        return plateformes.body;
      })
    );
  }
  postExecutableUpdate(item: Executable){
    var urlpath = this.apibaseUrl + 'update.php';
    this.http.post<Executable>(urlpath, item);
  }
  getExecutableByIdData(id: number): Observable<Executable> {
    var urlpath = this.apibaseUrl + 'single_read.php?Id=' + id;
    return this.http.get<Executable>(urlpath);
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
