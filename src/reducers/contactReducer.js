import {
  SUBMIT_CONTACT_US_REQUEST,
  SUBMIT_CONTACT_US_SUCCESS,
  SUBMIT_CONTACT_US_ERROR,
} from 'src/constants/contactConstants';

export const REQUEST_STATUS = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  SUCCEEDED: 'SUCCEEDED',
  FAILED: 'FAILED',
};

const initialState = {
  status: REQUEST_STATUS.IDLE,
  error: null,
  data: {},
};

export const submitContactUsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_CONTACT_US_REQUEST:
      return { status: REQUEST_STATUS.LOADING };
    case SUBMIT_CONTACT_US_SUCCESS:
      return {
        status: REQUEST_STATUS.SUCCEEDED,
        data: action.payload,
      };
    case SUBMIT_CONTACT_US_ERROR:
      return { status: REQUEST_STATUS.FAILED, error: action.payload };
    default:
      return state;
  }
};

export const selectContactUsDetails = (state) => {
  return state.submitContactUs;
};

export const requestStatus = (state) => {
  return state.submitContactUs.status;
};
