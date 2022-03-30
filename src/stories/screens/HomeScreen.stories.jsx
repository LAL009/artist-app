import React from 'react';

import Header from './../../components/layout/Header';
import Footer from './../../components/layout/Footer';
import HomeScreen from './../../screens/Home/index';

export default {
  title: 'Screens/HomeScreen',
  component: HomeScreen,
};

const Template = (args) => {
  return (
    <>
      <Header />
      <HomeScreen {...args} />
      <Footer />
    </>
  );
};
export const Default = Template.bind({});
