import React from 'react';
import { Box } from '@mui/material';
import AboutFounderSection from 'src/components/controls/AboutFounderSection';
import AboutSubcribeSection from 'src/components/controls/AboutSubcribeSection';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Our mission is to support the emerging Urban Art ecosystem by connecting artists, brands, investors and influencers through a single online marketplace."
        />
        <meta
          property="og:image"
          content={`${process.env.REACT_APP_S3_BASE_URL}/assets/meta/about-us-OG.png`}
        />
        <title>Our Mission | WXLLSPACE</title>
      </Helmet>
      <Box
        sx={{
          paddingTop: '213.8px',
        }}
      >
        <AboutFounderSection />
      </Box>

      <Box
        sx={{
          marginTop: '80px',
          marginBottom: '80px',
        }}
      >
        <AboutSubcribeSection />
      </Box>
    </>
  );
};

export default About;
