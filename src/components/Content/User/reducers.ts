import { UserActionsTypes } from '../../../store/actions/types';
import { IUser } from "../../../interfaces";

const userReducerDefaultState: IUser[] = [];

const userReducer = (state = userReducerDefaultState, action: UserActionsTypes): any => {
  switch (action.type) {
    case "SET_USERS":
      return {
        users: action.users
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
};

export { userReducer };
