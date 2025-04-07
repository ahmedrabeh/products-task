import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users'; // URL to json-server users

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`).pipe(
      map(users => {
        if (users.length > 0) {
          localStorage.setItem('user', JSON.stringify(users[0])); // Store user in local storage
          return users[0]; // Return user data
        } else {
          throw new Error('Invalid credentials');
        }
      }),
      catchError(error => {
        console.error('Login error:', error);
        return throwError(() => new Error('Invalid email or password'));
      })
    );
  }

  logout(): void {
    localStorage.removeItem('user'); // Remove user from storage
  }

  getLoggedInUser(): any {
    return JSON.parse(localStorage.getItem('user') || 'null');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('user');
  }
}
