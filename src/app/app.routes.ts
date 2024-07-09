import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArtisansComponent } from './pages/artisans/artisans.component';
import { ArtisansDetailsComponent } from './pages/artisans-details/artisans-details.component';

export const routes: Routes = [
    {path: "", component: HomeComponent, title: "Accueil | Trouve ton artisan"},
    {path: "artisans", component: ArtisansComponent},
    {path: "artisans/:categorie", component: ArtisansComponent},
    {path: "artisans/details/:id", component: ArtisansDetailsComponent}
];
