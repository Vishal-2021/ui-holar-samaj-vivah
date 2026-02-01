import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-search-result',
  imports: [CommonModule, RouterModule],
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent {




  profiles = [
    {
      id: 1,
      name: 'Alex Johnson',
      income: '$85,000',
      location: 'New York, NY',
      education: 'MBA, Harvard University',
      profession: 'Financial Analyst',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    },
    {
      id: 2,
      name: 'Maria Garcia',
      income: '$95,000',
      location: 'San Francisco, CA',
      education: 'MS Computer Science, Stanford University',
      profession: 'Software Engineer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786',
    },
    {
      id: 3,
      name: 'Robert Chen',
      income: '$120,000',
      location: 'Chicago, IL',
      education: 'PhD Physics, MIT',
      profession: 'Data Scientist',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    },
    {
      id: 4,
      name: 'Sarah Williams',
      income: '$75,000',
      location: 'Austin, TX',
      education: 'BS Nursing, University of Texas',
      profession: 'Registered Nurse',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    },
    {
      id: 5,
      name: 'James Wilson',
      income: '$150,000',
      location: 'Seattle, WA',
      education: 'JD, Yale Law School',
      profession: 'Corporate Lawyer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    },
    {
      id: 6,
      name: 'Lisa Thompson',
      income: '$65,000',
      location: 'Miami, FL',
      education: 'BFA, RISD',
      profession: 'Graphic Designer',
      image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e',
    },
    {
      id: 7,
      name: 'David Miller',
      income: '$110,000',
      location: 'Boston, MA',
      education: 'MBA, Wharton',
      profession: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
    },
    {
      id: 8,
      name: 'Emma Davis',
      income: '$80,000',
      location: 'Denver, CO',
      education: 'MS Environmental Science',
      profession: 'Environmental Consultant',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    },
    {
      id: 9,
      name: 'Michael Brown',
      income: '$140,000',
      location: 'Los Angeles, CA',
      education: 'MD, Johns Hopkins University',
      profession: 'Surgeon',
      image:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 10,
      name: 'Olivia Taylor',
      income: '$90,000',
      location: 'Portland, OR',
      education: 'MA Psychology, University of California, Los Angeles',
      profession: 'Clinical Psychologist',
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 11,
      name: 'Daniel Martinez',
      income: '$125,000',
      location: 'Atlanta, GA',
      education: 'MS Civil Engineering, Georgia Institute of Technology',
      profession: 'Project Manager',
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 12,
      name: 'Sophia Lee',
      income: '$70,000',
      location: 'Phoenix, AZ',
      education: 'BA Education, Arizona State University',
      profession: 'High School Teacher',
      image:
        'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 13,
      name: 'William Clark',
      income: '$135,000',
      location: 'Dallas, TX',
      education: 'MBA, University of Chicago',
      profession: 'Investment Banker',
      image:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 14,
      name: 'Ava Rodriguez',
      income: '$88,000',
      location: 'San Diego, CA',
      education: 'MS Marine Biology, Scripps Institution',
      profession: 'Marine Biologist',
      image:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 15,
      name: 'Ethan White',
      income: '$115,000',
      location: 'Washington, DC',
      education: 'MPP, Georgetown University',
      profession: 'Policy Analyst',
      image:
        'https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 16,
      name: 'Mia Anderson',
      income: '$95,000',
      location: 'Philadelphia, PA',
      education: 'PharmD, University of Pennsylvania',
      profession: 'Pharmacist',
      image:
        'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 17,
      name: 'Noah Harris',
      income: '$105,000',
      location: 'Houston, TX',
      education: 'MS Petroleum Engineering, Texas A&M',
      profession: 'Petroleum Engineer',
      image:
        'https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 18,
      name: 'Isabella Martin',
      income: '$82,000',
      location: 'Orlando, FL',
      education: 'BS Hospitality Management, Cornell University',
      profession: 'Hotel Manager',
      image:
        'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
  ];

  currentPage = 1;
  profilesPerPage = 8;

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
