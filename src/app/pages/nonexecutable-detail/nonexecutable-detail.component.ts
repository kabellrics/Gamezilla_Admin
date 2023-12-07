import { Component, OnInit } from '@angular/core';
import { SGDBGame } from '../../model/steamgriddb/SGDBGame';
import { ActivatedRoute } from '@angular/router';
import { NonExecutableService } from '../../services/nonexecutableService';
import { SteamGridDbService } from '../../services/steamgriddbapiService';
import { Observable, forkJoin, of } from 'rxjs';

@Component({
  selector: 'app-nonexecutable-detail',
  templateUrl: './nonexecutable-detail.component.html',
  styleUrls: ['./nonexecutable-detail.component.css']
})
export class NonexecutableDetailComponent implements OnInit {


  nonexecutable: any;
  isSGDBExpanded: boolean = false;
  isCoverExpanded: boolean = false;
  isLogoExpanded: boolean = false;
  isHeroExpanded: boolean = false;
  searchText: string = '';
  searchResults: SGDBGame[] = [];
  coverSearchResults: string[] = [];
  logoSearchResults: string[] = [];
  heroSearchResults: string[] = [];
  constructor(private route: ActivatedRoute, private nonexecutableService: NonExecutableService, private steamGridDBService: SteamGridDbService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.nonexecutableService.getNonExecutableByIdData(id).subscribe(data => {
        this.nonexecutable = data;
        this.searchText = this.nonexecutable.Name;
      },
        (error) => {
          // Gérer l'erreur ici, par exemple, afficher un message d'erreur à l'utilisateur
          console.error('Une erreur s\'est produite :', error);
        });
    });
  }
  setsteamgriddbId(newid: string) {
    this.nonexecutable.SGDBID = newid;
    this.clearResults();
  }
  clearResults() {
    this.searchResults = [];
    this.isSGDBExpanded = false;
  }
  searchCoverAssets(provider: string) {
    if (provider == 'SGDB') {
      if (this.nonexecutable.SGDBID != null) {
        this.steamGridDBService.getCoverBySteamgriddbId(this.nonexecutable.SGDBID).subscribe((response: any) => {
          this.coverSearchResults = response.data.map((item: { url: any; }) => item.url);
          this.isCoverExpanded = true;
        });
      }
    }
    else if (provider == 'Local') { }
  }
  searchLogoAssets(provider: string) {
    if (provider == 'SGDB') {
      if (this.nonexecutable.SGDBID != null) {
        this.steamGridDBService.getLogoBySteamgriddbId(this.nonexecutable.SGDBID).subscribe((response: any) => {
          this.logoSearchResults = response.data.map((item: { url: any; }) => item.url);
          this.isLogoExpanded = true;
        });
      }
    }
    else if (provider == 'Local') { }
  }
  searchHeroAssets(provider: string) {
    if (provider == 'SGDB') {
      if (this.nonexecutable.SGDBID != null) {
        this.steamGridDBService.getHeroBySteamgriddbId(this.nonexecutable.SGDBID).subscribe((response: any) => {
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
  } saveChange() {
    const obs1: Observable<string> = this.dllCover();
    const obs2: Observable<string> = this.dllHero();
    const obs3: Observable<string> = this.dllLogo();
    forkJoin([obs1, obs2, obs3]).subscribe(results => {
      // results contient les résultats des trois Observables dans l'ordre
      this.nonexecutable.Cover = results[0];
      this.nonexecutable.Heroe = results[1];
      this.nonexecutable.Logo = results[2];

      this.nonexecutableService.postNonExecutableUpdate(this.nonexecutable).subscribe(
        (response) => {
          // La requête a réussi, response contient la réponse du serveur
          console.log('Réponse du serveur :', response);
          alert('Modification effectué');
        },
        (error) => {
          // Une erreur s'est produite
          console.error('Erreur lors de la requête :', error);
          alert('Modification non effectué');
        }
      );
      // Effectuez le traitement après que les trois Observables soient terminés
      // ...
    });
  }

  dllCover(): Observable<string> {
    if (!this.nonexecutable.Cover.includes("upload") && this.nonexecutable.Cover !== '') {
      return this.nonexecutableService.saveAssetByUrl(this.nonexecutable.Cover, 'cover', this.nonexecutable.Id);
    } else {
      return of(this.nonexecutable.Cover); // Renvoie un Observable vide si la condition n'est pas satisfaite
    }
  }
  dllHero(): Observable<string> {
    if (!this.nonexecutable.Heroe.includes("upload") && this.nonexecutable.Heroe !== '') {
      return this.nonexecutableService.saveAssetByUrl(this.nonexecutable.Heroe, 'hero', this.nonexecutable.Id);
    } else {
      return of(this.nonexecutable.Heroe); // Renvoie un Observable vide si la condition n'est pas satisfaite
    }
  }
  dllLogo(): Observable<string> {
    if (!this.nonexecutable.Logo.includes("upload") && this.nonexecutable.Logo !== '') {
      return this.nonexecutableService.saveAssetByUrl(this.nonexecutable.Logo, 'logo', this.nonexecutable.Id);
    } else {
      return of(this.nonexecutable.Logo); // Renvoie un Observable vide si la condition n'est pas satisfaite
    }
  }
  chooseCover(cover: string) {
    this.nonexecutable.Cover = cover;
    this.clearcoverResults();
  }
  chooseHero(cover: string) {
    this.nonexecutable.Heroe = cover;
    this.clearheroResults();
  }
  chooseLogo(cover: string) {
    this.nonexecutable.Logo = cover;
    this.clearlogoResults();
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
