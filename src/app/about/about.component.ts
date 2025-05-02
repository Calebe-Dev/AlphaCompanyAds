import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AboutCard {
  icon: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  title = 'Sobre Nós';
  subtitle = 'Transformando ideias em resultados digitais';

  aboutCards: AboutCard[] = [
    {
      icon: 'bi bi-rocket-takeoff',
      description: 'Somos uma agência de marketing com foco na criação de campanhas estratégicas para impulsionar sua presença digital e atrair clientes qualificados.'
    },
    {
      icon: 'bi bi-graph-up-arrow',
      description: 'Nossa equipe de especialistas combina criatividade e análise de dados para desenvolver estratégias personalizadas que geram resultados mensuráveis.'
    },
    {
      icon: 'bi bi-trophy',
      description: 'Com anos de experiência no mercado e um histórico comprovado de sucesso, estamos comprometidos em ser mais do que uma agência - somos parceiros no crescimento do seu negócio.'
    }
  ];
}
