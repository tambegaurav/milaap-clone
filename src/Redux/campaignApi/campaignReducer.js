import {
  ADD_CAMPAIGN_FAILURE,
  ADD_CAMPAIGN_REQ,
  ADD_CAMPAIGN_SUCCESS,
  UPDATE_CAMPAIGN_FAILURE,
  UPDATE_CAMPAIGN_REQ,
  UPDATE_CAMPAIGN_SUCCESS,
} from "./actionTypes";

const initial = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: ''
};

export const campaignReducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_CAMPAIGN_REQ: {
      return {
        ...state,
        isError: false,
        isLoading: true,
        message: ''
      };
    }
    case ADD_CAMPAIGN_SUCCESS: {
      return {
        ...state,
        isError: false,
        isLoading: false,
        isSuccess: true,
        message: 'Campaign Added Successfully'

      };
    }
    case ADD_CAMPAIGN_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
        message: ''
      };
    }

    case UPDATE_CAMPAIGN_REQ: {
      return {
        ...state,
        isError: false,
        isLoading: true,
        message: ''
      };
    }

    case UPDATE_CAMPAIGN_SUCCESS: {
      return {
        ...state,
        isError: false,
        isLoading: false,
        isSuccess: true,
        message: 'Campaign Updated Successfully'
      };
    }

    case UPDATE_CAMPAIGN_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
        isSuccess: false,
        message: ''
      };
    }

    default: {
      return state;
    }
  }
};
