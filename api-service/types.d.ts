export interface User {
  name: string;
  email: string;
  phone: string;
  city: string;
  address: string;
  password: string;
  role: string;
  _id: string;
  __v: number;
}

export interface LoginResponse {
  role: string;
  id: string;
  token: string;
}

export interface LoginInput {
  mail: string;
  password: string;
}

export interface SignUpInput {
  name: string;
  phone: string;
  city: string;
  address: string;
  mail: string;
  password: string;
}
