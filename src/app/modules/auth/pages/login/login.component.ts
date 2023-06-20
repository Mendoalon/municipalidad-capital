import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  user: any;
  hidePassword = true;


  constructor(private fb: FormBuilder,
    private _loginService: LoginService,
    private router: Router) {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }


  onSubmit() {
    if (this.loginForm.valid) {
      this.user = this._loginService.login(this.loginForm.value)

      if (this.user == 'ADMIN') {
        this.router.navigate(['admin/home']);
      }
      else if (this.user == 'COMPANY') {
        this.router.navigate(['admin/home']);
      }
      else if (this.user == 'APPLICANT') {
        this.router.navigate(['admin/home']);
      }
    }
  }

forgotPassword(){

}


}


