import React from 'react';
import SignUpForm from '../components/controls/SignUpForm';

export default {
  title: 'Example/SignUpForm',
  component: SignUpForm,
};

const Template = (args) => <SignUpForm {...args} />;

export const Default = Template.bind({});
