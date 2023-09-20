import { Component } from '@angular/core';
import { PlateformeService } from '../../services/plateformeService';
import { ImgPipe } from '../../shared/pipeImg';
import { PagerService } from '../../services/pagerService';
import { PagerList } from '../../model/pager';

@Component({
  selector: 'app-plateforme-list',
  templateUrl: './plateforme-list.component.html',
  styleUrls: ['./plateforme-list.component.css']
})
export class PlateformeListComponent {
  constructor(private plateformeService: PlateformeService, private pagerService: PagerService) { }

  plateformes: any;
  pager!: PagerList;

  ngOnInit(): void {
    this.pagerService.getPlateformePager().subscribe(data => {
      this.pager = data;
      this.plateformeService.getPlateformeByFirstLetter(this.pager.body[0].Letter).subscribe(data => {
        this.plateformes = data;
      });
    });
  }
  onLetterClick(letter: string) {
    this.plateformeService.getPlateformeByFirstLetter(letter).subscribe(data => {
      this.plateformes = data;
    });
  }
}
