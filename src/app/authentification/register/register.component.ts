import { Component } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  },
    {
      validators: this.passwordMatchValidator,
    })




  submitted = false
  constructor(private authservice: AuthserviceService, private _router: Router) { }

  register() {
    if (this.userForm.invalid) {
      return
    }
    this.authservice.registerUser(this.userForm.value).subscribe((response: any) => {
      console.log(response);
      this._router.navigate(["login"])
    }, (error) => {
      console.log(error);

    })
  }
  passwordMatchValidator(control: AbstractControl) {
    return control.get('password')?.value ===
      control.get('confirmPassword')?.value
      ? null
      : { mismatch: true }
  }

}
