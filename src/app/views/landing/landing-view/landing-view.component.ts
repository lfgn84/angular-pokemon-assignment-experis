import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router'
import {Subscription} from 'rxjs';
import {Location} from '@angular/common';

@Component({
  selector: 'app-landing-view',
  templateUrl: './landing-view.component.html',
  styleUrls: ['./landing-view.component.css']
})
export class LandingViewComponent implements OnInit {
  /**
   * Loading router and location as parameters in component's constructor
   */
  constructor(private router: Router, private _location: Location) {
  }

  /**
   * Method triggered when component mounts. If a user is 'logged in' already it re-directs the user to
   * the view where they were previously.
   */
  ngOnInit(): void {
    if (sessionStorage.userName) {
      this._location.back();

    }
  }


}
