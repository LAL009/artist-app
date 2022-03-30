import React from 'react';
import SignUpArtistForm from '../components/controls/SignUpArtistForm';

export default {
  title: 'Example/SignUpArtistForm',
  component: SignUpArtistForm,
};

const Template = (args) => <SignUpArtistForm {...args} />;

export const Default = Template.bind({});
