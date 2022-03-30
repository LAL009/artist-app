import axios from 'axios';
import _ from 'lodash';
import { serialize } from 'object-to-formdata';
import { getFullAddress } from 'src/utility';
import {
  ARTIST_GET_DETAILS_FAIL,
  ARTIST_GET_DETAILS_SUCCESS,
  ARTIST_GET_DETAILS_LOADING,
  ARTIST_SUBMIT_INFO_FAIL,
  ARTIST_SUBMIT_INFO_LOADING,
  ARTIST_SUBMIT_INFO_SUCCESS,
} from '../constants/artistConstants';

const getArtistLatAndLong = async (address) => {
  const fullAddress = _.isObject(address)
    ? encodeURIComponent(getFullAddress(address))
    : encodeURIComponent(address);

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      access_token: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
    },
  };

  const { data } = await axios.get(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${fullAddress}.json`,
    config
  );

  return data;
};

export const getArtistDetails = (name) => async (dispatch) => {
  try {
    dispatch({
      type: ARTIST_GET_DETAILS_LOADING,
      payload: name,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(`/api/artists/${name}`, config);

    const res = await getArtistLatAndLong(data.data.address);

    const payload = {
      ...data.data,
      ...{
        address: {
          ...data.data.address,
          ...{ longAndLat: _.get(res, 'features[0].center') },
        },
      },
    };

    dispatch({
      type: ARTIST_GET_DETAILS_SUCCESS,
      payload,
    });
  } catch (error) {
    dispatch({
      type: ARTIST_GET_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const submitArtistInfo = (artistInfo) => async (dispatch) => {
  try {
    dispatch({
      type: ARTIST_SUBMIT_INFO_LOADING,
    });

    const res = await getArtistLatAndLong(artistInfo.fullAddress);

    const formData = serialize(
      {
        ...artistInfo,
        location: {
          type: 'Point',
          coordinates: _.get(res, 'features[0].center'),
        },
      },
      { indices: false, allowEmptyArrays: true }
    );

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        authorization:
          'Bearer ' + JSON.parse(localStorage.getItem('userInfo'))?.token,
      },
    };

    const { data } = await axios.put(`/api/users/profile`, formData, config);

    dispatch({
      type: ARTIST_SUBMIT_INFO_SUCCESS,
      data,
    });
  } catch (error) {
    dispatch({
      type: ARTIST_SUBMIT_INFO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
