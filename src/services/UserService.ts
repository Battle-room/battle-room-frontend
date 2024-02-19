import { getMe } from "../api/auth";
import { getAccessToken } from "./CookieService";


export async function updateUser() {
  const accessToken = getAccessToken();
  if(!accessToken) return;
  const user = await getMe(accessToken);
  console.log(user.data);
  return user.data; 
}