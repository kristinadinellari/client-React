import {IUser} from "../../interfaces";
import {store} from "../storeConfig";
import {AppActions, SET_USER} from "./types";

export const setUsers = (users: IUser[]): AppActions => ({
  type: SET_USER,
  users
});
// kjo ben dispatch action qe action eshte serUser
export const startSetUsers = (users: IUser[]) => {
    return store.dispatch(setUsers(users))
};
