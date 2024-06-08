import Cookies from "js-cookie";
import { Tokens } from "../types/Tokens";

export function setJWT(tokens: Tokens) {
  Cookies.set('accessToken', tokens.access_token);
}

export function getAccessToken() {
  return Cookies.get('accessToken');
}