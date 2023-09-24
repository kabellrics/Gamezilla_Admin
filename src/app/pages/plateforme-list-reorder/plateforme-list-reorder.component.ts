import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlateformeService } from '../../services/plateformeService';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragPreview,
  CdkDragPlaceholder,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { Plateforme } from '../../model/plateforme';

@Component({
  selector: 'app-plateforme-list-reorder',
  templateUrl: './plateforme-list-reorder.component.html',
  styleUrls: ['./plateforme-list-reorder.component.css']
})
export class PlateformeListReorderComponent {
  constructor(private plateformeService: PlateformeService, private router: Router) { }
  plateformes: any;
  ngOnInit(): void {
      this.plateformeService.getPlateformeData().subscribe(data => {
        this.plateformes = data;
      });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.plateformes, event.previousIndex, event.currentIndex);
    this.plateformes = this.assignIndexToOrder(this.plateformes);
  }

  assignIndexToOrder(items: Plateforme[]): Plateforme[] {
    for (let i = 0; i < items.length; i++) {
      items[i].ShowOrder = i.toString();
  }
  return items;
  }

  onSubmit() {
    var allsucces = true;
    for (let i = 0; i < this.plateformes.length; i++) {
      this.plateformeService.updatePlateforme(this.plateformes[i]).subscribe(
        (response) => {
          // Si la requête est réussie, vous pouvez effectuer la navigation vers une autre page
          //this.router.navigate(['/autre-page']); // Remplacez 'autre-page' par le chemin de la page vers laquelle vous souhaitez naviguer
        },
        (error) => {
          allsucces = false;
        }
      );
    }
    if (allsucces) {
      alert('Toutes les plateformes ont été mis à jour');
      this.router.navigate(['/plateformelist']);
  }
    else {
      alert('Echec de la mise à jour');
}
  }
}
