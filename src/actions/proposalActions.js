import axios from 'axios';
import { serialize } from 'object-to-formdata';

import {
  SUBMIT_PROPOSAL_REQUEST,
  SUBMIT_PROPOSAL_SUCCESS,
  SUBMIT_PROPOSAL_ERROR,
} from 'src/constants/proposalConstants';

export const submitProposal =
  (proposalDetails, callback) => async (dispatch) => {
    try {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));

      if (userInfo === null) {
        throw new Error('Please login first to submit proposal');
      }

      dispatch({
        type: SUBMIT_PROPOSAL_REQUEST,
      });

      const { proposalImage, ...proposalDetailValues } = proposalDetails;
      const formData = serialize(
        {
          ...proposalDetailValues,
        },
        { indices: false, allowEmptyArrays: true, nullsAsUndefineds: true }
      );
      for (let i = 0; i < proposalImage.length; i++) {
        formData.append('proposalImage', proposalImage[i]);
      }

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          authorization:
            'Bearer ' + JSON.parse(localStorage.getItem('userInfo'))?.token,
        },
      };

      const { data } = await axios.post(`/api/proposals`, formData, config);

      dispatch({
        type: SUBMIT_PROPOSAL_SUCCESS,
        payload: data,
      });

      callback(true);
    } catch (error) {
      dispatch({
        type: SUBMIT_PROPOSAL_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      callback(false);
    }
  };
