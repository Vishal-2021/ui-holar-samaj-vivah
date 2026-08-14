import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SessionService } from './core/services/session.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {



  constructor(private sessionService: SessionService, private router: Router){  }

    // Hide footer on Messages
  isMessagesPage(): boolean { 
    return this.router.url.startsWith('/messages');
  }

   // Hide footer on Interests
  isInterestsPage(): boolean {
    return this.router.url.startsWith('/interests');
  }

  isProfilePage(): boolean {
    return this.router.url.startsWith('/profile');
  }

  isSearchPage(): boolean {
    return this.router.url.startsWith('/search');
  }

  isSubscriptionPage(): boolean {
    return this.router.url.startsWith('/subscription');
  }

  ngOnInit(): void{
    this.sessionService.startWatching();
  }
}
