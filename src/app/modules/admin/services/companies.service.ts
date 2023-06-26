import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Usuario } from '../interfaces/usuario.intefaces';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  private apiUrl = 'http://localhost:8081/api/';

  constructor(private http: HttpClient) { }

  //Funcion para optener todos las empresas.
  allCompanies(page: number, size: number): Observable<any> {
    const url = `${this.apiUrl}listar/empresa?page=${page}&size=${size}`;
    return this.http.get<any>(url).pipe(
      map((response: any) => {
        const companies = response.content.map((develop: any) => ({
          id: develop.id,
          name: develop.nombre,
          email: develop.email,
          cuil: develop.cuil,
          state: this.getState(develop.habilitado)
        }));

        return {
          content: companies,
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
    // Lógica para ver el usuario en la API
    return of(email);
  }

  disableOrEnableUser(email: String): Observable<any> {
    // Lógica para deshabilitar el usuario en la API
    return of(email);
  }
}
