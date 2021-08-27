import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-to-catalogue-button',
  templateUrl: './to-catalogue-button.component.html',
  styleUrls: ['./to-catalogue-button.component.css']
})
export class ToCatalogueButtonComponent implements OnInit {

  /**
   * Loading router as parameter in component's constructor
   */
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  /**
   * Method triggered on 'Go to catalogue' button that routes the user to
   * catalogue view
   */
  toCatalogue() {
    this.router.navigateByUrl("/catalogue")
  }

}
