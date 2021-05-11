import { USER_CAMPAGIN_FAILURE, USER_CAMPAGIN_REQUEST, USER_CAMPAGIN_SUCCESS } from "./actionType";


const initState = {
    userCampagin: [],
    isLoading: false,
    isError: false
}

export const userCampaginReducer = ( state = initState, { type, payload } ) => {
    switch (type) {
        case USER_CAMPAGIN_REQUEST:{
            return {
                ...state,
                isLoading: true
            }
        }
        case USER_CAMPAGIN_SUCCESS: {
            return {
                ...state,
                userCampagin: payload,
                isLoading: false,
                isError: false
            }
        }
        case USER_CAMPAGIN_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
    
        default:
            return state;
    }
}