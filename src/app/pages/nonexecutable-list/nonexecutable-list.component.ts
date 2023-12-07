import { Component, OnInit } from '@angular/core';
import { NonExecutableService } from '../../services/nonexecutableService';
import { FormControl } from '@angular/forms';
import { NonExecutable } from '../../model/nonexecutable';

@Component({
  selector: 'app-nonexecutable-list',
  templateUrl: './nonexecutable-list.component.html',
  styleUrls: ['./nonexecutable-list.component.css']
})
export class NonexecutableListComponent implements OnInit {
  constructor(private nonexecutableService: NonExecutableService) { }
  ngOnInit(): void {
    this.nonexecutableService.getNonExecutableData().subscribe(data => {
      this.executables = data;
      this.filteredexecutables = this.executables;
      const uniquePlateformeIds: string[] = Array.from(new Set(this.executables.map((x: NonExecutable) => x.PlateformeId.toString())));
      this.plateformefilter = ["-1", ...uniquePlateformeIds];
    });
    }
  displayedColumns: string[] = ['id', 'nom', 'type', 'favoris', 'actif', 'link'];
  executables: any;
  filteredexecutables: any;
  plateformefilter: string[] = [];
  selectedplateforme = new FormControl(this.plateformefilter[0]);

  get filteredItems() {
    if (this.selectedplateforme.value == "-1")
      return this.executables;
    else
      return this.executables.filter((x: NonExecutable) => !this.selectedplateforme.value || x.PlateformeId === this.selectedplateforme.value);
  }
  onPlateformeChange(event: any) {
    if (event.value == "-1")
      this.filteredexecutables = this.executables;
    else
      this.filteredexecutables = this.executables.filter((x: NonExecutable) => !event || x.PlateformeId === event.value);
  }
}
