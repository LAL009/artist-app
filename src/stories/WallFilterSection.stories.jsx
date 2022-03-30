import React from 'react';

import { WallFilterSection } from './../components/controls/WallFilterSection';

export default {
  title: 'Marketplace/WallFilterSection',
  component: WallFilterSection,
};

const Template = (args) => {
  return <WallFilterSection {...args} />;
};

export const Default = Template.bind({});
