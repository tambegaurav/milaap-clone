import {
  PAYMENT_FAILURE,
  PAYMENT_REQUEST,
  PAYMENT_SUCCESS,
} from "./actionTypes";

const init = {
  isLoading: false,
  isError: false,
  paymentDetails: undefined,
};

export const paymentReducer = (state = init, { type, payload }) => {
  switch (type) {
    case PAYMENT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        paymentDetails: undefined,
      };
    }

    case PAYMENT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        paymentDetails: "Donation Successful",
      };
    }

    case PAYMENT_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        paymentDetails: undefined,
      };
    }

    default: {
      return state;
    }
  }
};
