import React from 'react';

import LoginScreen from './../../screens/Login/index';

export default {
  title: 'Screens/LoginScreen',
  component: LoginScreen,
};

const Template = (args) => {
  return (
    <LoginScreen {...args} />
  );
};
export const Default = Template.bind({});
