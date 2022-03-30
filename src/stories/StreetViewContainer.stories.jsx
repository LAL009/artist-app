import React from 'react';
import StreetViewContainer from '../components/controls/StreetViewContainer';

export default {
  title: 'Example/StreetViewContainer',
  component: StreetViewContainer,
};

const Template = (args) => (
  <StreetViewContainer
    lat={40.951221}
    long={-73.743975}
    styleWrap={{
      width: '100%',
      height: '800px',
    }}
    {...args}
  />
);

export const Default = Template.bind({});
