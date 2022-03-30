import React from 'react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import { theme } from '../src/index';
import '../src/index.css';
import '../src/App.css';
import { MARKETPLACE_GET_LIST_IDLE } from '../src/constants/marketplaceConstants';

const store = {
  getState: () => {
    return {
      artistDetails: {},
      marketplace: {
        status: MARKETPLACE_GET_LIST_IDLE,
        error: null,
        data: {
          artists: [],
          wxlls: [],
        },
        filters: {
          artist: {
            isReady: true,
            isVerified: true,
          },
          wall: {},
        },
      },
      userSignIn: {},
      userSignUp: {},
      homepage: {},
      listingDetails: {},
      submitProposal: {},
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch'),
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'wxllspace',
    values: [
      {
        name: 'wxllspace',
        value: '#06102B',
      },
      {
        name: 'default',
        value: '#ffffff',
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  decorators: [addDecorator(StoryRouter())],
  layout: 'fullscreen',
};

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    </Provider>
  ),
];
