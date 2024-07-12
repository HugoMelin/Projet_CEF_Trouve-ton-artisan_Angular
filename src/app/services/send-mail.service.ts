import { Injectable } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  async sendMail(data:any, artisanMail:any) {
    const mail = {
      name: `${data.nom} ${data.prenom}`,
      to: artisanMail,
      mail: data.mail,
      subject: data.objet,
      message: data.message
    }
    
    try {
      await emailjs
        .send('service_iaromaw','template_jhvks4r', mail, {
          publicKey: 'uwTGqWk7A9XbDFeUR',
        })
    } catch (e) {
      throw new Error('Services : ' + (e as EmailJSResponseStatus).text)
    }
  }
}
