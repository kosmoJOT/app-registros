import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConsultaPokemonApi } from '../interfaces/ListadoPokemon';

@Injectable({
  providedIn: 'root'
})
export class ConsultaPokemonApiService {

  constructor(private http: HttpClient) { }

  getListadoPokemon(url: string): Observable<ConsultaPokemonApi> {
    return this.http.get<ConsultaPokemonApi>(url);
  }
}
