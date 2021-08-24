import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../../../models/pokemon.model";
import {CatalogueServiceService as CatalogueService} from "../../../../services/catalogue-service.service"

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
chosenPokemon = {}
@Input() pokemon: Pokemon = {name:"", url:""};
showPokemonDetails : boolean = false
  constructor(private catalogueService : CatalogueService) { }

  ngOnInit(): void {
  }
showDetails(){
  // @ts-ignore
  this.chosenPokemon = this.catalogueService.getPokemonByUrl(this.pokemon.name).subscribe(this.showPokemonDetails = true)
  }

}
