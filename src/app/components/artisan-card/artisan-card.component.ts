import { NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ImagesArtisansComponent } from '../images-artisans/images-artisans.component';

@Component({
  selector: 'app-artisan-card',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, ImagesArtisansComponent],
  templateUrl: './artisan-card.component.html',
  styleUrl: './artisan-card.component.scss'
})
export class ArtisanCardComponent {
  @Input() data:any
}
