import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtisansDataService } from '../../services/artisans-data.service';
import { Titreh1Component } from '../../components/titres/titreh1/titreh1.component';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar.component';
import { ImagesArtisansComponent } from '../../components/images-artisans/images-artisans.component';
import { Titreh2Component } from '../../components/titres/titreh2/titreh2.component';

@Component({
  selector: 'app-artisans-details',
  standalone: true,
  imports: [Titreh1Component, ProgressBarComponent, ImagesArtisansComponent, Titreh2Component],
  templateUrl: './artisans-details.component.html',
  styleUrl: './artisans-details.component.scss'
})
export class ArtisansDetailsComponent {
  routeSub:any
  data:any
  artisansData:any

  constructor(
    private route: ActivatedRoute,
    private artisansDataService: ArtisansDataService
  ) {}

  ngOnInit() {
    this.artisansData = this.artisansDataService.artisanList

    this.routeSub = this.route.params.subscribe(params => {
      this.data = this.artisansData.find((item: { id: any; }) => item.id === params['id'])
    })
  }
}
