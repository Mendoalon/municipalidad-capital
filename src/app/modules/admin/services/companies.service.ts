import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from '../interfaces/usuario.intefaces';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  private apiUrl = 'http://localhost:8081/api/listar/empresa';

  constructor(private http:HttpClient) { }

  allCompanies(page: number, size: number): Observable<any> {
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
}
