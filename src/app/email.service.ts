import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor() {
    // Inicialize com seu User ID do EmailJS
    emailjs.init("SEU_USER_ID");
  }

  async enviarEmail(formData: any) {
    try {
      const response = await emailjs.send(
        "SEU_SERVICE_ID", // ID do serviço EmailJS
        "SEU_TEMPLATE_ID", // ID do template
        {
          nome: formData.nome,
          email: formData.email,
          telefone: formData.telefone,
          empresa: formData.empresa,
          website: formData.website,
          orcamento: formData.orcamento,
          mensagem: formData.mensagem
        }
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
}