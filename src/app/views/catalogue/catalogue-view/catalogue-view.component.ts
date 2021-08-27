import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IndivdualPokemon, Pokemon} from 'src/app/models/pokemon.model';
import {CatalogueServiceService as CatalogueService} from 'src/app/services/catalogue-service.service';

@Component({
  selector: 'app-catalogue-view',
  templateUrl: './catalogue-view.component.html',
  styleUrls: ['./catalogue-view.component.css']
})
/**
 * View that displays the catalogue of the 151 available Pokemons
 */
export class CatalogueViewComponent implements OnInit {
  /**
   * allPokemons: Array containing all the 'pokemon' objects from given API
   * catchedPokemons: Array containing parsed objects of the 'IndividualPokemon' interface which represent
   * the pokemon objects chosen by the user to be 'caught'.
   */
  allPokemons: any = []
  catchedPokemons: IndivdualPokemon[] = []

  constructor(private router: Router, private catalogueService: CatalogueService) {
  }

  /**
   * Method that triggers when component is mounted. Method handles verifying of a logged in user or not.
   * if a user is not logged in and the user tries to access view, the user will be re-directed to the login
   * view to proceed with login.
   * The method invokes the catalogueService to make an HTTP request to the designated API and fetch an array
   * with all the pokemon-objects to be parsed and displayed in catalogue.
   * The method checks if there is already 'catched/caught' pokemon objects in sessionStorage and if this is true
   * then they will be automatically parsed into the 'catchedPokemons' array.
   */
  ngOnInit() {
    if (sessionStorage.userName === "" || !sessionStorage.userName) {
      this.router.navigateByUrl("")
    }
    this.catalogueService.getAllPokemon().subscribe((pokes: any) => {
      this.allPokemons = pokes.results

    })
    if (sessionStorage.storedCatchedPokemons) {
      this.catchedPokemons = JSON.parse(sessionStorage.storedCatchedPokemons);
    }

  }

  /**
   * Method triggered when child component ('pokemon-card-component') emit an object of type
   * IndividualPokemon, and then push this object into sessionStorage's parsed array.
   * @param value object of IndividualPokemon type
   */
  pushPokemon(value: IndivdualPokemon) {
    if (sessionStorage.storedCatchedPokemons) {
      this.catchedPokemons = JSON.parse(sessionStorage.storedCatchedPokemons);

    }
    this.catchedPokemons.push(value)
    sessionStorage.storedCatchedPokemons = JSON.stringify(this.catchedPokemons)
  }

  /**
   * Method triggered when child component ('pokemon-card-component') emit an object of type
   * IndividualPokemon, and then remove this object from sessionStorage's parsed array.
   * @param value object of IndividualPokemon type
   */
  removePokemon(value: IndivdualPokemon) {
    if (sessionStorage.storedCatchedPokemons) {
      this.catchedPokemons = JSON.parse(sessionStorage.storedCatchedPokemons);
    }
    let indexToRemove = this.catchedPokemons.indexOf(value)
    this.catchedPokemons.splice(indexToRemove, 1)
    sessionStorage.storedCatchedPokemons = JSON.stringify(this.catchedPokemons)
  }

}
