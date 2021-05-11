import { loadData } from "../../localStorage";
import {
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  SIGNIN_REQUEST,
  SIGNOUT,
} from "./actionTypes";

const userFromLS = loadData("user") || undefined;
const isAuthFromLS = loadData("isAuth") || false;

const init = {
  isLoading: false,
  isError: false,
  isAuth: isAuthFromLS,
  activeUser: userFromLS,
  message: "",
};

export const authReducer = (state = init, { type, payload }) => {
  switch (type) {
    case SIGNUP_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case SIGNUP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: "User Registered",
      };
    }

    case SIGNUP_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: "Something went wrong",
      };
    }

    case SIGNIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case SIGNIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        activeUser: payload,
        isAuth: true,
      };
    }

    case SIGNIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        activeUser: undefined,
        isAuth: false,
        message: "Something went wrong Please try again!",
      };
    }

    case SIGNOUT: {
      return {
        ...state,
        activeUser: undefined,
        isAuth: false,
      };
    }

    default: {
      return state;
    }
  }
};
