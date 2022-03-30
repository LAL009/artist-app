import React from 'react';
import { Box } from '@mui/material';
import ContactSection from 'src/components/controls/ContactSection';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Want to connect with a creative for a mural? Are you an artist searching for walls? Reach out today and let's connect to get you connected."
        />
        <meta
          property="og:image"
          content={`${process.env.REACT_APP_S3_BASE_URL}/assets/meta/contact-us-OG.png`}
        />
        <title>Contact Us | WXLLSPACE</title>
      </Helmet>
      <Box
        sx={{
          padding: '254px 0 110px 0',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            width: '268px',
            height: '268px',
            backgroundColor: '#6AB3DF',
            filter: 'blur(200px)',
            position: 'absolute',
            left: 0,
            top: '20%',
            transform: 'translateY(-20%)',
            zIndex: 1,
          }}
        ></Box>

        <Box
          sx={{
            width: '268px',
            height: '268px',
            backgroundColor: '#00C8C8',
            filter: 'blur(200px)',
            position: 'absolute',
            right: 0,
            top: '20%',
            transform: 'translateY(-20%)',
            zIndex: 1,
          }}
        ></Box>

        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
          }}
        >
          <ContactSection />
        </Box>
      </Box>
    </>
  );
};

export default Contact;
