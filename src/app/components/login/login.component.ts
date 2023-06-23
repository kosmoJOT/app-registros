import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

import { UserLogin } from '../../models/UserLogin';
import { ValidUser } from 'src/app/models/ValidUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;
  loading: boolean = false;

  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar) {
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
      this.loading = false;
    }, 3000);
  }
}
