import React from 'react';
import { ArtistFilterBar } from '../components/controls/ArtistFilterBar';

export default {
  title: 'Artist Search/ArtistFilterBar',
  component: ArtistFilterBar,
};

const Template = (args) => <ArtistFilterBar {...args} />;

export const Default = Template.bind({});
