import { Component, OnInit } from '@angular/core';
import { ParameterService } from '../../services/parameterService';

@Component({
  selector: 'app-settings-list',
  templateUrl: './settings-list.component.html',
  styleUrls: ['./settings-list.component.css']
})
export class SettingsListComponent {
  constructor(private parametreService: ParameterService) { }

  keyValuePairs: any;

  displayedColumns: string[] = ['id', 'key', 'value'];
  ngOnInit(): void {
    this.parametreService.getParameterData().subscribe(data => {
      this.keyValuePairs = data;
    });
  }
  //keyValuePairs: { Id: string, Key: string, Valeur: string }[] = [
  //  {
  //  "Id": "1",
  //  "Key": "SteamLogoPath",
  //  "Valeur": "https://cdn.cloudflare.steamstatic.com/steam/apps/%STEAMID%/logo.png"
  //},
  //  {
  //    "Id": "2",
  //    "Key": "SteamBoxPath",
  //    "Valeur": "https://cdn.cloudflare.steamstatic.com/steam/apps/%STEAMID%/library_600x900.jpg"
  //  },
  //  {
  //    "Id": "3",
  //    "Key": "SteamHeroPath",
  //    "Valeur": "https://steamcdn-a.akamaihd.net/steam/apps/%STEAMID%/library_hero.jpg"
  //  },
  //  {
  //    "Id": "4",
  //    "Key": "SteamUrlInfos",
  //    "Valeur": "https://store.steampowered.com/api/appdetails?appids=%STEAMID%&l=french"
  //  },
  //  {
  //    "Id": "5",
  //    "Key": "LookForSteamGames",
  //    "Valeur": "1"
  //  },
  //  {
  //    "Id": "6",
  //    "Key": "LookForOriginGames",
  //    "Valeur": "0"
  //  },
  //  {
  //    "Id": "7",
  //    "Key": "LookForEpicGames",
  //    "Valeur": "0"
  //  }
    // Ajoutez d'autres éléments de clé-valeur ici
  //];
}
