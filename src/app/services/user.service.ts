import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = '/api/users';
  httpOptions = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.url);
  }
}
