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

  @Input()
  executable: any;
  steamgriddbId: any;
  showDropdown = false;
  steamgriddbresult: SGDBGame[] = [];
  constructor(private route: ActivatedRoute, private executableService: ExecutableService, private steamGridDBService: SteamGridDbService) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.executableService.getExecutableByIdData(id).subscribe(data => {
        this.executable = data;
      },
        (error) => {
          // Gérer l'erreur ici, par exemple, afficher un message d'erreur à l'utilisateur
          console.error('Une erreur s\'est produite :', error);
        });
    });
    }
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;

    if (this.showDropdown) {
      this.steamGridDBService.searchGamesByName(this.executable.Name).subscribe((data) =>
      {
        this.steamgriddbresult = data.data;
      });
    }
  }
  onSelectionChange(event: any) {
    console.log('Option sélectionnée :', event.value);
    // Vous pouvez faire quelque chose avec l'option sélectionnée ici
  }
}
