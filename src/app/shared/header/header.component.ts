import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  constructor(public router: Router, public authService: AuthService){}

    ngAfterViewInit() {
        const hamburger = document.getElementById('hamburger')
        const navLinks = document.getElementById('navLinks')

        hamburger?.addEventListener('click', ()=>{
          navLinks?.classList.toggle('active')
        });

        document.querySelectorAll('.nav-links a').forEach(link =>{
          link.addEventListener('click', ()=> {
            navLinks?.classList.remove('active')
          });
        });
    }

    logout(){
      this.authService.logout();
      this.router.navigate(['/login']);
    }

}
