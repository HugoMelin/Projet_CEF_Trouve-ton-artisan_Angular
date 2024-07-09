import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Titreh1Component } from '../../components/titres/titreh1/titreh1.component';
import { Titreh2Component } from '../../components/titres/titreh2/titreh2.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ArtisanCardComponent } from '../../components/artisan-card/artisan-card.component';
import { NgFor, NgIf } from '@angular/common';
import { ArtisansDataService } from '../../services/artisans-data.service';
import { CategoryFilterPipe } from '../../pipes/category-filter.pipe';
import { SearchPipe } from '../../pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { InvalidSearchComponent } from '../../components/invalid-search/invalid-search.component';

@Component({
  selector: 'app-artisans',
  standalone: true,
  imports: [Titreh1Component, Titreh2Component, FontAwesomeModule, ArtisanCardComponent, NgFor, CategoryFilterPipe, SearchPipe, FormsModule, NgIf, InvalidSearchComponent],
  templateUrl: './artisans.component.html',
  styleUrl: './artisans.component.scss'
})
export class ArtisansComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass
  categorie: string = ""
  artisans:any
  searchTerm:string = ""
  recherche:any = ""

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private artisansDataService: ArtisansDataService)
  {}
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categorie = params["categorie"];
    })

    this.route.queryParams
    .subscribe((params) => {
    this.recherche = params;
    this.recherche = this.recherche.search
    })

    this.artisans = this.artisansDataService.artisanList

    if (!(this.categorie == "bâtiment" || this.categorie == "services" || this.categorie === "fabrication" || this.categorie === "alimentation" || !this.categorie)) {
      this.router.navigate(["content-not-found"])
    }
  }
}
