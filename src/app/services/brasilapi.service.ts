import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estado, Municipio } from '../brasilapi.models';

@Injectable({
  providedIn: 'root'
})
export class Brasilapi {
  baseUrl: string = 'https://brasilapi.com.br/api';

  constructor(private http: HttpClient){
  
  }

  listarUfs(): Observable<Estado[]>{
    return this.http.get<Estado[]>(this.baseUrl + '/ibge/uf/v1');
  }

  listarMunicipios(uf: string): Observable<Municipio[]>{
    return this.http.get<Municipio[]>(this.baseUrl + `/ibge/municipios/v1/${uf.toUpperCase()}`);
  }
}
