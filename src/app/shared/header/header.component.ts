import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
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
}
