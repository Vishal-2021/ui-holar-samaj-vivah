import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private timeout: any;
  private readonly IDLE_TIME = 30 * 60 * 1000; // 30 minute for testing

  constructor(private router: Router) {}

  startWatching() {

    this.resetTimer();

    window.addEventListener('mousemove', () => this.resetTimer());
    window.addEventListener('keydown', () => this.resetTimer());
    window.addEventListener('click', () => this.resetTimer());
    window.addEventListener('scroll', () => this.resetTimer());

  }

  resetTimer() {

    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {

      this.logout();

    }, this.IDLE_TIME);

  }

  logout() {

    localStorage.clear();

    alert('Session expired due to inactivity');

    this.router.navigate(['/login']);

  }

}