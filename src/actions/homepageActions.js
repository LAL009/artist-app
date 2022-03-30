import { BEGIN_REQUEST } from 'src/constants/commonConstants';
import {
  HOMEPAGE_LIST_SUCCESS,
  HOMEPAGE_LIST_FAIL,
} from 'src/constants/homepageConstants';
import axios from 'axios';

export const homepageResults = () => async (dispatch) => {
  try {
    dispatch({
      type: BEGIN_REQUEST,
    });

    const { data } = await axios.get(`/api/homepage`);

    dispatch({
      type: HOMEPAGE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: HOMEPAGE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
