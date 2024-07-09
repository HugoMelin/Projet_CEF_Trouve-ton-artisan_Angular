import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {
  private emailUrl = 'http://localhost:3000/send-email';

  constructor(private http: HttpClient) { }

  sendMail(data:any, artisanMail:any) {
    const mail = {
      name: `${data.nom} ${data.prenom}`,
      to: artisanMail,
      from: data.mail,
      subject: data.objet,
      text: data.message
    }
    return this.http.post(this.emailUrl, mail);
  }
}
