import { Component } from '@angular/core';
import { PagesService } from '../pages.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { from } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  imports: [CommonModule, FormsModule, RouterModule]
})

export class RegisterComponent {

  email: string = '';
  password: string = '';
  name: string = '';
  mobile: string = '';

  message: string = '';
  isSuccess: boolean = false;

  constructor(private pagesService: PagesService, private cdr: ChangeDetectorRef) {}

  register(form: NgForm) {    

    if(form.invalid){
      form.control.markAllAsTouched();
      return
    }

    const data = {
      email: this.email,
      password: this.password,
      name: this.name,
      mobile_number: this.mobile
    };

    this.pagesService.userregister(data).subscribe({
      next: (response: any) => {
        console.log('Register Success:', response);
        this.isSuccess = true;
        this.message = response?.message || '🎉 Registration successful!';        
        this.cdr.detectChanges()
        // Example: save token
        localStorage.setItem('token', response.token);

        setTimeout(() => {
          this.message = '';
          this.cdr.detectChanges()
        }, 3000);
      },
      error: (error) => {
        console.error('Register Error:', error);

        this.isSuccess = false;
        this.message = error?.error?.message || '❌ Registration failed. Try again.';
        
        this.cdr.detectChanges()
        setTimeout(() => {
          this.message = '';
          this.cdr.detectChanges()
        }, 3000);
      }
    });
  }

}