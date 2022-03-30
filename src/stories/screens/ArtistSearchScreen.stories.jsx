import React from 'react';

import Header from './../../components/layout/Header';
import Footer from './../../components/layout/Footer';
import ArtistSearchScreen from './../../screens/ArtistSearch/index';

export default {
  title: 'Screens/ArtistSearchScreen',
  component: ArtistSearchScreen,
};

const Template = (args) => {
  return (
    <>
      <Header />
      <ArtistSearchScreen {...args} />
      <Footer />
    </>
  );
};
export const Default = Template.bind({});
