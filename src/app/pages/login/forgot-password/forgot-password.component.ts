import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";


@Component({
    standalone: true,
    selector: 'app-forgot-password',
    imports : [CommonModule, FormsModule, RouterModule],
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent{
    step = 1; // 1=email, 2=otp, 3=reset password

  email = '';
  otp = '';
  newPassword = '';
  confirmPassword = '';

  message = '';

  // STEP 1 – Send OTP
  sendOtp() {
    if (!this.email) {
      this.message = 'Please enter email';
      return;
    }

    // 🔗 API CALL HERE (send OTP)
    console.log('Sending OTP to:', this.email);

    this.message = 'OTP sent to your email';
    this.step = 2;
  }

  // STEP 2 – Verify OTP
  verifyOtp() {
    if (!this.otp) {
      this.message = 'Please enter OTP';
      return;
    }

    // 🔗 API CALL HERE (verify OTP)
    console.log('Verifying OTP:', this.otp);

    this.message = 'OTP verified';
    this.step = 3;
  }

  // STEP 3 – Reset Password
  resetPassword() {
    if (this.newPassword !== this.confirmPassword) {
      this.message = 'Passwords do not match';
      return;
    }

    // 🔗 API CALL HERE (reset password)
    console.log('Password reset successful');

    this.message = 'Password changed successfully';
  }
}