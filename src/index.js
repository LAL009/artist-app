import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import './configureMapbox.js';
import { StyledEngineProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import App from './App';
import ScrollToTop from './utility/ScrollToTop';

const fontSize = 14;
const htmlFontSize = 16;
const coef = fontSize / 14;

export const theme = createTheme({
  palette: {
    background: {
      default: '#06102B',
    },
    text: {
      primary: '#ffffff',
    },
    primary: {
      main: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    h1: {
      fontSize: 60,
      fontWeight: 900,
      fontStyle: 'normal',
      letterSpacing: '-0.05em',
    },
    h2: {
      fontSize: 40,
      fontWeight: 900,
      fontStyle: 'normal',

      letterSpacing: '-0.05em',
    },
    h3: {
      fontSize: 34,
      fontWeight: 900,
      fontStyle: 'normal',
    },
    h4: {
      fontSize: 24,
      fontWeight: 900,
      fontStyle: 'normal',
    },
    h5: {
      fontSize: 20,
      fontWeight: 'bold',
      fontStyle: 'normal',
    },
    h6: {
      fontSize: 18,
      fontWeight: 'bold',
      fontStyle: 'normal',
    },
    pxToRem: (size) => `${(size / htmlFontSize) * coef}rem`,
  },
});

Sentry.init({
  dsn: "https://87ef603dc10142888a8576aef2f48545@o1089395.ingest.sentry.io/6104433",
  integrations: [new Integrations.BrowserTracing()],
  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </StyledEngineProvider>,

  document.getElementById('root')
);
