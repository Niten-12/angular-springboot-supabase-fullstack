// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-dashboard',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css'],
// })
// export class DashboardComponent {
//   username: string = '';

//   constructor(private router: Router) {
//     const loggedInUser = localStorage.getItem('loggedInUser');
//     this.username = loggedInUser ? loggedInUser : 'Guest';
//   }

//   logout() {
//     localStorage.removeItem('loggedInUser');
//     this.router.navigate(['/login']);
//   }
// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  username = 'User';

  constructor(private authService: AuthService, private router: Router) {
    const token = this.authService.getToken();
    if (!token) {
      // ❌ No token = not authenticated
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
