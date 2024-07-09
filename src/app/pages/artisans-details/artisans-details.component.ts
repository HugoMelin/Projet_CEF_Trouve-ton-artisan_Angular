import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtisansDataService } from '../../services/artisans-data.service';
import { Titreh1Component } from '../../components/titres/titreh1/titreh1.component';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar.component';
import { ImagesArtisansComponent } from '../../components/images-artisans/images-artisans.component';
import { Titreh2Component } from '../../components/titres/titreh2/titreh2.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-artisans-details',
  standalone: true,
  imports: [Titreh1Component, ProgressBarComponent, ImagesArtisansComponent, Titreh2Component, ContactFormComponent, NgIf],
  templateUrl: './artisans-details.component.html',
  styleUrl: './artisans-details.component.scss'
})
export class ArtisansDetailsComponent {
  routeSub:any
  data:any
  artisansData:any

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private artisansDataService: ArtisansDataService
  ) {}

  ngOnInit() {
    this.artisansData = this.artisansDataService.artisanList

    this.routeSub = this.route.params.subscribe(params => {
      this.data = this.artisansData.find((item: { id: any; }) => item.id === params['id'])
    })

    //Routing content-not-found si utilisation mauvaise id
    if (!this.data) {
      this.router.navigate(["content-not-found"])
    }
  }
}
