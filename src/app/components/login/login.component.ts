import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { UserLogin } from '../../interfaces/UserLogin';
import { ValidUser } from 'src/app/models/ValidUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;
  loading: boolean = false;

  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  startSesion(){
    const USER: UserLogin = {
      user: this.form.value.user,
      password: this.form.value.password
    }

    if (USER.user === ValidUser.user && USER.password === ValidUser.password) {
      this.loadingDashboard();
    } else {
      this.showError();
      this.form.reset();
    }
  }

  showError(){
    this._snackBar.open('Invalid User or Password', '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

  loadingDashboard(){
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['dashboard']);
    }, 3000);
  }
}
