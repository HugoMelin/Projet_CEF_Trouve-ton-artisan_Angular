import { Component } from '@angular/core';
import { HowToUseComponent } from '../../components/how-to-use/how-to-use.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HowToUseComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
