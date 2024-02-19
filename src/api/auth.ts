import axios from "axios";
import { BASE_URL } from "./axios";

const authPrefix = '/auth'

export async function logIn(email: string, password: string) {
  const url = BASE_URL + authPrefix + '/login';
  const response = axios.post(url, {
      password,
      username: email,
    }
  ).catch((error) => {
    console.log(error);
  });
  return response;
}