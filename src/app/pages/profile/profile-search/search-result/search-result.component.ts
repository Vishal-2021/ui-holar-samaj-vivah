import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PagesService } from '../../../pages.service';
import { ChangeDetectorRef } from '@angular/core';

interface Profile {
  user_id: number;
  full_name: string;
  education: string;
  profession: string;
  location: string;
  income: string;
  photo_url?: string;
}

@Component({
  standalone: true,
  selector: 'app-search-result',
  imports: [CommonModule, RouterModule],
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnInit {
  profiles: Profile[] = [];

  currentPage = 1;
  profilesPerPage = 2;
  totalRecords = 0;

  constructor(private pageService: PagesService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadProfiles();
  }




  loadProfiles() {
    const criteria = this.pageService.getCriteria();

    const payload = {
      ...criteria,
      page: this.currentPage,
      perPage: this.profilesPerPage,
    };

    this.pageService.searchProfiles(payload).subscribe({
      next: (res: { status: string; data: Profile[]; totalRecords?: number }) => {
        if (res.status === 'SUCCESS') {
          this.profiles = res.data;          
          this.totalRecords = res.totalRecords ?? res.data.length;
          this.cdr.detectChanges()
        }
      },
      error: (err) => {
        console.error('Search API error', err);
      },
    });
  }

  get totalPages(): number {
    return Math.ceil(this.totalRecords / this.profilesPerPage);
  }

  changePage(page: number) {
    this.currentPage = page;
    this.loadProfiles();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadProfiles();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadProfiles();
    }
  }

  changePageSize(event: Event) {
    this.profilesPerPage = +(event.target as HTMLSelectElement).value;
    this.currentPage = 1;
    this.loadProfiles();
  }

  get resultsFrom(): number {
    return (this.currentPage - 1) * this.profilesPerPage + 1;
  }

  get resultsTo(): number {
    const end = this.currentPage * this.profilesPerPage;
    return end > this.totalRecords ? this.totalRecords : end;
  }
}
