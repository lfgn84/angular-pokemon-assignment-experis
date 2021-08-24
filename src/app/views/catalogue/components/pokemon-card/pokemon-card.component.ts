import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../../../models/pokemon.model";

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
@Input() pokemon: Pokemon = {name:"", url:""};
  constructor() { }

  ngOnInit(): void {
  }

}
