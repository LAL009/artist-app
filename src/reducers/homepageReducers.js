import { BEGIN_REQUEST } from '../constants/commonConstants';
import {
  HOMEPAGE_LIST_SUCCESS,
  HOMEPAGE_LIST_FAIL,
} from '../constants/homepageConstants';

export const homepageReducer = (
  state = {
    results: {
      artists: [],
      cities: [],
      wxlls: [],
      posts: [],
    },
  },
  action
) => {
  switch (action.type) {
    case BEGIN_REQUEST:
      return { ...state, ...{ loading: true } };
    case HOMEPAGE_LIST_SUCCESS:
      return {
        ...state,
        ...{ loading: false, results: action.payload },
      };
    case HOMEPAGE_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
