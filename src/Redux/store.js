import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { authReducer } from "./auth/authReducer";
import { campaignReducer } from "./campaignApi/campaignReducer";
import { categoryReducer } from "./categoryApi/categoryReducer";
import { paymentReducer } from "./payment/paymentReducer";
import { funraiserReducer } from "./specificFundraiser/fundraiserReducer";
import { userCampaginReducer } from "./userCampagins/userCampaginReducer";


const rootReducer = combineReducers({
  auth: authReducer,
  cards: categoryReducer,
  fundraiser: funraiserReducer,
  campaign:campaignReducer,
  payment: paymentReducer,
  userCampaginData: userCampaginReducer
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
