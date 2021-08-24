import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-landing-view',
  templateUrl: './landing-view.component.html',
  styleUrls: ['./landing-view.component.css']
})
export class LandingViewComponent implements OnInit {
 
  constructor(private router:Router, private _location: Location) {
   
   }

  ngOnInit(): void {
    if(sessionStorage.userName){
      this._location.back();
      
  }
  }
  hasRoute(route: string){
    return this.router.url === route;

  }
  
  
}
