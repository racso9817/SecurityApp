import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
// import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{


  loginForm: FormGroup = Object.create(null);
  invalidUser = false;
  constructor(private auth: AuthService, private router: Router,
    ) {

  }

  recoverform = false;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required]),
      'contrasenia': new FormControl(null, [Validators.required]),
    });
    if (localStorage.getItem('Usuario') !== null) {
      this.router.navigate(['/dashboard/dashboard1']);
    }
  }

  // loginform = true;

  showRecoverForm() {
    // this.loginform = !this.loginform;
    // this.recoverform = !this.recoverform;
  }

  async Ingresar() {
    // this.spinner.show();
    const {email, contrasenia} = this.loginForm.value;
    try {
      // console.log(email);
      const user = await this.auth.loginWithFirebasePersistence(email, contrasenia);
      console.log(user);
      if (user['user']['email'] !== null) {
        // console.log('ok');
        await this.router.navigate(['/dashboard/dashboard1']);
        // this.spinner.hide();
      }
    } 
    catch (error) {
      // console.log(error);
      this.invalidUser = true;
      // this.spinner.hide();
    }
    window.location.reload();
  }

}