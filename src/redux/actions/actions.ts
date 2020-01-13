import {IUser} from "../../interfaces";
import {Dispatch} from "redux";
import {AppState} from "../storeConfig";
import {AppActions, SET_USER} from "./types";

export const setUsers = (users: IUser[]): AppActions => ({
  type: SET_USER,
  users
});
export const startSetUsers = (users: IUser[]) => {
  console.log(users, 'users on start set users');
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(setUsers(users))
  }
};