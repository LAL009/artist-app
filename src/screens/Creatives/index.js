import React from 'react';
import { Box } from '@mui/material';

import CreativesHeadingSection from '../../components/controls/CreativesHeadingSection';
import CreativesLevelingSection from '../../components/controls/CreativesLevelingSection';
import CreativesWhySection from '../../components/controls/CreativesWhySection';
import CreativesSearchSection from '../../components/controls/CreativesSearchSection';
import CreativesProposalSection from '../../components/controls/CreativesProposalSection';
import CreativesMuralsSection from '../../components/controls/CreativesMuralsSection';
import { Helmet } from 'react-helmet';

const Creatives = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="The first marketplace connecting 
          real estate developers and artists. 
          Sign up now and get access to our network of creative talent from around the world."
        />
        <meta
          property="og:image"
          content={`${process.env.REACT_APP_S3_BASE_URL}/assets/meta/creatives-OG.png`}
        />
        <title>Creatives | WXLLSPACE</title>
      </Helmet>
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <CreativesHeadingSection />
      </Box>

      <Box
        sx={{
          marginTop: '97px',
        }}
      >
        <CreativesLevelingSection />
      </Box>

      <Box
        sx={{
          marginTop: '120px',
        }}
      >
        <CreativesWhySection />
      </Box>

      <Box
        sx={{
          marginTop: '120px',
        }}
      >
        <CreativesSearchSection />
      </Box>

      <Box
        sx={{
          marginTop: '120px',
        }}
      >
        <CreativesProposalSection />
      </Box>

      <Box
        sx={{
          marginTop: '120px',
          marginBottom: '120px',
        }}
      >
        <CreativesMuralsSection />
      </Box>
    </>
  );
};

export default Creatives;
