import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndivdualPokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-trainer-view',
  templateUrl: './trainer-view.component.html',
  styleUrls: ['./trainer-view.component.css']
})
export class TrainerViewComponent implements OnInit {
  catchedPokemons:IndivdualPokemon[] =[]
  constructor(private router:Router) {
  }

  ngOnInit(): void {
    if(sessionStorage.userName === "" || !sessionStorage.userName){
      this.router.navigateByUrl("")
  }
  this.catchedPokemons = JSON.parse(sessionStorage.storedCatchedPokemons);
  }

}
