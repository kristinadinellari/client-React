import { UserActionsTypes } from './actions/types'
import { IUser } from "../interfaces";

const userReducerDefaultState: IUser[] = [];

const userReducer = (state = userReducerDefaultState, action: UserActionsTypes): IUser[] => {
  console.log(action.type, 'action.type')
  switch (action.type) {
    case "SET_USER":
      console.log(action.users, 'here on switch');
      return action.users;
    default:
      console.log(state, 'here on switch default');
      return state;
  }
};

export { userReducer }