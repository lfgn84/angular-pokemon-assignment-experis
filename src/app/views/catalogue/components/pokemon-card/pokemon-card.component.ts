import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IndivdualPokemon, Pokemon} from "../../../../models/pokemon.model";
import {CatalogueServiceService as CatalogueService} from "../../../../services/catalogue-service.service"

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
/**
 * Pokemon card component where each and every Pokemon's picture, name , weight and height are displayed on catalogue.
 */
export class PokemonCardComponent implements OnInit {
  /**
   * Initialized pokemon object of IndividualPokemon type to assign data related to the specific pokemon.
   */
  chosenPokemon: IndivdualPokemon = {
    catched: false,
    baseStats: {img: "", types: "", name: "", id: 0},
    profile: {height: 0, weight: 0}
  }

  /**
   * EventEmitter that sends an object to parent component of IndividualPokemon type to be added to sessionStorage
   * as a caught pokemon.
   */
  @Output() onCatchingPokemon: EventEmitter<IndivdualPokemon> = new EventEmitter();

  /**
   * EventEmitter that sends an object to parent component of IndividualPokemon type to be removed from sessionStorage
   * from the  caught pokemons.
   */
  @Output() onReleasePokemon: EventEmitter<IndivdualPokemon> = new EventEmitter();

  /**
   * Parameter of Pokemon type inserted from parent to let us fetch the data from the specific pokemon on API
   */
  @Input() pokemon: Pokemon = {name: "", url: ""};

  /**
   * Parameter with the index of the specific pokemon object on catalogue
   */
  @Input() pokemonIndex: number = 0;

  /**
   * Loading catalogueService in constructor to make HTTP calls and fetch data.
   * @param catalogueService HTTP methods using HTTPClient
   */
  constructor(private catalogueService: CatalogueService) {
  }

  /**
   * Method that triggers when component is mounted. It uses the catalogueService loaded in constructor
   * to make a HTTP GET request that fetches data from the specified Pokemon that correspond to this card.
   * Once the data is fetched, the data is parsed into an object of IndividualPokemon type.
   * A verifier is implemented that checks if given pokemon is "caught"/already stored in sessionStorage
   * as 'catched'. If this is true the property 'catched' for this pokemon object is designated to true.
   *
   */
  ngOnInit(): void {
    this.catalogueService.getPokemonByUrl(this.pokemon.name).subscribe((chosen: any) => {
      this.chosenPokemon = this.buildPokemonObject(chosen);
      if (sessionStorage.storedCatchedPokemons) {
        let tempArray = JSON.parse(sessionStorage.storedCatchedPokemons);
        for (let i = 0; i < tempArray.length; i++) {
          if (tempArray[i].baseStats.id === this.chosenPokemon.baseStats.id) {
            this.chosenPokemon.catched = true;
            break;
          }
        }
      }
    });
  }

  /**
   * Method that parses data from API to an object of IndividualPokemon type.
   * @param pokemon Object fetched from API with data from specific Pokemon
   */
  buildPokemonObject(pokemon: any): IndivdualPokemon {
    let name = pokemon.name;
    let id = pokemon.id;
    let types = pokemon.types;
    let weight = pokemon.weight / 10;
    let height = pokemon.height / 10;
    let img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + pokemon.id + '.png';

    let pokemonObject = {
      catched: false,
      baseStats: {img: img, types: types, name: name, id: id},
      profile: {height: height, weight: weight}
    };
    return pokemonObject;
  }

  /**
   * Method applied in HTML template to the source of the image element to fetch right
   * pokemon picture
   * @param index index value from parent component
   */
  assignIndex(index: number) {
    return index + 1
  }

  /**
   * Method that changes the chosenPokemon object's 'catched' property to true and
   * emit an object of type IndividualPokemon to parent component to be added to sessionStorage's parsed array
   * as a 'catched' pokemon
   */
  catchPokemon() {
    this.chosenPokemon.catched = true;
    this.onCatchingPokemon.emit(this.chosenPokemon)
  }

  /**
   * Method that changes the chosenPokemon object's 'catched' property to false and
   * emit an object of type IndividualPokemon to parent component to be removed from sessionStorage's parsed array
   * as a 'catched' pokemon
   */

  releasePokemon() {
    this.chosenPokemon.catched = false;
    this.onReleasePokemon.emit(this.chosenPokemon)
  }


}
