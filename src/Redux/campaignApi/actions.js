import axios from "axios"
import { ADD_CAMPAIGN_FAILURE, ADD_CAMPAIGN_REQ, ADD_CAMPAIGN_SUCCESS } from "./actionTypes"


export const addCampaignReq=()=>{
    return{
        type:ADD_CAMPAIGN_REQ
    }
}

export const addCampaignSuccess=()=>{
    return{
        type:ADD_CAMPAIGN_SUCCESS
    }
}

export const addCampaignFailure=()=>{
    return{
        type:ADD_CAMPAIGN_FAILURE
    }
} 

export const addCampaign=(params)=>dispatch=>{
    dispatch(addCampaignReq)
    axios.post("https://boron-milaap-clone.herokuapp.com/fundraisers",params)
    .then(res=>dispatch(addCampaignSuccess))
    .catch(err=>dispatch(addCampaignFailure))
}
const clientId=process.env.REACT_APP_IMGUR_ID

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