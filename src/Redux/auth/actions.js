import {
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS,
  SIGNIN_REQUEST,
  SIGNOUT,
} from "./actionTypes";
// import { auth } from "../../firebase";
import axios from "axios";
import { setData } from "../../localStorage";

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
  return axios({
    method: "post",
    url: "https://boron-milaap-clone.herokuapp.com/users",
    data: { ...params, campaigns: [] },
  })
    .then((res) => {
      console.log(res);
      dispatch(signupSuccess(res.data));
    })
    .catch((err) => {
      dispatch(signupFailure(err));
      console.log(err);
    });
};

//logout

export const signout = () => {
  return {
    type: SIGNOUT,
  };
};

//login

export const signinRequest = () => {
  return {
    type: SIGNIN_REQUEST,
  };
};

export const signinSuccess = (payload) => {
  return {
    type: SIGNIN_SUCCESS,
    payload: payload,
  };
};

export const signinFailure = () => {
  return {
    type: SIGNIN_FAILURE,
  };
};

export const signin = (params) => (dispatch) => {
  let users = [];
  let user = undefined;
  dispatch(signinRequest());
  return axios({
    method: "get",
    url: "https://boron-milaap-clone.herokuapp.com/users",
  })
    .then((res) => {
      console.log(res.data);
      users = res.data;
      user = users.find(
        (el) => el.email === params.email && el.password === params.password
      );
      if (user) {
        setData("user", user);
        setData("isAuth", true);
        dispatch(signinSuccess(user));
      } else {
        dispatch(signinFailure());
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch(signinFailure(err));
    });
};
