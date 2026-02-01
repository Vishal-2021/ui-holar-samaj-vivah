import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-profile-search',
  templateUrl: './profile-search.component.html',
  styleUrls: ['./profile-search.component.css']
})
export class ProfileSearchComponent {
   constructor(private router : Router){}

    goToSearchResult(){
        this.router.navigate(['/search-result']);
    }
}