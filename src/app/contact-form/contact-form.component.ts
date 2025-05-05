import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class ContactFormComponent implements OnInit {
  @ViewChild('form') formElement!: ElementRef;

  formData = {
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    faturamento: ''
    // orcamento: ''
   // mensagem: ''
  };

  statusEnvio = {
    enviando: false,
    sucesso: false,
    erro: false,
    mensagem: ''
  };

  constructor(private emailService: EmailService) {}

  ngOnInit() {}

  async onSubmit() {
    this.statusEnvio.enviando = true;
    this.statusEnvio.erro = false;
    this.statusEnvio.sucesso = false;
    
    try {
      if (!this.validarFormulario()) {
        throw new Error('Por favor, preencha todos os campos obrigatórios corretamente.');
      }

      await this.emailService.enviarEmail(this.formElement.nativeElement);
      
      this.statusEnvio.sucesso = true;
      this.statusEnvio.mensagem = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
      this.limparFormulario();
      
    } catch (erro: any) {
      console.error('Erro ao enviar formulário:', erro);
      this.statusEnvio.erro = true;
      
      if (erro.status === 400) {
        this.statusEnvio.mensagem = 'Dados inválidos. Por favor, verifique as informações e tente novamente.';
      } else {
        this.statusEnvio.mensagem = erro.text || 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.';
      }
    } finally {
      this.statusEnvio.enviando = false;
    }
  }

  private validarFormulario(): boolean {
    return (
      !!this.formData.nome &&
      !!this.formData.email &&
      this.validarEmail(this.formData.email) &&
      !!this.formData.telefone 
     // &&
     // !!this.formData.orcamento 
    );
     // !!this.formData.mensagem
    
  

  }
  
  private validarEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  private limparFormulario() {
    this.formData = {
      nome: '',
      email: '',
      telefone: '',
      empresa: '',
      faturamento: ''
      // orcamento: ''
    //  mensagem: ''
    };
  }
}
