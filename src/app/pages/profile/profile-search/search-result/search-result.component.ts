import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    standalone: true,
    selector: 'app-search-result',
    imports: [CommonModule],
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.css']
})
export class  SearchResultComponent{
    profiles = [
    {
      id: 1,
      name: 'Alex Johnson',
      income: '$85,000',
      location: 'New York, NY',
      education: 'MBA, Harvard University',
      profession: 'Financial Analyst',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
    },
    {
      id: 2,
      name: 'Maria Garcia',
      income: '$95,000',
      location: 'San Francisco, CA',
      education: 'MS Computer Science, Stanford University',
      profession: 'Software Engineer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786'
    },
    {
      id: 3,
      name: 'Robert Chen',
      income: '$120,000',
      location: 'Chicago, IL',
      education: 'PhD Physics, MIT',
      profession: 'Data Scientist',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
    },
    {
      id: 4,
      name: 'Sarah Williams',
      income: '$75,000',
      location: 'Austin, TX',
      education: 'BS Nursing, University of Texas',
      profession: 'Registered Nurse',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
    },
    {
      id: 5,
      name: 'James Wilson',
      income: '$150,000',
      location: 'Seattle, WA',
      education: 'JD, Yale Law School',
      profession: 'Corporate Lawyer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
    },
    {
      id: 6,
      name: 'Lisa Thompson',
      income: '$65,000',
      location: 'Miami, FL',
      education: 'BFA, RISD',
      profession: 'Graphic Designer',
      image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e'
    },
    {
      id: 7,
      name: 'David Miller',
      income: '$110,000',
      location: 'Boston, MA',
      education: 'MBA, Wharton',
      profession: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d'
    },
    {
      id: 8,
      name: 'Emma Davis',
      income: '$80,000',
      location: 'Denver, CO',
      education: 'MS Environmental Science',
      profession: 'Environmental Consultant',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb'
    }
  ];

  currentPage = 1;
  profilesPerPage = 6;

  get totalPages(): number {
    return Math.ceil(this.profiles.length / this.profilesPerPage);
  }

  get paginatedProfiles() {
    const start = (this.currentPage - 1) * this.profilesPerPage;
    return this.profiles.slice(start, start + this.profilesPerPage);
  }

  changePage(page: number) {
    this.currentPage = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  changePageSize(event: Event) {
    this.profilesPerPage = +(event.target as HTMLSelectElement).value;
    this.currentPage = 1;
  }


  get resultsFrom(): number {
  return (this.currentPage - 1) * this.profilesPerPage + 1;
}

get resultsTo(): number {
  const end = this.currentPage * this.profilesPerPage;
  return end > this.profiles.length ? this.profiles.length : end;
}

}