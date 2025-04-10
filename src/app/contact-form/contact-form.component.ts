import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    company: '',
    budget:'',
    invoicing:'',
    message: ''
  };

  onSubmit() {
    // Here you would implement the email sending logic
    console.log('Form submitted:', this.formData);
    // Reset form after submission
    this.formData = {
      name: '',
      email: '',
      phone: '',
      company: '',
      budget:'',
      invoicing:'',
      message: ''
    };
  }
}
