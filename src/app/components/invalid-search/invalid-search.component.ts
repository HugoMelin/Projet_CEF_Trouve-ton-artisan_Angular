import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-invalid-search',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './invalid-search.component.html',
  styleUrl: './invalid-search.component.scss'
})
export class InvalidSearchComponent {
  faCircleXmark = faCircleXmark
}
