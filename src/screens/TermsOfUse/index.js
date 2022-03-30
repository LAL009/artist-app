import React from 'react';
import { Box } from '@mui/material';
import { Helmet } from 'react-helmet';

const TermsOfUse = (props) => {
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
        <title>Terms & Conditions | WXLLSPACE</title>
        <meta property="og:title" content="Terms & Conditions | WXLLSPACE" />
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
        data-id="630f0b5c-8bd5-42d6-a515-3cd5d1ce2d9e"
        data-type="iframe"
      ></Box>
    </>
  );
};

export default TermsOfUse;
