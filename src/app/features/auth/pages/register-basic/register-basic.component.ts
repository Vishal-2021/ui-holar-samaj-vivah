import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../core/services/auth.service';
import { RegisterRequestModel } from '../../../../core/models/register-request.model';

@Component({
  standalone: true,
  selector: 'app-register-basic',
  templateUrl: './register-basic.component.html',
  styleUrls: ['./register-basic.component.css'],
  imports: [ReactiveFormsModule, CommonModule, RouterModule, HttpClientModule]
})
export class RegisterBasicComponent {
  registerForm: FormGroup;
  isLoading = false;
  errorMessage: string | null = null;
  private authService = inject(AuthService);
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
  //  private authService: AuthService
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      terms: [false, [Validators.requiredTrue]]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value 
      ? null 
      : { mismatch: true };
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMessage = null;

    const formData : RegisterRequestModel = {
      email: this.registerForm.value.email,
      phone: this.registerForm.value.phone,
      password: this.registerForm.value.password
    };

    this.authService.register(formData)
    
   // this.http.post('https://your-api-endpoint.com/register', formData)
      .subscribe({
        next: () => {
          this.router.navigate(['/auth/register-details']);
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = error.error?.message || 
            'Registration failed. Please try again later.';
          console.error('Registration error:', error);
        }
      });
  }
}
