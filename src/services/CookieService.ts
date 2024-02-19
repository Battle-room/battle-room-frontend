import Cookies from "js-cookie";
import { Tokens } from "../types/Tokens";

export function setJWT(tokens: Tokens) {
  Cookies.set('accessToken', tokens.accessToken);
  Cookies.set('refreshToken', tokens.refreshToken);
}

export function getAccessToken() {
  return Cookies.get('accessToken');
}