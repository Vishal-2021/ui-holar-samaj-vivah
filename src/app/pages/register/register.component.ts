import { Component } from '@angular/core';
import { PagesService } from '../pages.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  imports: [CommonModule, FormsModule]
})
export class RegisterComponent {

  email: string = '';
  password: string = '';
  name: string = '';
  mobile: string = '';

  constructor(private pagesService: PagesService) {}

  register() {
    const data = {
      email: this.email,
      password: this.password,
      name: this.name,
      mobile_number: this.mobile
    };

    this.pagesService.userregister(data).subscribe({
      next: (response: any) => {
        console.log('Register Success:', response);

        // Example: save token
        localStorage.setItem('token', response.token);
      },
      error: (error) => {
        console.error('Register Error:', error);
      }
    });
  }

}