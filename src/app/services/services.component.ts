import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  features: string[];
  cardIndex?: number;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services: ServiceCard[] = [
    {
      icon: 'bi bi-bullseye',
      title: 'Criação De Anúncios',
      description: 'Criação profissional de campanhas para maximizar seu ROI.',
      features: ['Google Ads', 'Meta Ads', 'Otimização'],
      cardIndex: 0
    },
    {
      icon: 'bi bi-mortarboard',
      title: 'Mentoria',
      description: 'Consultoria especializada para acelerar seu crescimento.',
      features: ['Marketing', 'Estratégia', 'Capacitação']
    },
    {
      icon: 'bi bi-graph-up',
      title: 'Otimização De Tráfego Pago',
      description: 'Otimizaçãoe de tráfego com foco em resultados reais.',
      features: ['Otimização', 'Conversão', 'ROI']
    },
    {
      icon: 'bi bi-window',
      title: 'Criação de Sites e LPs',
      description: 'Desenvolvimento de sites profissionais e páginas de alta conversão.',
      features: ['Sites', 'Landing Pages', 'Otimização']
    },
    {
      icon: 'bi bi-palette',
      title: 'Criação de Logo Marca',
      description: 'Design profissional para fortalecer sua identidade visual.',
      features: ['Logo Design', 'Branding', 'Manual da Marca']
    },
    {
      icon: 'bi bi-google',
      title: 'Google Meu Negócio',
      description: 'Otimização completa do seu perfil empresarial no Google.',
      features: ['Otimização', 'Gerenciamento', 'Avaliações']
    }
  ];
}
