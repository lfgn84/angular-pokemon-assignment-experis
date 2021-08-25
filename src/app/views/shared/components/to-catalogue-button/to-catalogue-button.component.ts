import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-to-catalogue-button',
  templateUrl: './to-catalogue-button.component.html',
  styleUrls: ['./to-catalogue-button.component.css']
})
export class ToCatalogueButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toCatalogue(){
    this.router.navigateByUrl("/catalogue")
  }

}
