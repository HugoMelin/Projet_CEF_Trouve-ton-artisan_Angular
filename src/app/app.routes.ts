import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArtisansComponent } from './pages/artisans/artisans.component';
import { ArtisansDetailsComponent } from './pages/artisans-details/artisans-details.component';
import { ContentNotFoundComponent } from './pages/content-not-found/content-not-found.component';
import { ErrorHandler, inject } from '@angular/core';

export const routes: Routes = [
    {path: "", component: HomeComponent, title: "Accueil | Trouve ton artisan"},
    {path: "artisans", component: ArtisansComponent, title: "Annuaire | Trouve ton artisan"},
    {path: "artisans/:categorie", component: ArtisansComponent, title: "Catégorie | Trouve ton artisan"},
    {path: "artisans/details/:id", component: ArtisansDetailsComponent, title: "Artisans | Trouve ton artisan"},
    {path: "**", component: ContentNotFoundComponent, title: "Erreur 404 | Touve ton artisan"}
];
