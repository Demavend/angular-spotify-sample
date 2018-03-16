import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppService } from './shared/app.service';
import { HomeComponent } from './pages/home-page/home.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaylistComponent,
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
