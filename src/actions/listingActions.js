import axios from 'axios';
import _ from 'lodash';
import { serialize } from 'object-to-formdata';

import {
  SUBMIT_LISTING_REQUEST,
  SUBMIT_LISTING_SUCCESS,
  SUBMIT_LISTING_ERROR,
  WALL_GET_DETAILS_FAIL,
  WALL_GET_DETAILS_SUCCESS,
  WALL_GET_DETAILS_LOADING,
} from 'src/constants/listingConstants';
import { getFullAddress } from 'src/utility';

const getListingLatAndLong = async (address) => {
  const fullAddress = encodeURIComponent(getFullAddress(address));
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

export const getListing = (slug) => async (dispatch) => {
  try {
    dispatch({
      type: WALL_GET_DETAILS_LOADING,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(`/api/listings/${slug}`, config);

    dispatch({
      type: WALL_GET_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: WALL_GET_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const submitListing = (listingDetails, callback) => async (dispatch) => {
  try {
    dispatch({
      type: SUBMIT_LISTING_REQUEST,
    });

    const res = await getListingLatAndLong(listingDetails.address);
    const zipcode = _.get(res, 'features[0].context[1].text');
    listingDetails.address.zipcode = zipcode;
    const images = [...listingDetails.images];
    delete listingDetails.images;
    const formData = serialize(
      {
        ...listingDetails,
        location: {
          type: 'Point',
          coordinates: _.get(res, 'features[0].center'),
        },
      },
      { indices: false, allowEmptyArrays: true }
    );

    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        authorization:
          'Bearer ' + JSON.parse(localStorage.getItem('userInfo'))?.token,
      },
    };

    const { data } = await axios.post(`/api/listings`, formData, config);

    dispatch({
      type: SUBMIT_LISTING_SUCCESS,
      payload: data,
    });

    callback(true, data.slug);
  } catch (error) {
    dispatch({
      type: SUBMIT_LISTING_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    callback(false);
  }
};
