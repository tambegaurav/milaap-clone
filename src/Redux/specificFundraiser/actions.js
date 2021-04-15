import axios from "axios";
import {
  FETCH_FUNDRAISER_FAILURE,
  FETCH_FUNDRAISER_REQUEST,
  FETCH_FUNDRAISER_SUCCESS,
} from "./actionTypes";

export const fetchFundraiserRequest = () => {
  return {
    type: FETCH_FUNDRAISER_REQUEST,
  };
};

export const fetchFundraiserSuccess = (payload) => {
  return {
    type: FETCH_FUNDRAISER_SUCCESS,
    payload: payload,
  };
};

export const fetchFundraiserFailure = (err) => {
  return {
    type: FETCH_FUNDRAISER_FAILURE,
    payload: err,
  };
};

export const fetchFundraiserData = (params) => (dispatch) => {
  dispatch(fetchFundraiserRequest());
  return axios
    .get("https://boron-milaap-clone.herokuapp.com/fundraisers/" + params.id)
    .then((res) => {
      console.log(res);
      dispatch(fetchFundraiserSuccess(res.data));
    })
    .catch((err) => {
      dispatch(fetchFundraiserFailure(err));
      console.log(err);
    });
};
