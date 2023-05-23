import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicantsService {
  baseUrl: String = "http://localhost:8080/";

  constructor(private http:HttpClient) { }

    //Funcion para traers todos los desarrolladores
    findAllDevelopers(): Observable<any>{      

      return this.http.get<any>(`${this.baseUrl}desarrollador/findAll`).pipe(
         map(( Develop: any) => Develop.Desarrolladores.map( (user: any )=> {
  
          return{ id: user.id, name: user.name, surname: user.surname, emailAddress: user.emailAddress, gender: user.gender, status: this.states(user.deleted)}
         }))
      );
    }


      //Funcion para verificar si esta activo o inactivo.
      states(status: boolean){
        if(status){
          return 'Inactivo';
        }else{
          return 'Activo';
        }
      }
}
