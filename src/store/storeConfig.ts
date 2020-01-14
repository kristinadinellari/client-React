import { createStore, combineReducers, applyMiddleware } from 'redux';

import { userReducer } from '../pages/User/reducers';

// export const rootReducer = combineReducers({userReducer});

export type AppState = ReturnType<typeof userReducer>

// console.log(rootReducer, 'rootReducer');

export const store = createStore(userReducer);
