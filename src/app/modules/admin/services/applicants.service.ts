import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Usuario } from '../interfaces/usuario.intefaces';


@Injectable({
  providedIn: 'root'
})
export class ApplicantsService {
  private apiUrl = 'http://localhost:8081/api/';

  constructor(private http: HttpClient) { }

  //Funcion para optener todos las empresas.
  allDevelopers(page: number, size: number): Observable<any> {
    const url = `${this.apiUrl}listar/desarrollador?page=${page}&size=${size}`;

    return this.http.get<any>(url).pipe(
      map((response: any) => {
        const developers = response.content.map((develop: any) => ({
          id: develop.id,
          name: develop.nombre,
          email: develop.email,
          cuil: develop.cuil,
          state: this.getState(develop.habilitado)
        }));

        return {
          content: developers,
          totalElements: response.totalElements
        };
      })
    );
  }

  //Funcion para optener el estado de la empresa.
  private getState(status: boolean): string {
    return status ? 'Activo' : 'Inactivo';
  }


  editarUsuario(email: String): Observable<any> {
    // Aquí puedes implementar la lógica para editar el usuario en la API
    return of(email);
  }

  disableOrEnableUser(email: string): Observable<any> {
    const url = `${this.apiUrl}deshabilitar/${encodeURIComponent(email)}`;
    return this.http.put(url, null);
  }

}
