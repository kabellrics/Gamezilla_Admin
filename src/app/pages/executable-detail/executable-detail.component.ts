import { Component, Input, OnInit } from '@angular/core';
import { ExecutableService } from '../../services/executableService';
import { ActivatedRoute } from '@angular/router';
import { Executable } from '../../model/executable';
import { SteamGridDbService } from '../../services/steamgriddbapiService';
import { SGDBGame } from '../../model/steamgriddb/SGDBGame';

@Component({
  selector: 'app-executable-detail',
  templateUrl: './executable-detail.component.html',
  styleUrls: ['./executable-detail.component.css']
})
export class ExecutableDetailComponent implements OnInit {

  executable: any;
  steamgriddbId: any;
  igdbId: any;
  screenscraperId: any;
  isExpanded: boolean = false;
  isCoverExpanded: boolean = false;
  isLogoExpanded: boolean = false;
  isHeroExpanded: boolean = false;
  //isScraperCoverPanelOpen: boolean = false;
  //isCoverPanelOpen: boolean = false;
  searchText: string = '';
  searchResults: SGDBGame[] = [];
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
  onSearchTextChange(event: any) {
    const newValue = event.target.value;
    this.searchText = newValue;
  }
  setsteamgriddbId(newid: string) {
    this.steamgriddbId = newid;
  }
  searchAssets(provider: string) {
    // Vous devrez implémenter l'appel API approprié en fonction du fournisseur choisi (Steamgrid, IGDB, Screenscraper).
    // Remplacez l'URL ci-dessous par l'URL de votre API.
    if (provider == 'SGDB') {
      this.steamGridDBService.searchGamesByName(this.searchText).subscribe((results) => {
        this.searchResults = results.data;
        this.isExpanded = true;
      });
    }
    else if (provider == 'IGDB') { }
    else if (provider == 'Screenscraper') { }

    //this.http.get<string[]>(apiUrl).subscribe((results) => {
    //  this.searchResults = results;
    //  this.isExpanded = true;
    //});
  }

  clearResults() {
    this.searchResults = [];
    this.isExpanded = false;
  }
}
