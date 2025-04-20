import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-register-basic',
  templateUrl: './register-basic.component.html',
  styleUrls: ['./register-basic.component.css'],
  imports: [RouterModule]
})
export class RegisterBasicComponent {
  fullName = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor() {}

  onSubmit(): void {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('Registering user:', {
      fullName: this.fullName,
      email: this.email,
      password: this.password
    });

    // TODO: Call your AuthService to register
  }
}
