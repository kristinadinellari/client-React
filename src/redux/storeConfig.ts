import { createStore, combineReducers, applyMiddleware } from 'redux'
import { userReducer } from './reducers'

export const rootReducer = combineReducers({
  users: userReducer
});

console.log(userReducer, 'user reducer')

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);