import { Component, OnInit } from '@angular/core';
import { ExecutableService } from '../../services/executableService';

@Component({
  selector: 'app-executable-list',
  templateUrl: './executable-list.component.html',
  styleUrls: ['./executable-list.component.css']
})
export class ExecutableListComponent implements OnInit {
  constructor(private executableService: ExecutableService) { }
  ngOnInit(): void {
    this.executableService.getExecutableData().subscribe(data => {
      this.filteredexecutables = this.executables = data;
    });
  }
  displayedColumns: string[] = ['id', 'nom', 'type', 'favoris', 'actif', 'link'];
  executables: any;
  filteredexecutables: any;
}
