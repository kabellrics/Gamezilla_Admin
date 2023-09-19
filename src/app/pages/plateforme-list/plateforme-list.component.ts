import { Component } from '@angular/core';
import { PlateformeService } from '../../services/plateformeService';
import { ImgPipe } from '../../shared/pipeImg';

@Component({
  selector: 'app-plateforme-list',
  templateUrl: './plateforme-list.component.html',
  styleUrls: ['./plateforme-list.component.css']
})
export class PlateformeListComponent {
  constructor(private plateformeService: PlateformeService) { }

  plateformes: any;

  ngOnInit(): void {
    this.plateformeService.getPlateformeData().subscribe(data => {
      this.plateformes = data;
    });
  }
}
