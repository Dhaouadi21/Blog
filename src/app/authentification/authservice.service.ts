import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  baseUrl = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    return this.http.post(`${this.baseUrl}/users`, user)
  }
  getUsers() {
    return this.http.get(`${this.baseUrl}/users`)
  }
}
