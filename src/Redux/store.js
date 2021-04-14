import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { authReducer } from "./auth/authReducer";
import {categoryReducer} from "./categoryApi/categoryReducer"

const rootReducer = combineReducers({
  auth: authReducer,
  cards:categoryReducer  
});

const customThunk = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }
  return next(action);
}; 

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(customThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
