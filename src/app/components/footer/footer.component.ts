import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ FontAwesomeModule ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  faLocationDot = faLocationDot
  faPhone = faPhone
}
