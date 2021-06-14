import { Livro } from './../models/livro.model';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAllByCategoria(id_cat: number):Observable<Livro[]> {
    const url = `${this.baseUrl}/livros?categoria=${id_cat}`
    return this.http.get<Livro[]>(url);
  }

  findById(id: number):Observable<Livro> {
    const url = `${this.baseUrl}/livros/${id}`;
    return this.http.get<Livro>(url);
  }

  create(livro: Livro, id_cat: number):Observable<Livro>{
    const url = `${this.baseUrl}livros?categoria=${id_cat}`
    return this.http.post<Livro>(url, livro);
  }


  update(livro: Livro):Observable<Livro> {
    const url = `${this.baseUrl}/livros/${livro.id}`
    return this.http.put<Livro>(url, livro);
  }

  delete(id: number):Observable<void> {
    const url = `${this.baseUrl}/livros/${id}`
    return this.http.delete<void>(url);
  }
}
