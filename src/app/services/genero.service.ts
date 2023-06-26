import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Genero } from '../interfaces/Genero';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  constructor(private http: HttpClient) { }

  getGenero(): Observable<Genero[]> {
    return this.http.get<Genero[]>('./assets/data/generos.json');
  }
}
