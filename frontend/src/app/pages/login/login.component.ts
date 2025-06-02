//login.component.ts
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { AuthenticationRequest } from '../../models/authentication-request';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  credentials: AuthenticationRequest = {
    email: '',
    password: '',
  };

  errorMessage = '';
  showPopup = false;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        // ✅ Save token only
        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        this.triggerPopup('Invalid email or password');
      },
    });
  }

  triggerPopup(message: string) {
    this.errorMessage = message;
    this.showPopup = true;
    setTimeout(() => (this.showPopup = false), 3000);
  }
}
