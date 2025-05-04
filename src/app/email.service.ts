import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private readonly serviceID = environment.emailjs.serviceId;
  private readonly templateID = environment.emailjs.templateId;

  constructor() {
    emailjs.init(environment.emailjs.publicKey ?? '');
  }

  async enviarEmail(form: HTMLFormElement): Promise<void> {
    try {
      const response = await emailjs.sendForm(
        this.serviceID ?? '',
        this.templateID ?? '',
        form
      );
      return;
    } catch (error) {
      throw error;
    }
  }
}