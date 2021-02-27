import axios from 'axios';
import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from './actions';
import {
  SIGNUP_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  CREATE_STUDENT_FAILURE,
  CREATE_STUDENT_REQUEST,
  CREATE_STUDENT_SUCCESS,
} from './actions';

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST,
    });

    return axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, {
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

export const createStudent = ({ name, grade, stream }) => {
  return (dispatch) => {
    dispatch({ type: CREATE_STUDENT_REQUEST });
    try {
      const response = axios.put(
        `${process.env.REACT_APP_API_URL}/user/students`,
        {
          name,
          grade,
          stream,
        }
      );
      dispatch({ type: CREATE_STUDENT_SUCCESS, payload: response });
    } catch (err) {
      dispatch({ type: CREATE_STUDENT_FAILURE, payload: err.message });
    }
  };
};

export const registerUser = ({
  name,
  email,
  password,
  grade,
  role,
  stream,
}) => {
  return (dispatch) => {
    dispatch({
      type: SIGNUP_REQUEST,
    });

    return axios
      .post(`${process.env.REACT_APP_API_URL}/register`, {
        name,
        email,
        password,
        grade,
        role,
        stream,
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
