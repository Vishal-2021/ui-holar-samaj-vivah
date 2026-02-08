import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PagesService } from '../pages.service';

@Component({
  standalone: true,
  selector: 'app-profile',
  imports: [FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor (
                private cdr: ChangeDetectorRef,
                private pagesService: PagesService
              ){}

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


    onImageSelected(event: Event){
      const fileInput = event.target as HTMLInputElement
      
      if(fileInput.files && fileInput.files.length > 0){
        this.selectedFile = fileInput.files[0];

        const reder = new FileReader();
        reder.onload = ()=> {
          this.imagePreview = reder.result;
          this.cdr.detectChanges()
        };
        reder.readAsDataURL(this.selectedFile);
      }
    }

    addProfile(){
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
        blood_group:  this.profile.blood_group,
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
      }
      console.log(data)

      this.pagesService.userprofiles(data).subscribe({
        next: (Response: any)=>{
          console.log("profile Add", Response)
        },
        error: (error) =>{
          console.error('profile Error:', error);
        }

      })
    }
}