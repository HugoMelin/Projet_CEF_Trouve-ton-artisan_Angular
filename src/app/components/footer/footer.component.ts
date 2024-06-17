import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ FontAwesomeModule, RouterLink ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  faLocationDot = faLocationDot
  faPhone = faPhone
}
