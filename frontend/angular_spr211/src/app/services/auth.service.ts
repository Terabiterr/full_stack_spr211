import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = `https://localhost:7255/api/apiauth`;
  constructor(private http: HttpClient) { }
  getToken(user: User) : Observable<any> {
    return this.http.post(this.url, user);
  }
}
