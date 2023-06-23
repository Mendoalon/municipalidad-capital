import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Usuario } from '../interfaces/usuario.intefaces';


@Injectable({
  providedIn: 'root'
})
export class ApplicantsService {
  private apiUrl = 'http://localhost:8081/api/listar/desarrollador';

  constructor(private http:HttpClient) { }

  allDevelopers(page: number, size: number): Observable<any> {
    const url = `${this.apiUrl}?page=${page}&size=${size}`;
    return this.http.get<any>(url);
  }

  editarUsuario(usuario: Usuario): Observable<any> {
    // Aquí puedes implementar la lógica para editar el usuario en la API
    return of(usuario);
  }

  eliminarUsuario(usuario: Usuario): Observable<any> {
    // Aquí puedes implementar la lógica para eliminar el usuario en la API
    return of(usuario);
  }

    //Funcion para traers todos los desarrolladores
    // findAllDevelopers(): Observable<any>{      

    //   return this.http.get<any>(`${this.baseUrl}desarrollador/findAll`).pipe(
    //      map(( Develop: any) => Develop.Desarrolladores.map( (user: any )=> {
  
    //       return{ id: user.id, name: user.name, surname: user.surname, emailAddress: user.emailAddress, gender: user.gender, status: this.states(user.deleted)}
    //      }))
    //   );
    // }

    //   //Funcion para verificar si esta activo o inactivo.
    //   states(status: boolean){
    //     if(status){
    //       return 'Inactivo';
    //     }else{
    //       return 'Activo';
    //     }
    //   }  

}
