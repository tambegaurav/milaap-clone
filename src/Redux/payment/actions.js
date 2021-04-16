import axios from "axios";
import {
  PAYMENT_FAILURE,
  PAYMENT_REQUEST,
  PAYMENT_SUCCESS,
} from "./actionTypes";

export const paymentRequest = () => {
  return {
    type: PAYMENT_REQUEST,
  };
};

export const paymentSuccess = (payload) => {
  return {
    type: PAYMENT_REQUEST,
    payload: payload,
  };
};

export const paymentFailure = () => {
  return {
    type: PAYMENT_FAILURE,
  };
};

export const makePayment = (params) => (dispatch) => {
  dispatch(paymentRequest());
  return axios({
    method: "patch",
    url: "https://boron-milaap-clone.herokuapp.com/fundraisers/" + params.id,
    data: {
      supporters: [...params.supporters, params.data],
    },
  })
    .then((res) => {
      dispatch(paymentSuccess(res.data));
      console.log(res);
    })
    .catch((err) => {
      dispatch(paymentFailure());
      console.log(err);
    });
};
