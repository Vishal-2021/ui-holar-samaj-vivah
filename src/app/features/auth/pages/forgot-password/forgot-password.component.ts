import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  imports: [RouterModule]
})
export class ForgotPasswordComponent {
  email: string = '';

 

  onSubmit() {
    console.log('Reset password link sent to:', this.email);
    // TODO: Call your AuthService to send reset link
  }
}
