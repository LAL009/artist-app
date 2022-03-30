import React from 'react';
import Header from './../../components/layout/Header';
import Footer from './../../components/layout/Footer';
import FAQScreen from './../../screens/FAQ/index';

export default {
  title: 'Screens/FAQ',
  component: FAQScreen,
};

const Template = (args) => {
  return (
    <>
      <Header />
      <FAQScreen {...args} />
      <Footer />
    </>
  );
};
export const Default = Template.bind({});
