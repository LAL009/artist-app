import {
  WALL_GET_DETAILS_LOADING,
  WALL_GET_DETAILS_SUCCESS,
  WALL_GET_DETAILS_FAIL,
  WALL_GET_DETAILS_IDLE,
} from 'src/constants/listingConstants';

const initialState = {
  status: WALL_GET_DETAILS_IDLE,
  error: null,
  data: {},
  slug: '',
};

export const listingReducer = (state = initialState, action) => {
  switch (action.type) {
    case WALL_GET_DETAILS_LOADING:
      return {
        ...state,
        status: WALL_GET_DETAILS_LOADING,
        data: {},
        slug: action.payload,
      };
    case WALL_GET_DETAILS_SUCCESS:
      return {
        ...state,
        status: WALL_GET_DETAILS_SUCCESS,
        data: action.payload,
      };
    case WALL_GET_DETAILS_FAIL:
      return {
        ...state,
        status: WALL_GET_DETAILS_FAIL,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const selectListingDetails = (state) => {
  return state.listingDetails;
};

export const requestStatus = (state) => {
  return state.listingDetails.status;
};
