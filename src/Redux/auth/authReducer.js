import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionTypes";

const init = {
  isLoading: false,
  isError: false,
  isAuth: false,
  activeUser: undefined,
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

    default: {
      return state;
    }
  }
};
