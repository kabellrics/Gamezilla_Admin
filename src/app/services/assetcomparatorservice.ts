import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AssetCompare } from "../model/assetcomparator";

@Injectable({
  providedIn: 'root'
})
export class AssetComparatorService {
  private apibaseUrl = 'http://192.168.1.17:900/api/consoleassets/';

  constructor(private http: HttpClient) { }

  Compare(): Observable<AssetCompare[]> {
    return this.http.get<AssetCompare[]>(this.apibaseUrl + 'compare.php');
  }
}
