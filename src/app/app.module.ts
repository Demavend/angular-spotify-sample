import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppService } from './shared/app.service';
import { HomeComponent } from './pages/home-page/home.component';
import { PlaylistComponent } from './pages/playlist-page/playlist.component';
import { AuthenticationComponent } from './pages/authentication-page/authentication.component';
import { ReleasesComponent } from './pages/releases-page/releases.component';
import { CategoriesComponent } from './pages/categories-page/categories.component';
import { SelectedCategoriesComponent } from './pages/selected-categories-page/selected-categories.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaylistComponent,
    AuthenticationComponent,
    ReleasesComponent,
    CategoriesComponent,
    SelectedCategoriesComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
