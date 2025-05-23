import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ServicesComponent } from "./services/services.component";
import { HeroComponent } from "./hero/hero.component";
import { StrengthsComponent } from './strengths/strengths.component';
import { FooterComponent } from "./footer/footer.component";
import { ValuePropositionComponent } from "./value-proposition/value-proposition.component";
import { AuthorityComponent } from "./authority/authority.component";
import { ConsultingFormComponent } from "./consulting-form/consulting-form.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { CommentsComponent } from './comments/comments.component';

@Component({
  selector: 'app-root',
  imports: [ HeaderComponent, AboutComponent, ContactComponent, ServicesComponent, HeroComponent, StrengthsComponent, FooterComponent, ValuePropositionComponent, AuthorityComponent, ConsultingFormComponent, ContactFormComponent, CommentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AlphaCompanyAds';
}
