import { Component, OnInit } from '@angular/core';

import { ConsultaPokemonApi, ResultadoConsulta } from 'src/app/interfaces/ListadoPokemon';
import { Pokemon } from 'src/app/interfaces/Pokemon';

import { ConsultaPokemonApiService } from 'src/app/services/consulta-pokemon-api.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})

export class PokedexComponent implements OnInit{

  resultadoConsulta: ResultadoConsulta[];
  listadoPokemon: Pokemon[];
  consultaPokemonApi?: ConsultaPokemonApi;
  minimoId: number = 22;
  maximoId: number = 41;

  constructor(private _serviceConsultaPokemonApi: ConsultaPokemonApiService){
    this.resultadoConsulta = [];
    this.listadoPokemon = [];
    this.getListadoPokemon();
  }

  ngOnInit(): void {
  }

  getListadoPokemon(){
    this._serviceConsultaPokemonApi.getListadoPokemon(this.maximoId, this.minimoId).subscribe( (data) => {
      this.consultaPokemonApi = data;
      this.resultadoConsulta = this.consultaPokemonApi.results;
      for (let item of this.resultadoConsulta) {
        this.getPokemonInformacion(item.name);
      }
    });
  }

  getPokemonInformacion(nombre: string){
    this._serviceConsultaPokemonApi.getInformacionPokemon(nombre).subscribe( (data) => {
      data.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`
      this.listadoPokemon.push(data);
      console.log(this.listadoPokemon)
    });
  }
}
