import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SettingsListComponent } from './pages/settings-list/settings-list.component';
import { PlateformeListComponent } from './pages/plateforme-list/plateforme-list.component';
import { ExecutableListComponent } from './pages/executable-list/executable-list.component';
import { NonexecutableListComponent } from './pages/nonexecutable-list/nonexecutable-list.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from "@angular/router";
import { ROUTES } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SettingsListComponent,
    PlateformeListComponent,
    ExecutableListComponent,
    NonexecutableListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule, MatToolbarModule, MatButtonModule, MatCardModule, MatTableModule, MatFormFieldModule, MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
