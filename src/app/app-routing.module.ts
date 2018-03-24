import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home-page/home.component';
import { CategoriesComponent } from './pages/categories-page/categories.component';
import { PlaylistComponent } from './pages/playlist-page/playlist.component';
import { AuthenticationComponent } from './pages/authentication-page/authentication.component';
import { ReleasesComponent } from './pages/releases-page/releases.component';
import { SelectedCategoriesComponent } from './pages/selected-categories-page/selected-categories.component';

export const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'categories', component: CategoriesComponent},
  {path: 'playlist', component: PlaylistComponent},
  {path: 'authentication', component: AuthenticationComponent},
  {path: 'releases', component: ReleasesComponent},
  {path: 'selected-categories', component: SelectedCategoriesComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
})
export class AppRoutingModule {
}
