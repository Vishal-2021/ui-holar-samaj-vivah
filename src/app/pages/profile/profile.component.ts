import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PagesService } from '../pages.service';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
@Component({
  standalone: true,
  selector: 'app-profile',
  imports: [FormsModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(
    private cdr: ChangeDetectorRef,
    private pagesService: PagesService
  ) {}

  isProfileExists = false;
  isEditMode = false;

  imagePreview: string | ArrayBuffer | null = null;
  selectedFile!: File;

  profile = {
    created_for: '',
    full_name: '',
    gender: '',
    marital_status: '',
    date_of_birth: '',
    birth_time: '',
    birth_day: '',
    birth_place: '',
    height_feet: null,
    height_inches: null,
    weight_kg: null,
    complexion: '',
    blood_group: '',
    education: '',
    job: '',
    annual_income: '',
    father_name: '',
    father_job: '',
    mother_name: '',
    mother_job: '',
    native_place: '',
    current_address: '',
    other_relatives: '',
    expectations: ''
  };

  ngOnInit(): void {

    const id = Number(localStorage.getItem('user_id'));

    if (id) {

      this.pagesService.getProfileById(id).subscribe({

        next: (res: any) => {

          console.log(res);

          // profile exists
          if (res && res.profile_id) {

            this.isProfileExists = true;

           Object.assign(this.profile, {
            created_for: res.created_for || '',
            full_name: res.full_name || '',
            gender: res.gender || '',
            marital_status: res.marital_status || '',
            date_of_birth: res.date_of_birth || '',
            birth_time: res.birth_time || '',
            birth_day: res.birth_day || '',
            birth_place: res.birth_place || '',

            height_feet: res.height_feet || null,
            height_inches: res.height_inches || null,

            weight_kg: res.weight_kg || null,

            complexion: res.complexion || '',
            blood_group: res.blood_group || '',

            education: res.education || '',
            job: res.job || '',
            annual_income: res.annual_income || '',

            father_name: res.father_name || '',
            father_job: res.father_job || '',

            mother_name: res.mother_name || '',
            mother_job: res.mother_job || '',

            native_place: res.native_place || '',
            current_address: res.current_address || '',
            other_relatives: res.other_relatives || '',

            expectations: res.expectations || ''

          });
            
            // image preview
            if (res.photo_url) {

              this.imagePreview =
                'https://holarsamaj.in/api' + res.photo_url;
              console.log("this is photo url ",this.imagePreview);
            }
            
          }
           this.cdr.detectChanges();
        },

        error: (err) => {
          console.log(err);
        }

      });

    }

  }

  onImageSelected(event: Event) {

    const fileInput = event.target as HTMLInputElement;

    if (fileInput.files && fileInput.files.length > 0) {

      this.selectedFile = fileInput.files[0];

      const reader = new FileReader();

      reader.onload = () => {

        this.imagePreview = reader.result;

        this.cdr.detectChanges();

      };

      reader.readAsDataURL(this.selectedFile);

    }

  }

  uploadPhoto() {

    const formData = new FormData();

    formData.append('profile_photo', this.selectedFile);

    formData.append(
      'user_id',
      localStorage.getItem('user_id') || ''
    );

    this.pagesService.uploadImage(formData).subscribe({

      next: (response: any) => {
        console.log('Image uploaded:', response);
      },

      error: (error) => {
        console.error('Image upload error:', error);
      }

    });

  }

  addProfile(form: NgForm) {
    if (form.invalid) {

      alert('Please fill all required fields');

      return;
    }

    if (!this.isProfileExists && !this.selectedFile) {

      alert('Please select a profile photo');

      return;
    }
    const data = {

      user_id: Number(localStorage.getItem('user_id')),

      created_for: this.profile.created_for,
      full_name: this.profile.full_name,
      gender: this.profile.gender,
      marital_status: this.profile.marital_status,
      date_of_birth: this.profile.date_of_birth,
      birth_time: this.profile.birth_time,
      birth_day: this.profile.birth_day,
      birth_place: this.profile.birth_place,

      height_feet: this.profile.height_feet,
      height_inches: this.profile.height_inches,

      weight_kg: this.profile.weight_kg,

      complexion: this.profile.complexion,
      blood_group: this.profile.blood_group,

      education: this.profile.education,
      job: this.profile.job,
      annual_income: this.profile.annual_income,

      father_name: this.profile.father_name,
      father_job: this.profile.father_job,

      mother_name: this.profile.mother_name,
      mother_job: this.profile.mother_job,

      native_place: this.profile.native_place,
      current_address: this.profile.current_address,
      other_relatives: this.profile.other_relatives,

      expectations: this.profile.expectations

    };

    console.log(data);

    this.pagesService.userprofiles(data).subscribe({

      next: (response: any) => {

        console.log('Profile Add', response);

        if (this.selectedFile) {

          const formData = new FormData();

          formData.append('profile_photo', this.selectedFile);

          formData.append('user_id', localStorage.getItem('user_id') || ''
          );

          this.pagesService.uploadImage(formData).subscribe({

            next: (res: any) => {

              console.log('Upload success:', res);

              alert('Profile saved successfully ✅');
               this.isEditMode = false;

            },

            error: (err) => {

              console.error('Upload error:', err);

              alert('Profile saved but photo failed ❌');

            }

          });

        } else {

         // alert('Profile Saved (No Photo)');
          alert('Profile updated successfully ✅');

          this.isEditMode = false;

        }

      },

      error: (error) => {

        console.error('Profile Error:', error);

        alert('Something went wrong ❌');

      }

    });

  }

  enableEdit() {

    this.isEditMode = true;

  }

}