import {
  FETCH_FUNDRAISER_FAILURE,
  FETCH_FUNDRAISER_REQUEST,
  FETCH_FUNDRAISER_SUCCESS,
} from "./actionTypes";

const init = {
  isLoading: false,
  isError: false,
  fundraiserData: undefined,
};

export const funraiserReducer = (state = init, { type, payload }) => {
  switch (type) {
    case FETCH_FUNDRAISER_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case FETCH_FUNDRAISER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        fundraiserData: payload,
      };
    }

    case FETCH_FUNDRAISER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    default: {
      return state;
    }
  }
};
