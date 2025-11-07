import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-connect',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.scss'
})
export class ConnectComponent {
   form = {
    subject: '',
    message: '',
    email: '',
    mobile: ''
  };

  successMessage = '';

  submitForm(formRef: NgForm) {
    if (formRef.valid) {
      console.debug('Contact Form Submitted:', this.form);
      this.successMessage = 'Your message has been sent successfully!';
      // Reset form after submission
      formRef.resetForm();
    }
  }
}
