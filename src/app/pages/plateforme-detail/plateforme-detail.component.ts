import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlateformeService } from '../../services/plateformeService';

@Component({
  selector: 'app-plateforme-detail',
  templateUrl: './plateforme-detail.component.html',
  styleUrls: ['./plateforme-detail.component.css']
})
export class PlateformeDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private plateformeService: PlateformeService) { }

  plateforme: any;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.plateformeService.getPlateformeByIdData(id).subscribe(data => {
        this.plateforme = data;
      });
    });
    }
  changeImage() {
    // Implémentez ici la logique pour changer l'image de l'Item
    // Par exemple, vous pouvez afficher une boîte de dialogue de chargement d'image.
  }
}
