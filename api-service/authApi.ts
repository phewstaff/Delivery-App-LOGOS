import axios from "axios";
import { LoginInput, LoginResponse, SignUpInput } from "./types";

const BASE_URL = "https://unifood.onrender.com";

export const authApi = axios.create({
  baseURL: BASE_URL,
});

authApi.defaults.headers.common["Content-Type"] = "application/json";

export const signUpCafeFn = async (user: SignUpInput) => {
  const response = await authApi.post<string>("/cafe/signup", user);
  return response.data;
};

export const signUpClientFn = async (user: SignUpInput) => {
  const response = await authApi.post<string>("/client/signup", user);
  return response.data;
};

export const loginUserFn = async (user: LoginInput) => {
  const response = await authApi.post<LoginResponse>("/signin", user);
  return response.data;
};
