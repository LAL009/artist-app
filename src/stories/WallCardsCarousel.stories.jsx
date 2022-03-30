import React from 'react';

import { WallCardsCarousel } from '../components/controls/WallCardsCarousel';

export default {
  title: 'Marketplace/WallCardsCarousel section',
  component: WallCardsCarousel,
};

const Template = (args) => <WallCardsCarousel {...args} />;
export const Default = Template.bind({});
