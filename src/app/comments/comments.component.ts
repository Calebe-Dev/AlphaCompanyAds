import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  host: { 'ngSkipHydration': '' } // Pula a hidratação para este componente
})
export class CommentsComponent {
  ngOnInit() {
    this.loadCommentsWidget();
  }

  private loadCommentsWidget() {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }
}
