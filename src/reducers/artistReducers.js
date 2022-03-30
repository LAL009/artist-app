import {
  ARTIST_GET_DETAILS_FAIL,
  ARTIST_GET_DETAILS_IDLE,
  ARTIST_GET_DETAILS_LOADING,
  ARTIST_GET_DETAILS_SUCCESS,
} from '../constants/artistConstants';

const initialState = {
  status: ARTIST_GET_DETAILS_IDLE,
  error: null,
  data: {},
  slug: '',
};
export const artistDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTIST_GET_DETAILS_LOADING:
      return {
        ...state,
        status: ARTIST_GET_DETAILS_LOADING,
        data: {},
        slug: action.payload,
      };
    case ARTIST_GET_DETAILS_IDLE:
      return { ...state, status: ARTIST_GET_DETAILS_IDLE };
    case ARTIST_GET_DETAILS_SUCCESS:
      return {
        ...state,
        status: ARTIST_GET_DETAILS_SUCCESS,
        data: action.payload,
      };
    case ARTIST_GET_DETAILS_FAIL:
      return {
        ...state,
        status: ARTIST_GET_DETAILS_FAIL,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const selectArtistDetails = (state) => {
  return state.artistDetails;
};

export const requestStatus = (state) => {
  return state.artistDetails.status;
};
