import axios from "axios";
import { fetchFundraiserData } from "../specificFundraiser/actions";
import {
  POST_UPDATE_REQUEST,
  POST_UPDATE_SUCCESS,
  POST_UPDATE_FAILURE,
} from "./actionTypes";

export const postUpdateReq = () => {
  return {
    type: POST_UPDATE_REQUEST,
  };
};

export const postUpdateSuccess = (payload) => {
  return {
    type: POST_UPDATE_SUCCESS,
    payload: payload,
  };
};
export const postUpdateFailure = () => {
  return {
    type: POST_UPDATE_FAILURE,
  };
};

export const postUpdate = (params) => (dispatch) => {
  dispatch(postUpdateReq());
  return axios({
    method: "patch",
    url: "https://boron-milaap-clone.herokuapp.com/fundraisers/" + params.id,
    data: {
      updates: [
        ...params.updates,
        {
          id: params.updates.length + 1,
          description: params.newUpdate,
          title: "update " + (params.updates.length + 1).toString(),
        },
      ],
    },
  })
    .then((res) => {
      console.log(res);
      dispatch(postUpdateSuccess(res));
    })
    .then(() => fetchFundraiserData(params.id))
    .catch(() => dispatch(postUpdateFailure()));
};
