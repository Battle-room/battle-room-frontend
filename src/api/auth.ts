import axios from "axios";
import { BASE_URL } from "./axios";

const authPrefix = '/auth'

export function logIn(email: string, password: string) {
  const url = BASE_URL + authPrefix + '/login';
  const response = axios.post(url, {
      password,
      email,
    }
  ).catch((error) => {
    console.log(error);
  })
  return response;
}

export function signUp (username: string, email: string, password: string) {
  const url = BASE_URL + authPrefix + '/signup';
  const response = axios.post(url, {
    password,
    email,
    username
    }
  ).catch((error) => {
    console.log(error);
  })
  return response;
}

export function requestEmailVerification(email: string) {
  const url = BASE_URL + authPrefix + '/email/request-verification';
  const response = axios.post(url, {
    email
    }
  )
  return response;
}

export function verifyEmail(token: string) {
  const url = BASE_URL + authPrefix + '/email/verify';
  const response = axios.post(url, {
    token
    }
  ).catch((error) => {
    console.log(error);
  })
  return response;
}

export function getMe(accessToken: string) {
  const url = BASE_URL + authPrefix + '/me';
  const response: any = axios.get(url, {
    headers: {
      'Authorization': 'Bearer ' + accessToken
    } 
  }).catch((error) => {
    console.log(error);
  });
  return response;
}