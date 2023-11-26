import { Component, OnInit } from '@angular/core';
import { AssetCompare } from '../../model/assetcomparator';
import { AssetComparatorService } from '../../services/assetcomparatorservice';

@Component({
  selector: 'app-consoleassets',
  templateUrl: './consoleassets.component.html',
  styleUrls: ['./consoleassets.component.css']
})
export class ConsoleassetsComponent implements OnInit {
  constructor(private assetcomparatorService: AssetComparatorService) { }
  assetComparator: AssetCompare[] = [];
  assetorderComparator: AssetCompare[] = [];
    ngOnInit(): void {
      this.assetcomparatorService.Compare().subscribe(data =>
      {
        this.assetComparator = data;
        this.assetorderComparator = this.sortList(data);
      });
    }
  sortList(list: any[]): any[] {
    // Sépare la liste en deux : avec et sans 'logo'
    const withLogo = list.filter(item => item.logo);
    const withoutLogo = list.filter(item => !item.logo);

    // Trie les éléments avec 'logo' par ordre alphabétique
    withLogo.sort((a, b) => a.logo.localeCompare(b.logo));

    withoutLogo.forEach(item => {
      const index = withLogo.findIndex(withLogoItem => withLogoItem.logo > item.bck);
      if (index === -1) {
        withLogo.push(item); // Si tous les éléments avec 'logo' sont inférieurs à 'bck', ajoute à la fin
      } else {
        withLogo.splice(index, 0, item); // Insère à la position trouvée
      }
    });

    // Fusionne les deux listes triées
    return withLogo;
  }
}
