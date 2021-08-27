import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-log-out-button',
  templateUrl: './log-out-button.component.html',
  styleUrls: ['./log-out-button.component.css']
})
export class LogOutButtonComponent implements OnInit {

  /**
   * Loading router as parameter in component's constructor
   */
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  /**
   * Method triggered when 'Logout' button is pressed. The method clears out sessionStorage
   * and re-directs user to Login/Landing view.
   */
  logOut() {
    if (confirm("If you log out your 'catched' pokemons will reset. Want to proceed ?")) {
      sessionStorage.clear()
      this.router.navigateByUrl("")
    }
}

}
