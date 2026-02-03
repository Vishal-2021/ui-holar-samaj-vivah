import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule, RouterModule ]
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  login() {
    const data = {
      email: this.email,
      password: this.password
    };

    this.authService.login(data).subscribe({
      next: (response: any) => {
        console.log('Login Success:', response);

        // Example: save token
        localStorage.setItem('token', response.token);
      },
      error: (error) => {
        console.error('Login Error:', error);
      }
    });

  }



}