import { Component, Input } from '@angular/core';
import { Titreh2Component } from '../titres/titreh2/titreh2.component';
import { SendMailService } from '../../services/send-mail.service';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [Titreh2Component, FormsModule, NgIf],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  sent:boolean = false
  error:boolean = false

  @Input() artisanMail:any

  constructor(private sendMailService: SendMailService) {}

  sendMail(form:NgForm) {
    //reset des messages succes et error du formulaire
    this.sent = false
    this.error = false

    //gestion envoie de l'mail en faisant appel à sendMailService
    this.sendMailService.sendMail(form.value,this.artisanMail).subscribe(
      info => {},
      error => {
        //alert succes ou error 
        if (error.status === 200) {
          this.sent = true
          form.resetForm()
        } else {
          this.error = true
        }
      }
    );
  }
}
