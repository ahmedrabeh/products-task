import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  showPassword = false;

  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {
    if (localStorage.getItem('user')) {
      this.router.navigate(['/home']); // Redirect if already logged in
    }
  }

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (user) => {
        console.log('Login successful:', user);
        this.router.navigate(['/home']); // Redirect after login
      },
      error: (err) => {
        this.errorMessage = err.message;
      }
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

}
