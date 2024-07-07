import { NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-images-artisans',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase],
  templateUrl: './images-artisans.component.html',
  styleUrl: './images-artisans.component.scss'
})
export class ImagesArtisansComponent {
  @Input() category:any
}
