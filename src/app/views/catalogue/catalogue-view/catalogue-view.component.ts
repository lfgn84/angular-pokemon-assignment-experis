import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {IndivdualPokemon, Pokemon} from 'src/app/models/pokemon.model';
import { CatalogueServiceService as CatalogueService} from 'src/app/services/catalogue-service.service';
import {Observable} from "rxjs";
@Component({
  selector: 'app-catalogue-view',
  templateUrl: './catalogue-view.component.html',
  styleUrls: ['./catalogue-view.component.css']
})
export class CatalogueViewComponent implements OnInit {
  allPokemons: any = []
  catchedPokemons: IndivdualPokemon[] = []
  isTrainerEmpty: boolean = true;
  
  constructor(private router:Router, private catalogueService: CatalogueService) { }

   ngOnInit  () {
    if(sessionStorage.userName === "" || !sessionStorage.userName){
        this.router.navigateByUrl("")
    }
    this.catalogueService.getAllPokemon().subscribe((pokes:any)=> {
      this.allPokemons = pokes.results
     
    })
     if(sessionStorage.storedCatchedPokemons){
       this.catchedPokemons = JSON.parse(sessionStorage.storedCatchedPokemons);
      }

  }

  showArray(){
    //console.log(this.allPokemons)
  }

  pushPokemon(value: IndivdualPokemon){
    console.log("Logging from parent : "+JSON.stringify(value))
    if(sessionStorage.storedCatchedPokemons){
      this.catchedPokemons = JSON.parse(sessionStorage.storedCatchedPokemons);

    }
    this.catchedPokemons.push(value)
    sessionStorage.storedCatchedPokemons = JSON.stringify(this.catchedPokemons)
   //this.catchedPokemons.push(value)
  }

  removePokemon(value: IndivdualPokemon){
    if(sessionStorage.storedCatchedPokemons){
      this.catchedPokemons = JSON.parse(sessionStorage.storedCatchedPokemons);

    }
    let indexToRemove = this.catchedPokemons.indexOf(value)
    this.catchedPokemons.splice(indexToRemove,1)
    sessionStorage.storedCatchedPokemons = JSON.stringify(this.catchedPokemons)
  }

}
