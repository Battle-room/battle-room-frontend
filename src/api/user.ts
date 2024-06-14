import axios from 'axios';
import { getAccessToken } from "../services/CookieService";
import { BASE_URL } from './axios';

export const updateUserProfilePhoto = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);

  const token = getAccessToken();
  const response = await axios.patch(`${BASE_URL}/auth/photo`, formData, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    }
  });
  
  return response.data;
};

export const updateUserName = async (username: string) => {
  const token = getAccessToken();
  const response = await axios.patch(`${BASE_URL}/auth`, { username }, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  return response.data;
};
