import React from 'react';
import RealEstateScreen from '../../screens/RealEstate';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Box } from '@mui/material';

export default {
  title: 'RealEstatePage/RealEstateScreen',
  component: RealEstateScreen,
};

const Template = (args) => {
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          zIndex: 4,
        }}
      >
        <Header />
      </Box>

      <RealEstateScreen {...args} />

      <Footer />
    </>
  );
};

export const Default = Template.bind({});
