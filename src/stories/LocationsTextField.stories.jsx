import React from 'react';

import LocationsTextField from './../components/controls/LocationsTextField';

export default {
  title: 'Marketplace/LocationsTextField',
  component: LocationsTextField,
  parameters: {
    backgrounds: {
      default: 'white',
      values: [{ name: 'white', value: '#ffffff' }],
    },
  },
  argTypes: { onChange: { action: 'changed' } },
};

const Template = (args) => <LocationsTextField {...args} />;

export const Default = Template.bind({});
