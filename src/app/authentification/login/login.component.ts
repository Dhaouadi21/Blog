
import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(

    private authService: AuthserviceService,
    private _router: Router
  ) { }

  login() {
    // if (this.loginForm.invalid) {
    //   return
    // }
    this.authService.getUsers().subscribe((response: any) => {
      console.log(response);
      const found = response.find((user: any) =>
        user.email == this.loginForm?.value.email &&
        user.password == this.loginForm?.value.password)
      console.log(found);
      if (found) {
        this._router.navigate(["article"])
      }
      else {
        alert('Verifier L\'Email ou le Mot de passe ')

      }
    }, (error) => {

    })
  }
}
