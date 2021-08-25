import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IndivdualPokemon, Pokemon} from "../../../../models/pokemon.model";
import {CatalogueServiceService as CatalogueService} from "../../../../services/catalogue-service.service"

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
chosenPokemon: IndivdualPokemon = {baseStats: {img:"",types:"",name:"",id:0}, profile:{height:0,weight:0}}
  @Output() onCatchingPokemon : EventEmitter<IndivdualPokemon> = new EventEmitter();
  @Input() pokemon: Pokemon = { name:"", url:""};
  @Input() pokemonIndex: number = 0;
  catched : boolean = false;
  // @ts-ignore
  constructor(private catalogueService : CatalogueService) { }

  ngOnInit(): void {
    this.catalogueService.getPokemonByUrl(this.pokemon.name).subscribe((chosen:any)=>{
    this.chosenPokemon = this.buildPokemonObject(chosen);
      console.log(this.chosenPokemon)

    });
  }

  buildPokemonObject(pokemon: any): IndivdualPokemon{
    let name =pokemon.name;
    let id = pokemon.id;
    let types = pokemon.types;
    let weight = pokemon.weight;
    let height = pokemon.height;
    let img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + pokemon.id + '.png';

    let pokemonObject = {
      baseStats: {img:img, types:types, name:name, id:id},
      profile: {height:height, weight:weight}
    };
    return pokemonObject;
  }

  assignIndex(index:number){
      return index + 1
  }

  catchPokemon(){
    this.catched = true;
    this.onCatchingPokemon.emit(this.chosenPokemon)

  }

  releasePokemon(){
    this.catched = false
  }



}
