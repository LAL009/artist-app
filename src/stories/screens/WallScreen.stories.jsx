import React from 'react';

import Header from './../../components/layout/Header';
import Footer from './../../components/layout/Footer';
import WallScreen from './../../screens/Wall/index';

export default {
  title: 'Screens/WallScreen',
  component: WallScreen,
};

const Template = (args) => {
  return (
    <>
      <Header />
      <WallScreen {...args} />
      <Footer />
    </>
  );
};
export const Default = Template.bind({});
