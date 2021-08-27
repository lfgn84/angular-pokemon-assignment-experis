import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IndivdualPokemon} from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-trainer-view',
  templateUrl: './trainer-view.component.html',
  styleUrls: ['./trainer-view.component.css']
})
export class TrainerViewComponent implements OnInit {
  /**
   * Array of objects of IndividualPokemon type where 'catched' pokemons are loaded from sessionStorage
   */
  catchedPokemons: IndivdualPokemon[] = []

  /**
   * Loading router and location as parameters in component's constructor
   */
  constructor(private router: Router) {
  }

  /**
   * Method that triggers when component is mounted. The method verifies if a user is logged in.
   * If user is not logged in, then user will be re-directed to 'Login'/'Landing' view.
   * Method verifies as well if there are 'catched' pokemons stored in sessionStorage. If there are not 'catched'
   * pokemons in sessionStorage, the user will be re-directed to 'catalogue view'.
   */
  ngOnInit(): void {
    if (sessionStorage.userName === "" || !sessionStorage.userName) {
      this.router.navigateByUrl("")
    } else if (!sessionStorage.storedCatchedPokemons || JSON.parse(sessionStorage.storedCatchedPokemons).length === 0) {
      this.router.navigateByUrl("/catalogue")
    }
    this.catchedPokemons = JSON.parse(sessionStorage.storedCatchedPokemons);
  }

}
