import { createStore, combineReducers, applyMiddleware } from 'redux';

import { userReducer } from '../components/Content/User/reducers';

// export const rootReducer = combineReducers({userReducer});

export type AppState = ReturnType<typeof userReducer>

// console.log(rootReducer, 'rootReducer');

export const store = createStore(userReducer);
