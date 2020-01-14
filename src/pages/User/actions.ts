import { IUser } from "../../interfaces";
import { store } from "../../store/storeConfig";
import { AppActions, SET_USERS, SET_USER } from "../../store/actions/types";

export const setUsers = (users: IUser[], userName: string): AppActions => ({
  type: SET_USERS,
  users,
  userName
});

export const setUser = (user: IUser): AppActions => ({
  type: SET_USER,
  user
});

export const startSetUsers = (users: IUser[], userName: string) => {
  const loggedInUser = users.filter((a:IUser) => a.firstName === userName);
  if (loggedInUser && loggedInUser.length > 0) {
    const { firstName, lastName, type } = loggedInUser[0];
    localStorage.setItem('user', JSON.stringify({
      name: `${firstName} ${lastName}`,
      type: type
    }));
  };
  return store.dispatch(setUsers(users, userName));
};

export const startSetUser = (user: IUser) => {
  return store.dispatch(setUser(user));
};
