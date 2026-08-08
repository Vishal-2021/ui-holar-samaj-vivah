import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";


@Component({
    standalone: true,
    selector: 'app-interests',
    imports : [CommonModule, FormsModule, RouterModule],
    templateUrl: './interests.component.html',
    styleUrls: ['./interests.component.css']
})
export class InterestsComponent{
    
   showReceivedInterests: boolean = true;
   showSentInterests: boolean = false;

   showReceived() {
     this.showReceivedInterests = true;
     this.showSentInterests = false;
   }

   showSent() {
     this.showReceivedInterests = false;
     this.showSentInterests = true;
   }

}