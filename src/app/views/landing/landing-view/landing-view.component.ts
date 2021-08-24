import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { Subscription } from 'rxjs';
import { LandingServiceService } from 'src/app/services/landing-service.service';

@Component({
  selector: 'app-landing-view',
  templateUrl: './landing-view.component.html',
  styleUrls: ['./landing-view.component.css']
})
export class LandingViewComponent implements OnInit {
 // subscription: Subscription;
  showLandingView: boolean = true;

  
  constructor(private landingService: LandingServiceService ,private router:Router) {
    //this.subscription = this.landingService.onToggle().subscribe(value => this.showLandingView = value)
   }

  ngOnInit(): void {
    //this.toggleLandingView()
    //this.hasRoute("'/'")
  }
  hasRoute(route: string){
    return this.router.url === route;

  }
  toggleLandingView(){
    this.landingService.toggleLandingView();
  }
}
