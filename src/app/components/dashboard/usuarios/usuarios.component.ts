import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Usuario } from 'src/app/interfaces/Usuario';

const listUsuarios: Usuario[] = [
  {usuario: "jo", nombre: 'Jose', apellido: "Olarte", sexo: 'Masculino'},
  {usuario: "at", nombre: 'Alejandro', apellido: "Torres", sexo: 'Masculino'},
  {usuario: "lt", nombre: 'Luz', apellido: "Torres", sexo: 'Femenino'},
  {usuario: "mt", nombre: 'Marina', apellido: "Torres", sexo: 'Femenino'},
  {usuario: "jo", nombre: 'Jose', apellido: "Olarte", sexo: 'Masculino'},
  {usuario: "at", nombre: 'Alejandro', apellido: "Torres", sexo: 'Masculino'},
  {usuario: "lt", nombre: 'Luz', apellido: "Torres", sexo: 'Femenino'},
  {usuario: "mt", nombre: 'Marina', apellido: "Torres", sexo: 'Femenino'}
];

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements AfterViewInit{
  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones'];
  dataSource = new MatTableDataSource(listUsuarios);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
