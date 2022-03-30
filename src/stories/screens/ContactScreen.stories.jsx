import React from 'react';
import ContactScreen from '../../screens/Contact/index';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Box } from '@mui/material';

export default {
  title: 'ContactPage/ContactScreen',
  component: ContactScreen,
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

      <ContactScreen {...args} />

      <Footer />
    </>
  );
};

export const Default = Template.bind({});
