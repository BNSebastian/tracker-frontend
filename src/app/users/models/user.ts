export interface User {
  firstname: string;
  lastname: string;
  email: string;
  token: string;
}

export interface UserCreate {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface UserAuthenticate {
  email: string;
  password: string;
}
