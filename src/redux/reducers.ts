import { UserActionsTypes } from './actions/types'
import { IUser } from "../interfaces";

const userReducerDefaultState: IUser[] = [];

const userReducer = (state = userReducerDefaultState, action: UserActionsTypes): IUser[] => {
  switch (action.type) {
    case "SET_USER":
      return action.users;
    default:
      return state;
  }
};

export { userReducer }
