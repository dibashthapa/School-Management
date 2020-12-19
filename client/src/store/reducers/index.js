import { 
    LOGIN_ERROR, 
    LOGIN_REQUEST , 
    LOGIN_SUCCESS } from '../actions/actions';
import {
    SIGNUP_ERROR,
    SIGNUP_REQUEST, 
    SIGNUP_SUCCESS
} from '../actions/actions'; 


const initialState = {
    msg:"",
    loading:false , 
    error:""
}


export const loginReducer = ( state= initialState , action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                msg:'',
                loading:true ,
                error:''
            }
        
        case LOGIN_SUCCESS:
        localStorage.setItem("token", action.payload["access_token"]);
        localStorage.setItem("role", action.payload["user"].role);
            return {
                msg: action.payload["access_token"] , 
                loading:false , 
                error:''
            }
        
        case LOGIN_ERROR:
            return {
                msg:'',
                loading:false ,
                error:action.payload
            }
        default:
            return state
    }
}


export const registerReducer = ( state= initialState , action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return {
                msg:'',
                loading:true ,
                error:''
            }
        
        case SIGNUP_SUCCESS:
            return {
                msg: action.payload , 
                loading:false , 
                error:''
            }
        
        case SIGNUP_ERROR:
            return {
                msg:'',
                loading:false ,
                error:action.payload
            }
        default:
            return state
    }
}

