import { Component } from '@angular/core';
import { Titreh2Component } from '../titres/titreh2/titreh2.component';
import { SendMailService } from '../../services/send-mail.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [Titreh2Component],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  name= "Hugo Melin"
  to= "artisans@mail.com"
  subject= "Test mail"
  email= "Test@mail.com"
  message= "test"

  constructor(private sendMailService: SendMailService) {}

  sendMail() {
    this.sendMailService.sendMail(this.name, this.email, this.to, this.subject, this.message).subscribe(
      response => {
        console.log('Email sent successfully!')
      },
      error => {
        console.log('Error sending email:', error)
      }
    );
  }
}
