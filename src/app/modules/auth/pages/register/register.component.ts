import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm!: FormGroup;


  constructor(private formBuilder: FormBuilder,
              private _registerService: RegisterService ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      cuil: ['', Validators.required],
    });
  }

  register() {

    // Lógica para registrar al usuario

    console.log(this.registerForm.value);
    this._registerService.register(this.registerForm.value).subscribe( dato =>{
      
    })
    
  }

}
