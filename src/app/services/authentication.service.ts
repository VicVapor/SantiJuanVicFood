import { Injectable, inject } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { User } from '../models/user';
import { Jwtres } from '../models/jwtres';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  apiUri = '/api/users';
  authSubject = new BehaviorSubject(false);
  private token: string | null = null; // Corregido: inicializar como null
  private loggedInSubject = new BehaviorSubject<boolean>(true);

  constructor(private httpClient: HttpClient) {
    this.token = this.getToken();
    this.loggedInSubject.next(this.loggedIn());
  }

  isLoggedIn$(): Observable<boolean> {
    return this.loggedInSubject;
  }

  private saveToken(token: string, expiresIn: string) {
    localStorage.setItem('token', token); // Actualizado: usar 'token' en lugar de 'accessToken'
    localStorage.setItem('expiresIn', expiresIn);
    this.token = token;
  }

  register(user: User): Observable<Jwtres> {
    return this.httpClient.post<Jwtres>(this.apiUri + '/signup', user).pipe(
      tap((res: Jwtres) => {
        if (res) {
          this.saveToken(res.token, res.expiresIn); // Actualizado: usar 'token' en lugar de 'accessToken'
        }
      })
    );
  }

  login(user: User): Observable<Jwtres> {
    return this.httpClient.post<Jwtres>(this.apiUri + '/login', user).pipe(
      tap((res: Jwtres) => {
        if (res) {
          this.saveToken(res.token, res.expiresIn); // Actualizado: usar 'token' en lugar de 'accessToken'
        }
      })
    );
  }

  logout() {
    this.token = null; // Corregido: asignar null al campo token
    localStorage.removeItem('token');
    localStorage.removeItem('expiresIn');
  }

  loggedIn() {
    return !!this.getToken();
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
