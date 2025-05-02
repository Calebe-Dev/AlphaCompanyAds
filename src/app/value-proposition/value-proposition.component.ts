import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ValueCard {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-value-proposition',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './value-proposition.component.html',
  styleUrl: './value-proposition.component.css'
})
export class ValuePropositionComponent {
  valueCards: ValueCard[] = [
    {
      icon: 'bi bi-people-fill',
      title: 'Buyer Persona',
      description: 'Construímos o perfil do cliente ideal para estratégias precisas e direcionadas.'
    },
    {
      icon: 'bi bi-google',
      title: 'Google Ads',
      description: 'Campanhas otimizadas para performance e retorno, com especialista certificado Google.'
    },
    {
      icon: 'bi bi-instagram',
      title: 'Instagram e Facebook Ads',
      description: 'Metodologia estratégica nas maiores plataformas de atenção do mundo.'
    },
    {
      icon: 'bi bi-graph-up',
      title: 'Relatórios Inteligentes',
      description: 'Relatórios claros e periódicos para decisões mais seguras.'
    }
  ];
}
