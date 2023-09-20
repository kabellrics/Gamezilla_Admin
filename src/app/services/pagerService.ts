import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PagerLetter, PagerList } from '../model/pager';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
}) export class PagerService {
  private apibaseUrl = 'http://192.168.1.17:900/api/pager/';
  constructor(private http: HttpClient) { }

  getPlateformePager(): Observable<PagerList> {
    return this.http.get<PagerList>(this.apibaseUrl + 'plateforme.php');
  }
  getExecutablePager(): Observable<PagerList> {
    return this.http.get<PagerList>(this.apibaseUrl + 'executable.php');
  }
  getNonExecutablePager(): Observable<PagerList> {
    return this.http.get<PagerList>(this.apibaseUrl + 'nonexecutable.php');
  }
}
