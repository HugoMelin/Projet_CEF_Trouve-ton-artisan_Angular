import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArtisansComponent } from './pages/artisans/artisans.component';

export const routes: Routes = [
    {path: "", component: HomeComponent, title: "Accueil | Trouve ton artisan"},
    {path: "artisans/:categorie", component: ArtisansComponent}
];
