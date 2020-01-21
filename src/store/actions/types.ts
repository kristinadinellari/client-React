import { IUser } from '../../interfaces';

export const SET_USERS = "SET_USERS";
export const SET_USER = "SET_USER";

export interface SetUsersAction {
  type: typeof SET_USERS;
  users: IUser[];
}

export interface SetUserAction {
  type: typeof SET_USER;
  user: IUser;
}
export type UserActionsTypes = SetUsersAction | SetUserAction;

export type AppActions = UserActionsTypes;
