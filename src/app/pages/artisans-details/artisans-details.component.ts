import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtisansDataService } from '../../services/artisans-data.service';

@Component({
  selector: 'app-artisans-details',
  standalone: true,
  imports: [],
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
