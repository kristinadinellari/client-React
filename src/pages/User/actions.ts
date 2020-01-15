import { IUser } from "../../interfaces";
import { store } from "../../store/storeConfig";
import { AppActions, SET_USERS, SET_USER } from "../../store/actions/types";

export const setUsers = (users: IUser[]): AppActions => ({
  type: SET_USERS,
  users
});

export const setUser = (user: IUser): AppActions => ({
  type: SET_USER,
  user
});

export const startSetUsers = (users: IUser[]) => {
  return store.dispatch(setUsers(users));
};

export const startSetUser = (user: IUser) => {
  const { id, firstName, lastName, type } = user;
  localStorage.setItem('user', JSON.stringify({
    firstName: firstName,
    lastName: lastName,
    fullName: `${firstName} ${lastName}`,
    type: type,
    id: id
  }));
  return store.dispatch(setUser(user));
};
