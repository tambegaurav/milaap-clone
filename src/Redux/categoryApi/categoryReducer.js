import { CATEGORY_FAILURE, CATEGORY_REQUEST, CATEGORY_SUCCESS } from "./actionTypes"




const initial={
    cards:[],
    isLoading:false,
    isError:false
}

export const categoryReducer=(state=initial,action)=>{
    switch(action.type){
        case CATEGORY_REQUEST:{
            return{
                ...state,
                isLoading:true,
                isError:false
            }
        }
        case CATEGORY_SUCCESS:{
            return{
                ...state,
                cards:action.payload,
                isLoading:false,
                isError:false
            }
        }
        case CATEGORY_FAILURE:{
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        }
        default:{
            return state;
        }
    }
}
