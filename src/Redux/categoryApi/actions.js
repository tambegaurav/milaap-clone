import {
  CATEGORY_FAILURE,
  CATEGORY_REQUEST,
  CATEGORY_SUCCESS,
} from "./actionTypes";
import axios from "axios";

export const categoryRequest = () => {
  return {
    type: CATEGORY_REQUEST,
  };
};

export const categorySuccess = (payload) => {
  return {
    type: CATEGORY_SUCCESS,
    payload,
  };
};

export const categoryFailure = () => {
  return {
    type: CATEGORY_FAILURE,
  };
};

export const getCards = (params) => (dispatch) => {
  var last = params === "" ? "" : `?category=${params}`;
  if (params === "all") {
    last = "";
  }
  dispatch(categoryRequest());
  axios
    .get("https://boron-milaap-clone.herokuapp.com/fundraisers" + last)
    .then((res) => dispatch(categorySuccess(res.data)))
    .catch((err) => dispatch(categoryFailure()));
};
