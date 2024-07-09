import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {
  private emailUrl = 'http://localhost:3000/send-email';

  constructor(private http: HttpClient) { }

  sendMail(name: string, email: string, to:string, subject:string, message: string) {
    const data = {
      name: name,
      from: email,
      to: to,
      subject: subject,
      text: message
    };
    return this.http.post(this.emailUrl, data);
  }
}
