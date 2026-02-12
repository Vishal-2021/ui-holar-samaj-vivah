import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PagesService } from '../../pages.service';

@Component({
  standalone: true,
  selector: 'app-profile-search',
  imports:[FormsModule],
  templateUrl: './profile-search.component.html',
  styleUrls: ['./profile-search.component.css']
})
export class ProfileSearchComponent {
   constructor(
              private router : Router,
              private pagesService: PagesService
              ){}

  search = {
      gender: 'Female',     // Bride = Female, Groom = Male
      location: '',
      profession: '',
      minIncome:'',
      maxIncome:''
    };


    goToSearchResult(){
        this.pagesService.setCriteria(this.search)
        console.log(this.pagesService.getCriteria())
        this.router.navigate(['/search-result']);
    }
}