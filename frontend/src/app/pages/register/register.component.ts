import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { RegistrationRequest } from '../../models/registration-request';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  user: RegistrationRequest & { confirmPassword: string } = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  errorMessage = '';
  showPopup = false;

  constructor(private authService: AuthService, private router: Router) {}

  signup() {
    const { name, email, password, confirmPassword } = this.user;

    if (!name || !email || !password || !confirmPassword) {
      this.triggerPopup('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      this.triggerPopup('Passwords do not match');
      return;
    }

    // ✅ Real backend API call
    this.authService.register({ name, email, password }).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: () => {
        this.triggerPopup('Registration failed. Try again.');
      },
    });
  }

  triggerPopup(message: string) {
    this.errorMessage = message;
    this.showPopup = true;
    setTimeout(() => (this.showPopup = false), 3000);
  }
}
