import { createStore } from "redux";
import User from "../types/User";


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
      return {...state, user: action.payload}
    case UserStoreActions.UPDATE_USER:
      return {...state, user: action.payload}
    case UserStoreActions.CLEAR_USER: 
      return {...state, user: undefined};
    default: 
      return state;
  }
}

export  const userStore = createStore(reducer);