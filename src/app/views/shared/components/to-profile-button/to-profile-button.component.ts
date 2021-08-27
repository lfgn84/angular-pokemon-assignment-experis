import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-to-profile-button',
  templateUrl: './to-profile-button.component.html',
  styleUrls: ['./to-profile-button.component.css']
})
export class ToProfileButtonComponent implements OnInit {
  /**
   * Loading router as parameter in component's constructor
   */
  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  /**
   * Method triggered on 'Go to trainer' button that routes the user to
   * trainer/profile view ONLY if 'catched' pokemons are stored in sessionStorage.
   * Otherwise it shows the user an alert pop-up reminding that there's no 'catched pokemons' stored.
   */
  toProfile() {
    if (sessionStorage.storedCatchedPokemons && JSON.parse(sessionStorage.storedCatchedPokemons).length > 0) {
      this.router.navigateByUrl("/trainer")
    } else if (!sessionStorage.storedCatchedPokemons || JSON.parse(sessionStorage.storedCatchedPokemons).length < 1) {
      alert("You have not caught any Pokemon!")
    }


  }
}
