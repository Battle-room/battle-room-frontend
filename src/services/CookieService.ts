import Cookies from "js-cookie";
import { Tokens } from "../types/Tokens";

export function setJWT(tokens: Tokens) {
  console.log(document.cookie);
  Cookies.set('accessToken', tokens.accessToken);
  Cookies.set('refreshToken', tokens.refreshToken);
}