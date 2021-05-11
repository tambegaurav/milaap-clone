import { USER_CAMPAGIN_FAILURE, USER_CAMPAGIN_REQUEST, USER_CAMPAGIN_SUCCESS } from "./actionType"
import axios from "axios";

export const handleUserCampaginRequest = () => {
    return {
        type: USER_CAMPAGIN_REQUEST
    }
}

export const handleUserCampaginSuccess = (payload) => {
    return {
        type: USER_CAMPAGIN_SUCCESS,
        payload
    }
}

export const handleUserCampaginFailure = payload => {
    return {
        type: USER_CAMPAGIN_FAILURE,
        payload
    }
}

export const filterFundraisers = params => dispatch => {
    dispatch( handleUserCampaginRequest() )
    return axios.get("https://boron-milaap-clone.herokuapp.com/fundraisers")
    .then((res) => {
        let array = []
        for( let i=0; i<params.campaigns.length; i++ ) {
            for( let j=0; j<res.data.length; j++ ) {
                if( params.campaigns[i] === res.data[j].id ) {
                    array.push( res.data[j] )
                }
            }
        }
        dispatch( handleUserCampaginSuccess(array) )
    })
    .catch((err) => {
        dispatch( handleUserCampaginFailure(err) )
    })
}