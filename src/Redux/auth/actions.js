import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionTypes";
import { auth } from "../../firebase";

export const signupRequest = () => {
  return {
    type: SIGNUP_REQUEST,
  };
};

export const signupSuccess = (payload) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: payload,
  };
};

export const signupFailure = (err) => {
  return {
    type: SIGNUP_FAILURE,
    payload: err,
  };
};

export const signup = (params) => (dispatch) => {
  dispatch(signupRequest());
  return auth
    .createUserWithEmailAndPassword(params.email, params.password)
    .then((res) => {
      console.log(res);
      dispatch(signupSuccess(res.data));
    })
    .catch((err) => {
      dispatch(signupFailure(err));
      console.log(err);
    });
};
