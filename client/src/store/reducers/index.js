import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actions/actions";
import {
  SIGNUP_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "../actions/actions";

import {
  CREATE_STUDENT_FAILURE,
  CREATE_STUDENT_SUCCESS,
  CREATE_STUDENT_REQUEST,
} from "../actions/actions";
const initialState = {
  msg: "",
  loading: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        msg: "",
        loading: true,
        error: "",
      };

    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload["access_token"]);
      localStorage.setItem("role", action.payload["user"].role);
      return {
        msg: action.payload["access_token"],
        loading: false,
        error: "",
      };

    case LOGIN_ERROR:
      return {
        msg: "",
        loading: false,
        error: action.payload,
      };
    case SIGNUP_REQUEST:
      return {
        msg: "",
        loading: true,
        error: "",
      };

    case SIGNUP_SUCCESS:
      return {
        msg: action.payload,
        loading: false,
        error: "",
      };

    case SIGNUP_ERROR:
      return {
        msg: "",
        loading: false,
        error: action.payload,
      };

    case CREATE_STUDENT_REQUEST:
      return {
        msg: "",
        loading: true,
        error: "",
      };

    case CREATE_STUDENT_SUCCESS:
      return {
        msg: action.payload,
        loading: false,
        error: "",
      };

    case CREATE_STUDENT_FAILURE:
      return {
        msg: "",
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
