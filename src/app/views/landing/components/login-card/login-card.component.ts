import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, Routes} from '@angular/router';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
/**
 * Component that handles the 'login' method at Login view
 */
export class LoginCardComponent implements OnInit {
  userName: string = "";

  //routerLink: string = '';

  /**
   * Loading router as parameter in components constructor
   *
   */
  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  /**
   * Method triggered when a user submits its name on login input.
   * The method verifies that the input on input field is not blank
   * and opens an alert pop-up in case the user haven't enter a name.
   * If the name is valid the user is re-directed to the catalogue view.
   */
  submitName() {
    if (this.userName !== "") {
      sessionStorage.userName = this.userName;
      this.router.navigateByUrl("/catalogue")
    } else {
      alert("Please enter a name.")

    }

  }


}
