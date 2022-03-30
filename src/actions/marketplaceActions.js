import axios from 'axios';

import {
  MARKETPLACE_GET_LIST_LOADING,
  MARKETPLACE_GET_LIST_SUCCESS,
  MARKETPLACE_GET_LIST_FAIL,
  MARKETPLACE_ARTIST_UPDATE_FILTER_AVAILABILITY,
  MARKETPLACE_ARTIST_UPDATE_FILTER_VERIFICATION_STATUS,
  MARKETPLACE_ARTIST_UPDATE_FILTER_RISING_TALENT_STATUS,
  MARKETPLACE_GET_REGISTERED_CITIES_LOADING,
  MARKETPLACE_GET_REGISTERED_CITIES_SUCCESS,
  MARKETPLACE_GET_REGISTERED_CITIES_FAIL,
  MARKETPLACE_WALL_UPDATE_FILTER_CONDITION,
  MARKETPLACE_WALL_UPDATE_FILTER_CONSTRUCTION,
} from '../constants/marketplaceConstants';

export const getList =
  ({ city, filters }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: MARKETPLACE_GET_LIST_LOADING,
      });

      const searchParams = {
        city,
      };

      for (const property in filters.artist) {
        searchParams[`artist_${property}`] =
          filters.artist[property] === true ? 1 : 0;
      }

      for (const property in filters.wall) {
        searchParams[`wall_${property}`] = filters.wall[property];
      }

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        params: searchParams,
      };

      const { data } = await axios.get(`/api/marketplaces`, config);

      const payload = data.data;

      dispatch({
        type: MARKETPLACE_GET_LIST_SUCCESS,
        payload,
      });

      dispatch(getRegisteredCities());

      return payload;
    } catch (error) {
      dispatch({
        type: MARKETPLACE_GET_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getRegisteredCities = () => async (dispatch) => {
  try {
    dispatch({
      type: MARKETPLACE_GET_REGISTERED_CITIES_LOADING,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(`/api/marketplaces/cities`, config);

    const payload = data.data;

    dispatch({
      type: MARKETPLACE_GET_REGISTERED_CITIES_SUCCESS,
      payload,
    });

    return payload;
  } catch (error) {
    dispatch({
      type: MARKETPLACE_GET_REGISTERED_CITIES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateArtistAvailabilityFilter = (status) => {
  return {
    type: MARKETPLACE_ARTIST_UPDATE_FILTER_AVAILABILITY,
    payload: status,
  };
};

export const updateArtistVerificationStatusFilter = (status) => {
  return {
    type: MARKETPLACE_ARTIST_UPDATE_FILTER_VERIFICATION_STATUS,
    payload: status,
  };
};

export const updateArtistRisingTalentFilter = (status) => {
  return {
    type: MARKETPLACE_ARTIST_UPDATE_FILTER_RISING_TALENT_STATUS,
    payload: status,
  };
};

export const updateWallConditionFilter = (status) => {
  return {
    type: MARKETPLACE_WALL_UPDATE_FILTER_CONDITION,
    payload: status,
  };
};

export const updateWallConstructionFilter = (status) => {
  return {
    type: MARKETPLACE_WALL_UPDATE_FILTER_CONSTRUCTION,
    payload: status,
  };
};
