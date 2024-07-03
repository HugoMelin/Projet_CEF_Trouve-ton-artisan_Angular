import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { ActivatedRoute } from '@angular/router';
import { Titreh1Component } from '../../components/titres/titreh1/titreh1.component';
import { Titreh2Component } from '../../components/titres/titreh2/titreh2.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ArtisanCardComponent } from '../../components/artisan-card/artisan-card.component';
import { NgFor } from '@angular/common';
import { ArtisansDataService } from '../../services/artisans-data.service';

@Component({
  selector: 'app-artisans',
  standalone: true,
  imports: [Titreh1Component, Titreh2Component, FontAwesomeModule, ArtisanCardComponent, NgFor],
  templateUrl: './artisans.component.html',
  styleUrl: './artisans.component.scss'
})
export class ArtisansComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass
  categorie: string = ""
  artisans:any

  constructor(
    private titleService:Title,
    private route: ActivatedRoute,
    private artisansDataService: ArtisansDataService)
  {}
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categorie = params["categorie"];
    })
    this.titleService.setTitle(this.categorie + " | Trouve ton artisan") 
    this.artisans = this.artisansDataService.artisanList
  }
}