import axios from "axios";
import { BASE_URL } from "./axios";

const authPrefix = '/auth'

export async function logIn(email: string, password: string) {
  console.log(process.env);
  const url = BASE_URL + authPrefix + '/login';
  console.log(url);
  const response = axios.post(url, {
      password,
      email,
    }
  );
  return response;
}