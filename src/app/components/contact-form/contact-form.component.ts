import { Component } from '@angular/core';
import { Titreh2Component } from '../titres/titreh2/titreh2.component';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [Titreh2Component],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

}
