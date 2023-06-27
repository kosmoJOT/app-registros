import { Component, OnInit } from '@angular/core';

import { ConsultaPokemonApi, ResultadoConsulta } from 'src/app/interfaces/ListadoPokemon';

import { ConsultaPokemonApiService } from 'src/app/services/consulta-pokemon-api.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})

export class PokedexComponent implements OnInit{

  resultadoConsulta: ResultadoConsulta[];
  consultaPokemonApi?: ConsultaPokemonApi;
  minimoId: number = 0;
  maximoId: number = 100;

  constructor(private _serviceConsultaPokemonApi: ConsultaPokemonApiService){
    this.resultadoConsulta = [];
    this.getListadoPokemon();
  }

  ngOnInit(): void {
  }

  getListadoPokemon(){
    this._serviceConsultaPokemonApi.getListadoPokemon(`https://pokeapi.co/api/v2/pokemon?limit=${this.maximoId}&offset=${this.minimoId}`).subscribe( (data) => {
      this.consultaPokemonApi = data;
      this.resultadoConsulta = this.consultaPokemonApi.results;
    });
  }
}
