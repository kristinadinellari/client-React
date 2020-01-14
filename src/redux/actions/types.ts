import { IUser } from '../../interfaces'

export const SET_USER = "SET_USER";

export interface SetUserAction {
  type: typeof SET_USER;
  users: IUser[]
}
export type UserActionsTypes = SetUserAction;
//represent all the possible Redux actions
export type AppActions = UserActionsTypes;
