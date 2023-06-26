import { Injectable } from '@angular/core';

import { Usuario } from '../interfaces/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: "jo", nombre: 'Jose', apellido: "Olarte", sexo: 'Masculino'},
    {usuario: "at", nombre: 'Alejandro', apellido: "Torres", sexo: 'Masculino'},
    {usuario: "lt", nombre: 'Luz', apellido: "Torres", sexo: 'Femenino'},
    {usuario: "mt", nombre: 'Marina', apellido: "Torres", sexo: 'Femenino'},
    {usuario: "jo", nombre: 'Jose', apellido: "Olarte", sexo: 'Masculino'},
    {usuario: "at", nombre: 'Alejandro', apellido: "Torres", sexo: 'Masculino'},
    {usuario: "lt", nombre: 'Luz', apellido: "Torres", sexo: 'Femenino'},
    {usuario: "mt", nombre: 'Marina', apellido: "Torres", sexo: 'Femenino'}
  ];

  constructor() { }

  getUsuarios() {
    return this.listUsuarios.slice()
  }

  eliminarUsuario(index: number) {
    this.listUsuarios.splice(index, 1);
  }
}
