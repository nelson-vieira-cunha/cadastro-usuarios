import { Observable } from 'rxjs';
//import { Oferta } from './shared/oferta.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, retry } from 'rxjs/operators'
import { TelaInicial } from './app/tela-inicial/telainicial';

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


  public pesquisaOfertas(telaInicial: TelaInicial){
    return this.http.get(`${this.url_api}`)
        .pipe(retry(10))
        .pipe(map(response => response))
  }

  consultar(): Observable<TelaInicial[]>{
    return this.http.get<TelaInicial[]>(this.url_api + '/usuarios')
    .pipe(retry(10))
    .pipe(map(response => response))
  }

  consultarId(id: any): Observable<TelaInicial>{
    return this.http.get<TelaInicial>(this.url_api + '/usuarios/' + id)
    .pipe(retry(10))
    .pipe(map(response => response))
  }

  excluir(id: any){
    return this.http.delete<TelaInicial>(this.url_api + '/usuarios/' + id, this.httpOptions)
    .pipe(retry(10))
    .pipe(map(response => response))
  }

  incluir(usuario: any): Observable<TelaInicial>{
    return this.http.post<TelaInicial>(this.url_api + '/usuarios',
    JSON.stringify(usuario), this.httpOptions)
    .pipe(retry(10))
    .pipe(map(response => response))
  }

  alterar(id: any): Observable<TelaInicial>{
    return this.http.put<TelaInicial>(this.url_api + '/usuarios' + id,
    JSON.stringify(id), this.httpOptions)
    .pipe(retry(10))
    .pipe(map(response => response))
  }
  
}
