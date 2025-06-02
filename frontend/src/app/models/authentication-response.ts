//authentication-response.ts
// Defines the expected structure of authentication response from backend
export interface AuthenticationResponse {
  token: string;
  username: string;
  email: string;
  createdAt: string;
}
