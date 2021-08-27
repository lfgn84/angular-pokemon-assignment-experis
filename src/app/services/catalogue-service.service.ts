import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IndivdualPokemon, Pokemon} from '../models/pokemon.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogueServiceService {
  private apiUrl: string = "https://pokeapi.co/api/v2/pokemon?limit=151"
  private apiUrlperPokemon = "https://pokeapi.co/api/v2/pokemon/"

  constructor(private http: HttpClient) {
  }

  /**
   * HTTP call of type GET that fetches all the pokemons and their data from API.
   */
  getAllPokemon(): Observable<any[]> {

    return this.http.get<any[]>(this.apiUrl);

  }

  /**
   * HTTP call of type GET that fetches data of specific pokemon by name from API.
   */
  getPokemonByUrl(name: string): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlperPokemon + name)
  }

}

