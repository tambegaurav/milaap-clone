import axios from "axios";
import { setData } from "../../localStorage";
import {
  ADD_CAMPAIGN_FAILURE,
  ADD_CAMPAIGN_REQ,
  ADD_CAMPAIGN_SUCCESS,
  UPDATE_CAMPAIGN_FAILURE,
  UPDATE_CAMPAIGN_REQ,
  UPDATE_CAMPAIGN_SUCCESS,
} from "./actionTypes";

export const addCampaignReq = () => {
  return {
    type: ADD_CAMPAIGN_REQ,
  };
};

export const addCampaignSuccess = () => {
  return {
    type: ADD_CAMPAIGN_SUCCESS,
  };
};

export const addCampaignFailure = () => {
  return {
    type: ADD_CAMPAIGN_FAILURE,
  };
};

export const updateCampaignReq = () => {
  return {
    type: UPDATE_CAMPAIGN_REQ,
  };
};

export const updateCampaignSuccess = () => {
  return {
    type: UPDATE_CAMPAIGN_SUCCESS,
  };
};

export const updateCampaignFailure = () => {
  return {
    type: UPDATE_CAMPAIGN_FAILURE,
  };
};

export const updateCampaign = (params) => (dispatch) => {
  dispatch(updateCampaignReq());
  axios({
    method: "put",
    url:
      "https://boron-milaap-clone.herokuapp.com/fundraisers/" +
      params.campaignId,
    data: {
      ...params.data,
      target: Number(params.data.target),
      image: params.image,
    },
  })
    .then((res) => {
      console.log(res);
      dispatch(updateCampaignSuccess());
    })
    .catch((err) => {
      console.log(err);
      dispatch(updateCampaignFailure());
    });
};

export const addCampaign = (params) => (dispatch) => {
  dispatch(addCampaignReq());
  axios
    .post("https://boron-milaap-clone.herokuapp.com/fundraisers", params)
    .then((res) => res.data.id)
    .then((campaignId) => {
      return axios({
        method: "patch",
        url:
          "https://boron-milaap-clone.herokuapp.com/users/" +
          params.activeUser.id,
        data: {
          campaigns: [...params.activeUser.campaigns, campaignId],
        },
      });
    })
    .then(() => {
      return axios({
        method: "get",
        url:
          "https://boron-milaap-clone.herokuapp.com/users/" +
          params.activeUser.id,
      });
    })
    .then((res) => setData("user", res.data))
    .then(() => dispatch(addCampaignSuccess()))
    .catch((err) => dispatch(addCampaignFailure()));
};
const clientId = process.env.REACT_APP_IMGUR_ID;

export const upload = (image) => {
  var config = {
    method: "post",
    url: "https://api.imgur.com/3/image",
    headers: {
      Authorization: `Client-ID ${clientId}`,
    },
    data: image,
  };
  return axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
