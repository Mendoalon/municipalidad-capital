import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(user:any):Observable<any> {

   return this.http.post(`http://localhost:8081/api/registro/usuario`,user)
   
  }

}
