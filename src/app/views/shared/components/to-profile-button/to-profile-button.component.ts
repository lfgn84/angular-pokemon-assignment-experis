import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-to-profile-button',
  templateUrl: './to-profile-button.component.html',
  styleUrls: ['./to-profile-button.component.css']
})
export class ToProfileButtonComponent implements OnInit {
  isTrainerEmpty: boolean = true;
  constructor( private router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.storedCatchedPokemons){
      this.isTrainerEmpty = false;
    }else if(!sessionStorage.storedCatchedPokemons){
      this.isTrainerEmpty = true;

    }
  }
  toProfile(){
      this.router.navigateByUrl("/trainer")


  }
}
