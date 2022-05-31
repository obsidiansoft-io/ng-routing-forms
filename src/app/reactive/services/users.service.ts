import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Respuesta {
  total: number;
  data: any[]
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url: string = 'https://app.garsosolutions.com/v1';
  private apiKey: string = '8MHiY2rfX05IyR+XjlTYXqmf45iipuUownxEzN46f6Q=';
  roles!: Respuesta |null;

  constructor(private http: HttpClient) { }

  consultarRoles() {
    this.http.get(`${this.url}/roles`, {
      headers: {
        'x-api-key': this.apiKey,
      },
    })
    .subscribe(res => {
      this.roles = res as Respuesta;
      console.log(res);
    });
  }

  guardarUsuario(user: any) {
    this.http.post(`${this.url}/users`, user, {
      headers: {
        'x-api-key': this.apiKey,
      }
    })
    .subscribe(res => console.log(res));
  }
}
