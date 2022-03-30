import React from 'react';
import Header from './../../components/layout/Header';
import Footer from './../../components/layout/Footer';
import InformationOwnerScreen from '../../screens/InformationOwner';

export default {
  title: 'Screens/InformationOwnerScreen',
  component: InformationOwnerScreen,
};

const Template = (args) => {
  return (
    <>
      <Header />
      <InformationOwnerScreen {...args} />
      <Footer />
    </>
  );
};
export const Default = Template.bind({});
