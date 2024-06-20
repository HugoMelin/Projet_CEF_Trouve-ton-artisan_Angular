import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artisans',
  standalone: true,
  imports: [],
  templateUrl: './artisans.component.html',
  styleUrl: './artisans.component.scss'
})
export class ArtisansComponent implements OnInit {
  categorie: string = ""

  constructor(
    private titleService:Title,
    private route: ActivatedRoute)
      {}
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categorie = params["categorie"];
    })
    this.titleService.setTitle(this.categorie + " | Trouve ton artisan") 
  }
}
