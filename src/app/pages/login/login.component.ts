import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

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

  loginFailedMessage: string = '';
  
  constructor(
              private authService: AuthService, 
              private router: Router,
              private cdr: ChangeDetectorRef
            ) {}

  login(form:NgForm) {
    if(form.invalid){
      form.control.markAllAsTouched()
      return
    }

    this.loginFailedMessage = '';

    const data = {
      email: this.email,
      password: this.password
    };

    this.authService.login(data).subscribe({
      next: (response: any) => {
        if (response.status === 'SUCCESS'){
          console.log('Login Success:', response);
          localStorage.setItem('user_id', response.user.user_id);
          localStorage.setItem('email', response.user.email)

          
          this.router.navigate(['/profile']);
          // Example: save token
          // localStorage.setItem('token', response.token);
        }
        else{
          this.loginFailedMessage = response.message || 'Invalid login credentials';
          
          this.cdr.detectChanges()
          setTimeout(() => {
            this.loginFailedMessage = '';
            this.cdr.detectChanges()
         }, 3000);
        }
      },
      error: (error) => {
        console.error('Login Error:', error);
        this.loginFailedMessage =  error?.error?.message || 'Something went wrong. Please try again.';
        this.cdr.detectChanges()
      }
    });

  }



}