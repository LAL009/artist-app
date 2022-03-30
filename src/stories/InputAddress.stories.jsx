import React from 'react';
import InputAddress from '../components/controls/InputAddress';

export default {
  title: 'Example/InputAddress',
  component: InputAddress,
};

const Template = (args) => (
  <InputAddress textLabel="Address" placeholder="address" {...args} />
);

export const Default = Template.bind({});
