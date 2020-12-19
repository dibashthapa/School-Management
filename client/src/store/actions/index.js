import axios from "axios";
import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actions";
import { SIGNUP_ERROR, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actions";

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST,
    });

    return axios
      .post("http://localhost:8000/api/auth/login", {
        email,
        password,
      })
      .then((res) => {
        if (res.data.message) {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data.message,
          });
        } else {
          dispatch({
            type: LOGIN_ERROR,
            payload: res.data.error,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_ERROR,
          payload: err.message,
        });
      });
  };
};

export const registerUser = ({
  name,
  email ,
  password , 
  grade, 
  role,
  stream
}) => {
  console.log(name , email , password , grade , stream, role)
  return (dispatch) => {
    dispatch({
      type: SIGNUP_REQUEST,
    });

    return axios
      .post("http://localhost:8000/api/register", {
        name , 
        email , 
        password , 
        grade , 
        role ,
        stream
      })
      .then((res) => {
        if (res.data.message) {
          dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data,
          });
        } else {
          dispatch({
            type: SIGNUP_ERROR,
            payload: res.data.error,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: SIGNUP_ERROR,
          payload: err.message,
        });
      });
  };
};
