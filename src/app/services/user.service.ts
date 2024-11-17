import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' 
})
export class UserService {
  //url donde se obtienen los usuarios (api escuela)
  private apiUrl = 'https://api.escuelajs.co/api/v1/users';
  constructor(private http: HttpClient) { }/* httpcliente para realizar las solicitudes HTTP
  el getusers es para obtener la lista de usuarios*/
  getUsers() {
    return this.http.get(`${this.apiUrl}`);
  }
  //solicitud GET a la API y devuelve un observable con la respuesta
}
