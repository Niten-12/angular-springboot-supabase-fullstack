// auth.guard.ts

import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../auth/auth.service'; // Adjust the path if needed

/**
 * This guard protects routes like /dashboard
 * Only allows access if user is authenticated (token exists)
 * Otherwise, auto-redirects to /login
 */
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Access AuthService
  const router = inject(Router); // Access Router

  const token = authService.getToken(); // Get stored token

  if (token) {
    // ✅ Token exists: allow access to the route
    return true;
  } else {
    // ❌ No token: redirect user to login page
    router.navigate(['/login']);
    return false;
  }
};
