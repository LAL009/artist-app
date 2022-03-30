import _ from 'lodash';
import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNOUT,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_RESET_PASSWORD_FAIL,
  USER_RESET_PASSWORD_SUCCESS,
} from '../constants/userConstants';

export const REQUEST_STATUS = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  SUCCEEDED: 'SUCCEEDED',
  FAILED: 'FAILED',
};

export const initialState = {
  status: REQUEST_STATUS.IDLE,
  error: null,
  data: {},
};

export const userSignInReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return {
        status: REQUEST_STATUS.LOADING,
      };
    case USER_SIGNIN_SUCCESS:
    case USER_RESET_PASSWORD_SUCCESS:
      return {
        status: REQUEST_STATUS.SUCCEEDED,
        data: action.payload,
      };
    case USER_SIGNIN_FAIL:
    case USER_RESET_PASSWORD_FAIL:
      return {
        status: REQUEST_STATUS.FAILED,
        error: action.payload,
      };
    case USER_SIGNUP_REQUEST:
      return {
        status: REQUEST_STATUS.LOADING,
      };
    case USER_SIGNUP_SUCCESS:
      return {
        status: REQUEST_STATUS.SUCCEEDED,
        data: action.payload,
      };
    case USER_SIGNUP_FAIL:
      return {
        status: REQUEST_STATUS.FAILED,
        error: action.payload,
      };
    case USER_SIGNOUT:
      return { ...initialState };
    default:
      return state;
  }
};

export const selectIsUserSignedIn = (state) =>
  _.has(state.userSignIn.data, 'name');

export const selectSignedInUser = (state) => state.userSignIn.data;

export const selectUserSignInStatus = (state) => ({
  status: state.userSignIn.status,
  error: state.userSignIn.error,
  data: state.userSignIn.data,
});
