import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PagesService } from '../pages.service';

interface Interest {
  interest_id: number;
  user_id: number;
  name: string;
  age: number;
  location: string;
  education: string;
  photo: string;
  status: string;
}

@Component({
  standalone: true,
  selector: 'app-interests',
  imports: [CommonModule, FormsModule],
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  currentUserId: number = 10;
  receiverId: number = 3;

  receivedInterests: Interest[] = [];
  loading: boolean = false;

  constructor(private pagesService: PagesService) {}

  ngOnInit(): void {
    this.getReceivedInterests();
  }

  // GET Received Interests
  getReceivedInterests(): void {
    this.loading = true;

    this.pagesService.getReceivedInterests(this.currentUserId).subscribe({
      next: (response) => {
        console.log('GET Interest Response:', response);

        if (response?.status === 'SUCCESS') {
          this.receivedInterests = (response.data || []).map(
            (item: any) => this.mapInterest(item)
          );
        } else {
          this.receivedInterests = [];
        }

        this.loading = false;
      },
      error: (error) => {
        console.error('GET Interest Error:', error);
        this.receivedInterests = [];
        this.loading = false;
      }
    });
  }

  // Map API Response
  private mapInterest(item: any): Interest {
    return {
      interest_id: Number(item.id),
      user_id: Number(item.sender_id),
      name: item.full_name || 'Unknown',
      age: this.calculateAge(item.date_of_birth),
      location: item.current_address || item.native_place || 'Not specified',
      education: item.education || 'Not specified',
      photo: this.getPhotoUrl(item.photo_url),
      status: item.status || 'pending'
    };
  }

  // Calculate Age
  private calculateAge(dateOfBirth: string): number {
    if (!dateOfBirth) {
      return 0;
    }

    const dob = new Date(dateOfBirth);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const month = today.getMonth() - dob.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    return age;
  }

  // Photo URL
  private getPhotoUrl(photoUrl: string): string {
    if (!photoUrl) {
      return 'assets/images/default-profile.png';
    }

    if (photoUrl.startsWith('http')) {
      return photoUrl;
    }

    return `https://holarsamaj.in/api${photoUrl}`;
  }

  // POST Send Interest
  sendInterest(): void {
    console.log('Sending Interest:', {
      sender_id: this.currentUserId,
      receiver_id: this.receiverId
    });

    this.pagesService.sendInterest(
      this.currentUserId,
      this.receiverId
    ).subscribe({
      next: (response) => {
        console.log('SEND Interest Response:', response);

        if (response?.status === 'SUCCESS') {
          alert(response.message || 'Interest sent successfully!');
        } else {
          alert(response?.message || 'Unable to send interest.');
        }
      },
      error: (error) => {
        console.error('SEND Interest Error:', error);
        alert('Send interest API failed.');
      }
    });
  }
}