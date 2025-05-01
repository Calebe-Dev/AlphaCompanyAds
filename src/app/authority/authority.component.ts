import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authority',
  templateUrl: './authority.component.html',
  styleUrls: ['./authority.component.css']
})
export class AuthorityComponent implements OnInit {
  clientCount: number = 0;
  satisfactionRate: number = 0;
  rating: number = 0;

  ngOnInit() {
    this.initCounterObserver();
  }

  private initCounterObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.startCounting();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const statsContainer = document.querySelector('.stats-container');
    if (statsContainer) {
      observer.observe(statsContainer);
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
