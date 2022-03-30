import React from 'react';
import Footer from './../../components/layout/Footer';
import CaseStudyScreen from '../../screens/CaseStudy/index';
import { Box } from '@mui/material';

export default {
  title: 'Screens/CaseStudyScreen',
  component: CaseStudyScreen,
};

const Template = (args) => {
  return (
    <>
      <CaseStudyScreen {...args} />
      <Box
        sx={{
          marginTop: '189px',
        }}
      >
        <Footer />
      </Box>
    </>
  );
};

export const Default = Template.bind({});
