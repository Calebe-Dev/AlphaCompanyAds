import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-authority',
  templateUrl: './authority.component.html',
  styleUrls: ['./authority.component.css']
})
export class AuthorityComponent {
  clientCount: number = 0;
  satisfactionRate: number = 0;
  rating: number = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.initCounterObserver();
  }

  private initCounterObserver() {
    // Verifica se está no navegador antes de acessar o DOM
    if (isPlatformBrowser(this.platformId)) {
      const statsContainer = document.querySelector('.stats-container');
      if (!statsContainer) {
        console.error('Stats container not found');
        return;
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.startCounting();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });

      observer.observe(statsContainer);
    } else {
      console.warn('initCounterObserver called on the server');
    }
  }

  private startCounting() {
    this.animateCounter(0, 100, 2000, (value) => this.clientCount = value);
    this.animateCounter(0, 98, 2000, (value) => this.satisfactionRate = value);
    this.animateCounter(0, 5, 1000, (value) => this.rating = value);
  }

  private animateCounter(start: number, end: number, duration: number, callback: (value: number) => void) {
    const startTime = performance.now();
    
    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const value = Math.floor(start + (end - start) * this.easeOutQuart(progress));
      callback(value);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  }

  private easeOutQuart(x: number): number {
    return 1 - Math.pow(1 - x, 4);
  }
}
