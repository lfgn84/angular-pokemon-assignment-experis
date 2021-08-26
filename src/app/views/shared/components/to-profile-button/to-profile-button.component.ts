import { Component, Input, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-to-profile-button',
  templateUrl: './to-profile-button.component.html',
  styleUrls: ['./to-profile-button.component.css']
})
export class ToProfileButtonComponent implements OnInit {
  
  constructor( private router: Router) { }

  ngOnInit(): void {
   
  }
  toProfile(){
    if(sessionStorage.storedCatchedPokemons && JSON.parse(sessionStorage.storedCatchedPokemons).length != 0){
      this.router.navigateByUrl("/trainer")
    }else if (!sessionStorage.storedCatchedPokemons){
      alert("You have not caught any Pokemon!")
    }
      


  }
}
