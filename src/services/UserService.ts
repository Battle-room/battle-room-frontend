import { getMe } from "../api/auth";
import { BASE_URL } from "../api/axios";
import { getAccessToken } from "./CookieService";


export async function updateUser() {
  const accessToken = getAccessToken();
  if(!accessToken) return;
  const user = await getMe(accessToken);
  return user.data; 
}

export function createAvatarUrl(imageName: string) {
  return BASE_URL + '/static/' + imageName;
}