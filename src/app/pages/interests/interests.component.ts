import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Interest {
  interest_id: number;
  user_id: number;
  name: string;
  age: number;
  location: string;
  education: string;
  photo: string;
  status: 'pending' | 'accepted' | 'rejected';
  online?: boolean;
}

@Component({
  standalone: true,
  selector: 'app-interests',
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent {

  activeTab: 'received' | 'sent' = 'received';

  /* ==========================================
     RECEIVED INTERESTS
  ========================================== */

  receivedInterests: Interest[] = [

    {
      interest_id: 1,
      user_id: 101,
      name: 'Priya Sharma',
      age: 25,
      location: 'Mumbai, Maharashtra',
      education: 'MBA',
      photo: 'assets/images/priya.jpg',
      status: 'pending',
      online: true
    },

    {
      interest_id: 2,
      user_id: 102,
      name: 'Rahul Patil',
      age: 28,
      location: 'Pune, Maharashtra',
      education: 'MCA',
      photo: 'assets/images/rahul.jpg',
      status: 'pending',
      online: false
    },

    {
      interest_id: 3,
      user_id: 103,
      name: 'Neha Singh',
      age: 26,
      location: 'Nashik, Maharashtra',
      education: 'M.Com',
      photo: 'assets/images/neha.jpg',
      status: 'accepted',
      online: true
    }

  ];


  /* ==========================================
     SENT INTERESTS
  ========================================== */

  sentInterests: Interest[] = [

    {
      interest_id: 4,
      user_id: 104,
      name: 'Pooja More',
      age: 24,
      location: 'Nashik, Maharashtra',
      education: 'MBA',
      photo: 'assets/images/pooja.jpg',
      status: 'pending',
      online: false
    },

    {
      interest_id: 5,
      user_id: 105,
      name: 'Ananya Patel',
      age: 27,
      location: 'Pune, Maharashtra',
      education: 'B.Tech',
      photo: 'assets/images/ananya.jpg',
      status: 'accepted',
      online: true
    }

  ];


  constructor(
    private router: Router
  ) {}


  /* ==========================================
     ACCEPTED COUNT
  ========================================== */

  get acceptedCount(): number {

    return this.receivedInterests
      .filter(interest => interest.status === 'accepted')
      .length;

  }


  /* ==========================================
     SWITCH TAB
  ========================================== */

  showReceived(): void {

    this.activeTab = 'received';

  }


  showSent(): void {

    this.activeTab = 'sent';

  }


  /* ==========================================
     ACCEPT INTEREST
  ========================================== */

  acceptInterest(interest: Interest): void {

    interest.status = 'accepted';

    console.log(
      'Accepted:',
      interest
    );

  }


  /* ==========================================
     REJECT INTEREST
  ========================================== */

  rejectInterest(interest: Interest): void {

    const confirmReject = confirm(
      `Reject interest from ${interest.name}?`
    );

    if (!confirmReject) {
      return;
    }

    this.receivedInterests =
      this.receivedInterests.filter(
        item =>
          item.interest_id !== interest.interest_id
      );

    console.log(
      'Rejected:',
      interest
    );

  }


  /* ==========================================
     WITHDRAW INTEREST
  ========================================== */

  withdrawInterest(interest: Interest): void {

    const confirmWithdraw = confirm(
      `Withdraw your interest from ${interest.name}?`
    );

    if (!confirmWithdraw) {
      return;
    }

    this.sentInterests =
      this.sentInterests.filter(
        item =>
          item.interest_id !== interest.interest_id
      );

    console.log(
      'Withdrawn:',
      interest
    );

  }


  /* ==========================================
     OPEN MESSAGE
  ========================================== */

  openMessage(interest: Interest): void {

    console.log(
      'Open chat with:',
      interest.name
    );

    this.router.navigate([
      '/messages',
      interest.user_id
    ]);

  }

}