import { Observable } from 'rxjs';
//import { Oferta } from './shared/oferta.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, retry } from 'rxjs/operators'
import { Usuario } from './app/core/models/usuario';


//import { URL_API } from './app.api';

@Injectable()
export class UsuariosService {
  private url_api = 'http://localhost:3000'

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  public pesquisaOfertas(Usuario: Usuario){
    return this.http.get(`${this.url_api}`)
        .pipe(retry(10))
        .pipe(map(response => response))
  }

  consultar(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url_api + '/usuarios')
    .pipe(retry(10))
    .pipe(map(response => response))
  }

  consultarId(id: any): Observable<Usuario>{
    return this.http.get<Usuario>(this.url_api + '/usuarios/' + id)
    .pipe(retry(10))
    .pipe(map(response => response))
  }

  excluir(id: any){
    return this.http.delete<Usuario>(this.url_api + '/usuarios/' + id, this.httpOptions)
    .pipe(retry(10))
    .pipe(map(response => response))
  }

  incluir(usuario: any): Observable<Usuario>{
    return this.http.post<Usuario>(this.url_api + '/usuarios',
    JSON.stringify(usuario), this.httpOptions)
    .pipe(retry(10))
    .pipe(map(response => response))
  }

  alterar(id: any): Observable<Usuario>{
    return this.http.put<Usuario>(this.url_api + '/usuarios' + id,
    JSON.stringify(id), this.httpOptions)
    .pipe(retry(10))
    .pipe(map(response => response))
  }
  
}
