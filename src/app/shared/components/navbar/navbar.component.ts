// src/app/shared/components/navbar/navbar.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


 searchOpen: boolean = false;

 toggleMenu(): void {
  const overlay = document.getElementById('navOverlay') as HTMLElement | null;
  if (overlay) {
    overlay.classList.toggle('show');
  }
}
 ngOnInit(){
   // this.toggleSearch();
 }

 toggleSearch(): void {
  const input = document.querySelector('.search-input') as HTMLInputElement | null;
  const logo = document.getElementById('logo') as HTMLElement | null;
  const menuToggle = document.getElementById('menuToggle') as HTMLElement | null;
  const searchIcon = document.getElementById('searchIcon') as HTMLElement | null;
  const backArrow = document.getElementById('backArrow') as HTMLElement | null;

  this.searchOpen = !this.searchOpen;

  if (this.searchOpen) {
    if (input) {
      input.classList.add('show');
    }
    if (window.innerWidth < 600) {
      if (logo) {
        logo.style.display = 'none';
      }
      if (menuToggle) {
        menuToggle.style.display = 'none';
      }
      if (backArrow) {
        backArrow.style.display = 'inline-block';
      }
    }
    if (input) {
      input.focus();
    }
  } else {
    if (input) {
      input.classList.remove('show');
    }
    if (logo) {
      logo.style.display = 'block';
    }
    if (window.innerWidth < 600) {
      if (menuToggle) {
        menuToggle.style.display = 'block';
      }
    }
    if (searchIcon) {
      searchIcon.style.display = 'inline-block';
    }
    if (backArrow) {
      backArrow.style.display = 'none';
    }
  }
}

}
