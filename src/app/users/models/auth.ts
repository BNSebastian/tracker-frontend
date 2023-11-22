import { User } from './user';

export interface AuthState {
  isLoggedIn: boolean;
  currentUser: User | null;
  accessToken: string | null;
}

export type AuthResponse = {
  token: string;
  user: User;
};
export type RegisterResponse = {
  register: AuthResponse;
};
export type LoginResponse = {
  signIn: AuthResponse;
};
