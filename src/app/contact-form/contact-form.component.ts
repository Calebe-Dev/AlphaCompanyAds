import { Component } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  formData = {
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    website: '',
    orcamento: '',
    mensagem: ''
  };

  enviando = false;
  mensagemStatus = '';

  constructor(private emailService: EmailService) {}

  async onSubmit() {
    this.enviando = true;
    this.mensagemStatus = '';

    try {
      await this.emailService.enviarEmail(this.formData);
      this.mensagemStatus = 'Mensagem enviada com sucesso!';
      this.limparFormulario();
    } catch (error) {
      this.mensagemStatus = 'Erro ao enviar mensagem. Tente novamente.';
    } finally {
      this.enviando = false;
    }
  }

  private limparFormulario() {
    this.formData = {
      nome: '',
      email: '',
      telefone: '',
      empresa: '',
      website: '',
      orcamento: '',
      mensagem: ''
    };
  }
}
