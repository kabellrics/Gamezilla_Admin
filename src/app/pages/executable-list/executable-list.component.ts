import { Component, OnInit } from '@angular/core';
import { ExecutableService } from '../../services/executableService';
import { Executable } from '../../model/executable';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-executable-list',
  templateUrl: './executable-list.component.html',
  styleUrls: ['./executable-list.component.css']
})
export class ExecutableListComponent implements OnInit {
  constructor(private executableService: ExecutableService) { }
  displayedColumns: string[] = ['id', 'nom', 'type', 'favoris', 'actif', 'link'];
  executables: any;
  filteredexecutables: any;
  plateformefilter: string[] = [];
  selectedplateforme = new FormControl(this.plateformefilter[0]);
  get filteredItems() {
    if (this.selectedplateforme.value == "-1")
      return this.executables;
    else
      return this.executables.filter((x: Executable) => !this.selectedplateforme.value || x.PlateformeId === this.selectedplateforme.value);
  }

  changefilteredData() {
    if (this.selectedplateforme.value == "-1")
      this.filteredexecutables = this.executables;
    else
      this.filteredexecutables = this.executables.filter((x: Executable) => !this.selectedplateforme.value || x.PlateformeId === this.selectedplateforme.value);
  }

  ngOnInit(): void {
    this.executableService.getExecutableData().subscribe(data => {
      this.executables = data;
      this.filteredexecutables = this.executables;
      const uniquePlateformeIds: string[] = Array.from(new Set(this.executables.map((x: Executable) => x.PlateformeId.toString())));
      this.plateformefilter = ["-1", ...uniquePlateformeIds];      
    });
  }
}
