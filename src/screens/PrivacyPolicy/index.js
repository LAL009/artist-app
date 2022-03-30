import React from 'react';
import { Box } from '@mui/material';
import { Helmet } from 'react-helmet';

const PrivacyPolicy = (props) => {
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
        <title>Privacy Policy | WXLLSPACE</title>
        <meta property="og:title" content="Privacy Policy | WXLLSPACE" />
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
        data-id="8f82c96e-0a5e-46be-8142-64c6830ff219"
        data-type="iframe"
      ></Box>
    </>
  );
};

export default PrivacyPolicy;
