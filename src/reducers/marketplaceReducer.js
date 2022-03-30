import _ from 'lodash';
import {
  MARKETPLACE_GET_LIST_IDLE,
  MARKETPLACE_GET_LIST_FAIL,
  MARKETPLACE_GET_LIST_LOADING,
  MARKETPLACE_GET_LIST_SUCCESS,
  MARKETPLACE_ARTIST_UPDATE_FILTER_AVAILABILITY,
  MARKETPLACE_ARTIST_UPDATE_FILTER_VERIFICATION_STATUS,
  MARKETPLACE_ARTIST_UPDATE_FILTER_RISING_TALENT_STATUS,
  MARKETPLACE_WALL_UPDATE_FILTER_CONDITION,
  MARKETPLACE_WALL_UPDATE_FILTER_CONSTRUCTION,
  MARKETPLACE_GET_REGISTERED_CITIES_LOADING,
  MARKETPLACE_GET_REGISTERED_CITIES_SUCCESS,
  MARKETPLACE_GET_REGISTERED_CITIES_IDLE,
  MARKETPLACE_GET_REGISTERED_CITIES_FAIL,
} from '../constants/marketplaceConstants';

export const REQUEST_STATUS = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  SUCCEEDED: 'SUCCEEDED',
  FAILED: 'FAILED',
};

const initialState = {
  status: MARKETPLACE_GET_LIST_IDLE,
  error: null,
  data: {
    artists: [],
    wxlls: [],
  },
  filters: {
    cities: [],
    artist: {
      isReady: true,
      isVerified: false,
      isRising: false,
    },
    wall: {
      condition: undefined,
      construction: undefined,
      budget: undefined,
    },
  },
};
export const marketplaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case MARKETPLACE_GET_LIST_LOADING:
      return {
        ...state,
        status: MARKETPLACE_GET_LIST_LOADING,
      };

    case MARKETPLACE_GET_LIST_SUCCESS:
      return {
        ...state,
        status: MARKETPLACE_GET_LIST_SUCCESS,
        data: action.payload,
      };

    case MARKETPLACE_GET_LIST_IDLE:
      return {
        ...state,
        status: MARKETPLACE_GET_LIST_IDLE,
      };

    case MARKETPLACE_GET_LIST_FAIL:
      return {
        ...state,
        status: MARKETPLACE_GET_LIST_FAIL,
        error: action.payload,
      };

    case MARKETPLACE_GET_REGISTERED_CITIES_LOADING:
      return {
        ...state,
        status: MARKETPLACE_GET_REGISTERED_CITIES_LOADING,
      };

    case MARKETPLACE_GET_REGISTERED_CITIES_SUCCESS:
      return {
        ...state,
        status: MARKETPLACE_GET_REGISTERED_CITIES_IDLE,
        ...{
          filters: _.merge(state.filters, {
            cities: action.payload.cities,
          }),
        },
      };

    case MARKETPLACE_GET_REGISTERED_CITIES_IDLE:
      return {
        ...state,
        status: MARKETPLACE_GET_REGISTERED_CITIES_IDLE,
      };

    case MARKETPLACE_GET_REGISTERED_CITIES_FAIL:
      return {
        ...state,
        status: MARKETPLACE_GET_REGISTERED_CITIES_FAIL,
        error: action.payload,
      };

    case MARKETPLACE_ARTIST_UPDATE_FILTER_AVAILABILITY:
      return {
        ...state,
        status: MARKETPLACE_GET_LIST_IDLE,
        ...{
          filters: _.merge(state.filters, {
            artist: {
              isReady: action.payload,
            },
          }),
        },
      };

    case MARKETPLACE_ARTIST_UPDATE_FILTER_VERIFICATION_STATUS:
      return {
        ...state,
        status: MARKETPLACE_GET_LIST_IDLE,
        ...{
          filters: _.merge(state.filters, {
            artist: {
              isVerified: action.payload,
            },
          }),
        },
      };

    case MARKETPLACE_ARTIST_UPDATE_FILTER_RISING_TALENT_STATUS:
      return {
        ...state,
        status: MARKETPLACE_GET_LIST_IDLE,
        ...{
          filters: _.merge(state.filters, {
            artist: {
              isRising: action.payload,
            },
          }),
        },
      };

    case MARKETPLACE_WALL_UPDATE_FILTER_CONDITION:
      return {
        ...state,
        status: MARKETPLACE_GET_LIST_IDLE,
        ...{
          filters: _.merge(state.filters, {
            wall: {
              condition: action.payload,
            },
          }),
        },
      };

    case MARKETPLACE_WALL_UPDATE_FILTER_CONSTRUCTION:
      return {
        ...state,
        status: MARKETPLACE_GET_LIST_IDLE,
        ...{
          filters: _.merge(state.filters, {
            wall: {
              construction: action.payload,
            },
          }),
        },
      };

    default:
      return state;
  }
};

export const selectArtists = (state) => {
  return state.marketplace.data.artists;
};

export const selectArtistFilters = (state) => {
  return state.marketplace.filters.artist;
};

export const selectWallFilters = (state) => {
  return state.marketplace.filters.wall;
};

export const selectCitiesFilters = (state) => {
  return state.marketplace.filters.cities;
};

export const selectWxlls = (state) => {
  return state.marketplace.data.wxlls;
};

export const requestStatus = (state) => {
  return state.marketplace.status;
};
