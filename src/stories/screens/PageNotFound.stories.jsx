import React from 'react';
import Header from './../../components/layout/Header';
import Footer from './../../components/layout/Footer';
import PageNotFound from './../../screens/404/index';

export default {
  title: 'Screens/PageNotFound',
  component: PageNotFound,
};

const Template = (args) => {
  return (
    <>
      <Header />
      <PageNotFound {...args} />
      <Footer />
    </>
  );
};
export const Default = Template.bind({});
