import { Routes } from "@angular/router";
import { ExecutableListComponent } from "./pages/executable-list/executable-list.component";
import { HomeComponent } from "./pages/home/home.component";
import { NonexecutableListComponent } from "./pages/nonexecutable-list/nonexecutable-list.component";
import { PlateformeListComponent } from "./pages/plateforme-list/plateforme-list.component";
import { SettingsListComponent } from "./pages/settings-list/settings-list.component";
import { PlateformeDetailComponent } from "./pages/plateforme-detail/plateforme-detail.component";
import { PlateformeListReorderComponent } from "./pages/plateforme-list-reorder/plateforme-list-reorder.component";
import { ExecutableDetailComponent } from "./pages/executable-detail/executable-detail.component";
import { ConsoleassetsComponent } from "./pages/consoleassets/consoleassets.component";
import { NonexecutableDetailComponent } from "./pages/nonexecutable-detail/nonexecutable-detail.component";

export const ROUTES: Routes = [
  //{ path: '**', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'execlist', component: ExecutableListComponent },
  { path: 'nonexeclist', component: NonexecutableListComponent },
  { path: 'plateformelist', component: PlateformeListComponent },
  { path: 'plateformelistreorder', component: PlateformeListReorderComponent },
  { path: 'plateformedetail/:id', component: PlateformeDetailComponent },
  { path: 'executabledetail/:id', component: ExecutableDetailComponent },
  { path: 'nonexecutabledetail/:id', component: NonexecutableDetailComponent },
  { path: 'settings', component: SettingsListComponent },
  { path: 'consoleasset', component: ConsoleassetsComponent },
];
