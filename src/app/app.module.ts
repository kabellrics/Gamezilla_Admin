import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
import { MatListModule } from '@angular/material/list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatExpansionModule } from '@angular/material/expansion';
import { SettingsListComponent } from './pages/settings-list/settings-list.component';
import { PlateformeListComponent } from './pages/plateforme-list/plateforme-list.component';
import { ExecutableListComponent } from './pages/executable-list/executable-list.component';
import { NonexecutableListComponent } from './pages/nonexecutable-list/nonexecutable-list.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from "@angular/router";
import { ROUTES } from './routes';
import { ParameterService } from './services/parameterService';
import { HttpClientModule } from '@angular/common/http';
import { ImgPipe } from './shared/pipeImg';
import { PlateformeDetailComponent } from './pages/plateforme-detail/plateforme-detail.component';
import { PlateformeListReorderComponent } from './pages/plateforme-list-reorder/plateforme-list-reorder.component';
import { PlateformePipe } from './shared/plateformePipe';
import { StringToBoolPipe } from './shared/stringTobool';
import { ExecutableDetailComponent } from './pages/executable-detail/executable-detail.component';
import { TimestampToDatePipe } from './shared/timepipe';
import { ConsoleassetsComponent } from './pages/consoleassets/consoleassets.component';
import { AssetLogoPipe } from './shared/assetLogoPipe';
import { AssetBckPipe } from './shared/assetBckPipe';
import { ExecutablePipe } from './shared/executablePipe';
import { NonexecutableDetailComponent } from './pages/nonexecutable-detail/nonexecutable-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SettingsListComponent,
    PlateformeListComponent,
    ExecutableListComponent,
    NonexecutableListComponent,
    HomeComponent, ImgPipe, AssetLogoPipe, AssetBckPipe, ExecutablePipe, PlateformeDetailComponent,
    PlateformeListReorderComponent, PlateformePipe, StringToBoolPipe, ExecutableDetailComponent, TimestampToDatePipe, ConsoleassetsComponent, NonexecutableDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule, MatGridListModule, MatToolbarModule,
    MatButtonModule, MatCardModule, MatTableModule,
    MatFormFieldModule, MatInputModule, MatSelectModule,
    MatCheckboxModule, MatSortModule, DragDropModule,
    MatExpansionModule, MatListModule, ScrollingModule
  ],
  providers: [ParameterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
