import React, { createContext, useContext, useState } from 'react';
import User from './types/User';

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  avatarFile: File | null; // Додайте поле для файлу зображення користувача
  setAvatarFile: (file: File | null) => void; // Додайте функцію для оновлення файлу зображення користувача
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [avatarFile, setAvatarFile] = useState<File | null>(null); // Додайте стан для файлу зображення користувача

  return (
    <UserContext.Provider value={{ user, setUser, avatarFile, setAvatarFile }}> // Передайте avatarFile та setAvatarFile в контекст
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
