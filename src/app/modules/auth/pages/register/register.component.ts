import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService} from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit{
  registerForm!: FormGroup;
  hidePassword = true;

  constructor(private formBuilder: FormBuilder,
              private _registerService: RegisterService ) { }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
    }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
      cuil: ['', Validators.required],
    },{
      /*validator: MustMatch('password', 'confirmPassword')*/
    });
  }

  register() {

    // Lógica para registrar al usuario

    /*function MustMatch(controlName: string, matchingControlName: string) {
     return (formGroup: FormGroup) => {
         const control = formGroup.controls[controlName];
         const matchingControl = formGroup.controls[matchingControlName];

          if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          return;
         }
       
          if (control.value !== matchingControl.value) {
              matchingControl.setErrors({ mustMatch: true });
       } else {
            matchingControl.setErrors(null);
       }
     }
    }*/


    //Validators.pattern('^[0-9]{2}-[0-9]{8}-[0-9]{1}$'
    //Validators.pattern('^[23][670]-[0-9]{8}-[0-9]$'

   /* Registro => CUIL :String 
    ROL => desarrollador : comienza: 20,23,24,27
    ROL => empresa: comienza: 30
    8 caracteres seguidos
    termina un caracter
    ejemplo: empresa: 30-12345678-7*/

    console.log(this.registerForm.value);
    this._registerService.register(this.registerForm.value).subscribe( dato =>{
      
    })
    
  }

}
