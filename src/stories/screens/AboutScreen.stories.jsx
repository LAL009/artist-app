import React from 'react';
import AboutScreen from '../../screens/About/index';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Box } from '@mui/material';

export default {
  title: 'AboutPage/AboutScreen',
  component: AboutScreen,
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

      <AboutScreen {...args} />

      <Footer />
    </>
  );
};

export const Default = Template.bind({});
