import { createStore } from "redux";
import User from "../types/User";
import { BASE_URL } from "../api/axios";


type userState = {
  user: User | undefined;
};

const initialState: userState = {user: undefined};

export const UserStoreActions = {
  SET_USER: 'SET_USER',
  UPDATE_USER: 'UPDATE_USER',
  CLEAR_USER: 'CLEAR_USER' 
}

const reducer = (state = initialState, action: any) => {
  switch(action.type) {
    case UserStoreActions.SET_USER:
      const updatedUser = {
        ...action.payload,
        avatar: action.payload.avatar ? `${BASE_URL}/${action.payload.avatar}` : null
      };
      return { ...state, user: updatedUser };
    case UserStoreActions.UPDATE_USER:
      const updatedUserForUpdate = {
        ...action.payload,
        avatar: action.payload.avatar ? `${BASE_URL}/${action.payload.avatar}` : null
      };
      return { ...state, user: updatedUserForUpdate };
    case UserStoreActions.CLEAR_USER:
      return { ...state, user: undefined };
    default:
      return state;
  }
}

export  const userStore = createStore(reducer);