import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home-page/home.component';
import { CategoriesComponent } from './pages/categories-page/categories.component';
import { PlaylistComponent } from './pages/playlist-page/playlist.component';
import { RegistrationComponent } from './pages/registration-page/registration.component';
import { ReleasesComponent } from './pages/releases-page/releases.component';
import { SelectedCategoriesComponent } from './pages/selected-categories-page/selected-categories.component';

export const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'playlist', component: PlaylistComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'releases', component: ReleasesComponent},
  {path: 'selected-categories', component: SelectedCategoriesComponent}
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
