import { Component } from '@angular/core';
import { HowToUseComponent } from '../../components/how-to-use/how-to-use.component';
import { ArtisansDuMoisComponent } from '../../components/artisans-du-mois/artisans-du-mois.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HowToUseComponent, ArtisansDuMoisComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
