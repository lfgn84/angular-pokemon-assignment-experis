import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogueServiceService {
  private apiUrl:string = "https://pokeapi.co/api/v2/pokemon?limit=151"

  constructor(private http: HttpClient) { }

  getAllPokemon(): Observable<any[]>{

    return this.http.get<any[]>(this.apiUrl);

  }
}
