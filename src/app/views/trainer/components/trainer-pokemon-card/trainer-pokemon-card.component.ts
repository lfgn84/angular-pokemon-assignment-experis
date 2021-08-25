import { Component, Input, OnInit } from '@angular/core';
import { IndivdualPokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-trainer-pokemon-card',
  templateUrl: './trainer-pokemon-card.component.html',
  styleUrls: ['./trainer-pokemon-card.component.css']
})
export class TrainerPokemonCardComponent implements OnInit {
  @Input() catchedPokemon:IndivdualPokemon = {catched:true, baseStats: {img:"",types:"",name:"",id:0}, profile:{height:0,weight:0}}
  constructor() { }

  ngOnInit(): void {

  }

}
