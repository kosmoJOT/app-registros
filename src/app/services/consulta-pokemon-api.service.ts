import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConsultaPokemonApi } from '../interfaces/ListadoPokemon';
import { Pokemon } from '../interfaces/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class ConsultaPokemonApiService {

  constructor(private http: HttpClient) { }

  getListadoPokemon(maximoId: number, minimoId: number): Observable<ConsultaPokemonApi> {
    const URL = `https://pokeapi.co/api/v2/pokemon?limit=${maximoId-1}&offset=${minimoId-1}`;
    return this.http.get<ConsultaPokemonApi>(URL);
  }

  getInformacionPokemon(nombre: string): Observable<Pokemon>{
    const URL = `https://pokeapi.co/api/v2/pokemon/${nombre}`;
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
    return this.http.get<Pokemon>(URL);
  }
}
