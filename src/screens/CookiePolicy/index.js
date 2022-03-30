import React from 'react';
import { Box } from '@mui/material';
import { Helmet } from 'react-helmet';

const CookiePolicy = (props) => {
  React.useEffect(() => {
    if (window && document) {
      const script = document.createElement('script');
      const body = document.getElementsByTagName('body')[0];
      script.src = 'https://app.termly.io/embed-policy.min.js';
      body.appendChild(script);
      script.addEventListener('load', () => {});
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Cookies Policy | WXLLSPACE</title>
        <meta property="og:title" content="Cookies Policy | WXLLSPACE" />
      </Helmet>

      <Box
        sx={{
          maxWidth: '1150px',
          width: '100%',
          color: '#FFF',
          mx: 'auto',
          pt: '120px',
          px: '20px',
        }}
        name="termly-embed"
        data-id="4df5509c-4c6c-4a06-9ce8-1fc8b893533a"
        data-type="iframe"
      ></Box>
    </>
  );
};

export default CookiePolicy;
