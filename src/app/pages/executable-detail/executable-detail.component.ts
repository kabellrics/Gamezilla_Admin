import { Component, Input, OnInit } from '@angular/core';
import { ExecutableService } from '../../services/executableService';
import { ActivatedRoute } from '@angular/router';
import { Executable } from '../../model/executable';
import { SteamGridDbService } from '../../services/steamgriddbapiService';
import { SGDBGame } from '../../model/steamgriddb/SGDBGame';
import { Observable, of, forkJoin } from 'rxjs';

@Component({
  selector: 'app-executable-detail',
  templateUrl: './executable-detail.component.html',
  styleUrls: ['./executable-detail.component.css']
})
export class ExecutableDetailComponent implements OnInit {

  executable: any;
  isSGDBExpanded: boolean = false;
  isCoverExpanded: boolean = false;
  isLogoExpanded: boolean = false;
  isHeroExpanded: boolean = false;
  searchText: string = '';
  searchResults: SGDBGame[] = [];
  coverSearchResults: string[] = [];
  logoSearchResults: string[] = [];
  heroSearchResults: string[] = [];
  constructor(private route: ActivatedRoute, private executableService: ExecutableService, private steamGridDBService: SteamGridDbService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.executableService.getExecutableByIdData(id).subscribe(data => {
        this.executable = data;
        this.searchText = this.executable.Name;
      },
        (error) => {
          // Gérer l'erreur ici, par exemple, afficher un message d'erreur à l'utilisateur
          console.error('Une erreur s\'est produite :', error);
        });
    });
  }
  setsteamgriddbId(newid: string) {
    this.executable.SGDBID = newid;
    this.clearResults();
  }
  searchCoverAssets(provider: string) {
    if (provider == 'SGDB') {
      if (this.executable.SGDBID != null) {
        this.steamGridDBService.getCoverBySteamgriddbId(this.executable.SGDBID).subscribe((response: any) => {
          this.coverSearchResults = response.data.map((item: { url: any; }) => item.url);
          this.isCoverExpanded = true;
        });
      }
    }
    else if (provider == 'Local') { }
  }
  searchLogoAssets(provider: string) {
    if (provider == 'SGDB') {
      if (this.executable.SGDBID != null) {
        this.steamGridDBService.getLogoBySteamgriddbId(this.executable.SGDBID).subscribe((response: any) => {
          this.logoSearchResults = response.data.map((item: { url: any; }) => item.url);
          this.isLogoExpanded = true;
        });
      }
    }
    else if (provider == 'Local') { }
  }
  searchHeroAssets(provider: string) {
    if (provider == 'SGDB') {
      if (this.executable.SGDBID != null) {
        this.steamGridDBService.getHeroBySteamgriddbId(this.executable.SGDBID).subscribe((response: any) => {
          this.heroSearchResults = response.data.map((item: { url: any; }) => item.url);
          this.isHeroExpanded = true;
        });
      }
    }
    else if (provider == 'Local') { }
  }
  searchAssets(provider: string) {
    // Vous devrez implémenter l'appel API approprié en fonction du fournisseur choisi (Steamgrid, IGDB, Screenscraper).
    // Remplacez l'URL ci-dessous par l'URL de votre API.
    if (provider == 'SGDB') {
      this.steamGridDBService.searchGamesByName(this.searchText).subscribe((results) => {
        this.searchResults = results.data;
        this.isSGDBExpanded = true;
      });
    }
    else if (provider == 'IGDB') { }
    else if (provider == 'Screenscraper') { }
  }
  saveChange() {
    const obs1: Observable<string> = this.dllCover();
    const obs2: Observable<string> = this.dllHero();
    const obs3: Observable<string> = this.dllLogo();
    forkJoin([obs1, obs2, obs3]).subscribe(results => {
      // results contient les résultats des trois Observables dans l'ordre
      const result1 = results[0];
      const result2 = results[1];
      const result3 = results[2];
      if (results[0] != '') { this.executable.Cover = results[0]; }
      if (results[1] != '') { this.executable.Heroe = results[1]; }
      if (results[2] != '') { this.executable.Logo = results[2]; }

      
      // Effectuez le traitement après que les trois Observables soient terminés
      // ...
    });
  }

  dllCover(): Observable<string> {
    if (!this.executable.Cover.includes("upload")) {
      return this.executableService.saveAssetByUrl(this.executable.Cover, 'cover', this.executable.Id);
    } else {
      return of(''); // Renvoie un Observable vide si la condition n'est pas satisfaite
    }
  }
  dllHero(): Observable<string> {
    if (!this.executable.Heroe.includes("upload")) {
      return this.executableService.saveAssetByUrl(this.executable.Heroe, 'hero', this.executable.Id);
    } else {
      return of(''); // Renvoie un Observable vide si la condition n'est pas satisfaite
    }
  }
  dllLogo(): Observable<string> {
    if (!this.executable.Logo.includes("upload")) {
      return this.executableService.saveAssetByUrl(this.executable.Logo, 'logo', this.executable.Id);
    } else {
      return of(''); // Renvoie un Observable vide si la condition n'est pas satisfaite
    }
  }
  chooseCover(cover: string) {
    this.executable.Cover = cover;
    this.clearcoverResults();
  }
  chooseHero(cover: string) {
    this.executable.Heroe = cover;
    this.clearheroResults();
  }
  chooseLogo(cover: string) {
    this.executable.Logo = cover;
    this.clearlogoResults();
  }

  clearResults() {
    this.searchResults = [];
    this.isSGDBExpanded = false;
  }

  clearcoverResults() {
    this.coverSearchResults = [];
    this.isCoverExpanded = false;
  }
  clearlogoResults() {
    this.logoSearchResults = [];
    this.isLogoExpanded = false;
  }
  clearheroResults() {
    this.heroSearchResults = [];
    this.isHeroExpanded = false;
  }
}
