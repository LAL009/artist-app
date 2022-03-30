import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { homepageReducer } from './reducers/homepageReducers';
import {
  userSignInReducer,
  initialState as userInitialState,
} from './reducers/userReducers';
import { artistDetailsReducer } from './reducers/artistReducers';
import { artistInformationFormReducer } from './reducers/artistInformationFormReducer';
import { marketplaceReducer } from './reducers/marketplaceReducer';
import { listingReducer } from './reducers/listingReducers';
import { submitProposalReducer } from './reducers/proposalReducers';
import { submitListingReducer } from './reducers/submitListingReducers';
import { artistSearchReducer } from './reducers/artistSearchReducer';
import { submitContactUsReducer } from './reducers/contactReducer';

const reducer = combineReducers({
  artistDetails: artistDetailsReducer,
  artistSearch: artistSearchReducer,
  artistInformationForm: artistInformationFormReducer,
  marketplace: marketplaceReducer,
  userSignIn: userSignInReducer,
  homepage: homepageReducer,
  listingDetails: listingReducer,
  submitProposal: submitProposalReducer,
  submitListing: submitListingReducer,
  submitContactUs: submitContactUsReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userSignIn: {
    ...userInitialState,
    data: userInfoFromStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
