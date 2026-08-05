import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CommonModule } from "@angular/common";
import { PagesService } from "../../../../pages.service";

@Component({
  selector: 'app-profile-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  profile: any = null;

  constructor(
    private route: ActivatedRoute,
    private pageService: PagesService,
    private cd: ChangeDetectorRef   
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];

      if (id) {
        this.loadProfile(id);
      }
    });
  }

  loadProfile(id: number) {
    this.profile = null; 
    this.pageService.getProfileById(id).subscribe({
      next: (res: any) => {
        this.profile = res?.data || res;
        console.log(this.profile)
        this.cd.detectChanges(); 
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });
  }
}