import React from 'react';
import { ArtistAvailabilitySelector } from './../components/controls/ArtistAvailabilitySelector';

export default {
  title: 'Marketplace/ArtistAvailabilitySelector',
  component: ArtistAvailabilitySelector,
  parameters: {
    backgrounds: {
      default: 'white',
      values: [{ name: 'white', value: '#ffffff' }],
    },
  },
  argTypes: { onChange: { action: 'changed' } },
};

const Template = (args) => <ArtistAvailabilitySelector {...args} />;

export const Default = Template.bind({});

Default.args = {};
