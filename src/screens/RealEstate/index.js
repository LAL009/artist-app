import React from 'react';
import { Box } from '@mui/material';

import RealEstateHeadingSection from 'src/components/controls/RealEstateHeadingSection';
import RealEstateWhySection from 'src/components/controls/RealEstateWhySection';
import RealEstateWallSection from 'src/components/controls/RealEstateWallSection';
import RealEstateCanvasSection from 'src/components/controls/RealEstateCanvasSection';
import RealEstateCostSection from 'src/components/controls/RealEstateCostSection';
import RealEstateAnalyticsSection from 'src/components/controls/RealEstateAnalyticsSection';
import RealEstateServiceSection from 'src/components/controls/RealEstateServiceSection';
import RealEstateVandalismSection from 'src/components/controls/RealEstateVandalismSection';
import { Helmet } from 'react-helmet';

const RealEstate = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Connect with Creatives for Murals & Street Art in 2021."
        />
        <meta
          property="og:image"
          content={`${process.env.REACT_APP_S3_BASE_URL}/assets/meta/real-estate-OG.png`}
        />
        <title>Real Estate | WXLLSPACE</title>
      </Helmet>
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          overflowX: 'hidden',
        }}
      >
        <RealEstateHeadingSection />
      </Box>

      <Box
        sx={{
          marginTop: '90px',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            width: '268px',
            height: '268px',
            backgroundColor: '#5D1DF1',
            filter: 'blur(240px)',
            position: 'absolute',
            left: '60%',
            top: '-100px',
            zIndex: 1,
            display: {
              xs: 'none',
              sm: 'block',
            },
          }}
        ></Box>
        <RealEstateWhySection />
      </Box>

      <Box
        sx={{
          marginTop: '160px',
          overflowX: 'hidden',
        }}
      >
        <RealEstateWallSection />
      </Box>

      <Box
        sx={{
          marginTop: '160px',
          overflowX: 'hidden',
        }}
      >
        <RealEstateCanvasSection />
      </Box>

      <Box
        sx={{
          marginTop: '160px',
          overflowX: 'hidden',
        }}
      >
        <RealEstateCostSection />
      </Box>

      <Box
        sx={{
          marginTop: '160px',
          overflowX: 'hidden',
        }}
      >
        <RealEstateAnalyticsSection />
      </Box>

      <Box
        sx={{
          marginTop: '120px',
          overflowX: 'hidden',
        }}
      >
        <RealEstateServiceSection />
      </Box>

      <Box
        sx={{
          marginTop: '113px',
          marginBottom: '113px',
          overflowX: 'hidden',
        }}
      >
        <RealEstateVandalismSection />
      </Box>
    </>
  );
};

export default RealEstate;
