import React from 'react';
import Header from './../../components/layout/Header';
import Footer from './../../components/layout/Footer';
import InformationArtistScreen from '../../screens/InformationArtist';

export default {
  title: 'Screens/InformationArtistScreen',
  component: InformationArtistScreen,
  argTypes: { onSubmit: { action: 'submitted' } },
};

const Template = (args) => {
  return (
    <>
      <Header />
      <InformationArtistScreen {...args} />
      <Footer />
    </>
  );
};
export const Default = Template.bind({});
