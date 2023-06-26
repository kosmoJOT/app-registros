import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

import { GeneroService } from 'src/app/services/genero.service';
import { Genero } from 'src/app/interfaces/Genero';
import { Usuario } from 'src/app/interfaces/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {

  form: FormGroup;

  generos: Genero[] = [];

  constructor(private _generoService: GeneroService, private formBuilder: FormBuilder, private usuarioService: UsuarioService, private router: Router, private _snackBar: MatSnackBar){
    this.form = this.formBuilder.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getGenero();
  }

  agregarUsuario(){
    const USER: Usuario = {
      usuario: this.form.value.usuario,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      sexo: this.form.value.sexo
    }
    this.usuarioService.agregarUsuario(USER);
    this.mostrarMensaje();
    this.router.navigate(['/dashboard/usuarios']);
  }

  getGenero(){
    this._generoService.getGenero().subscribe( (result) => {
      this.generos = result;
    });
  }

  mostrarMensaje(){
    this._snackBar.open('Usuario Agregado', '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}
