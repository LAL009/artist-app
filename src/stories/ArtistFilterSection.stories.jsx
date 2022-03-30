import React from 'react';

import { ArtistFilterSection } from './../components/controls/ArtistFilterSection';

export default {
  title: 'Marketplace/ArtistFilterSection',
  component: ArtistFilterSection,
};

const Template = (args) => {
  return <ArtistFilterSection {...args} />;
};

export const Default = Template.bind({});
