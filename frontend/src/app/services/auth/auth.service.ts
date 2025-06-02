// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthenticationRequest } from '../../models/authentication-request';
import { RegistrationRequest } from '../../models/registration-request';
import { AuthenticationResponse } from '../../models/authentication-response'; // ✅ Import the response model
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  // 🔐 Send login request and expect an AuthenticationResponse in return
  login(request: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(
      `${this.baseUrl}/auth/authenticate`,
      request
    );
  }

  // 📝 Send registration request and expect an AuthenticationResponse in return
  register(request: RegistrationRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(
      `${this.baseUrl}/auth/register`,
      request
    );
  }

  // 🚪 Logout by removing the token
  logout(): void {
    localStorage.removeItem('token');
  }

  // 🔑 Get token from local storage
  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
