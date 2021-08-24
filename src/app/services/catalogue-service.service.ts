import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IndivdualPokemon, Pokemon } from '../models/pokemon.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogueServiceService {
  private apiUrl:string = "https://pokeapi.co/api/v2/pokemon?limit=151"
  private apiUrlperPokemon = "https://pokeapi.co/api/v2/pokemon/"

  constructor(private http: HttpClient) { }

  getAllPokemon(): Observable<any[]>{

    return this.http.get<any[]>(this.apiUrl);

  }

  getPokemonByUrl(name:string): Observable<any>{
    console.log(this.apiUrlperPokemon + name)
    return this.http.get<any>(this.apiUrlperPokemon + name)
  }

  buildPokemonObject(pokemon: any): IndivdualPokemon{
    let name =pokemon.name;
    let id = pokemon.id;
    let types = pokemon.types;
    let weight = pokemon.weight;
    let height = pokemon.height;
    let img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + pokemon.baseStats.id + '.png';

    let pokemonObject = {
      baseStats: {img, types, name, id},
      profile: {height, weight}
    };
    return pokemonObject;
  }
}
