import { Component } from '@angular/core';
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
  constructor(private plateformeService: PlateformeService) { }
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
}
