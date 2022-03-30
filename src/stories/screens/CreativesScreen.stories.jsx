import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import CreativesScreen from '../../screens/Creatives';
import { Box } from '@mui/material';

export default {
  title: 'CreativesPage/CreativesScreen',
  component: CreativesScreen,
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

      <CreativesScreen {...args} />

      <Footer />
    </>
  );
};

export const Default = Template.bind({});
