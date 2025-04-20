import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule , FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-register-details',
  templateUrl: './register-details.component.html',
  styleUrls: ['./register-details.component.css'],
  imports: [CommonModule, FormsModule]
})
export class RegisterDetailsComponent {
    currentStep = 1;
    totalSteps = 4;
    profilePhoto: string | null = null; // Changed to string | null
    
    formData = {
      profilePhoto: null as string | null, // Explicitly typed
      firstName: '',
      lastName: '',
      gender: '',
      dob: '',
      motherTongue: '',
      country: '',
      state: '',
      city: '',
      maritalStatus: '',
      height: null as number | null,
      occupation: '',
      income: null as number | null,
      aboutMe: '',
      partnerExpectations: ''
    };
  
    onFileSelected(event: Event) {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files.length > 0) {
        const file = input.files[0];
        
        // Validate file type and size
        const validTypes = ['image/jpeg', 'image/png'];
        const maxSize = 5 * 1024 * 1024; // 5MB
        
        if (!validTypes.includes(file.type)) {
          alert('Please upload a JPG or PNG image.');
          return;
        }
        
        if (file.size > maxSize) {
          alert('Image size should be less than 5MB.');
          return;
        }
  
        const reader = new FileReader();
        reader.onload = () => {
          this.profilePhoto = reader.result as string;
          this.formData.profilePhoto = this.profilePhoto;
        };
        reader.readAsDataURL(file);
      }
    }

  nextStep(current: number) {
    if (this.validateStep(current)) {
      this.currentStep = current + 1;
    }
  }

  prevStep(current: number) {
    this.currentStep = current - 1;
  }

  validateStep(step: number): boolean {
    // Basic validation for each step
    switch(step) {
      case 1:
        if (!this.formData.firstName || !this.formData.lastName || !this.formData.gender || !this.formData.dob) {
          alert('Please fill all required fields in Basic Information');
          return false;
        }
        break;
      case 2:
        if (!this.formData.motherTongue || !this.formData.country || !this.formData.state) {
          alert('Please fill all required fields in Location & Language');
          return false;
        }
        break;
      case 3:
        if (!this.formData.maritalStatus || !this.formData.height || !this.formData.occupation || !this.formData.income) {
          alert('Please fill all required fields in Personal Details');
          return false;
        }
        break;
      case 4:
        if (!this.formData.aboutMe || !this.formData.partnerExpectations) {
          alert('Please fill all required fields in About Me');
          return false;
        }
        break;
    }
    return true;
  }

  submitForm() {
    if (this.validateStep(this.currentStep)) {
      console.log('Form submitted:', this.formData);
      alert('Profile submitted successfully!');
      // Reset form
      this.currentStep = 1;
      this.profilePhoto = null;
      this.formData = {
        profilePhoto: null,
        firstName: '',
        lastName: '',
        gender: '',
        dob: '',
        motherTongue: '',
        country: '',
        state: '',
        city: '',
        maritalStatus: '',
        height: null,
        occupation: '',
        income: null,
        aboutMe: '',
        partnerExpectations: ''
      };
    }
  }
}
