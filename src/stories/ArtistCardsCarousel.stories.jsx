import React from 'react';

import { ArtistCardsCarousel } from '../components/controls/ArtistCardsCarousel';

export default {
  title: 'Marketplace: ArtistCardsCarousel section',
  component: ArtistCardsCarousel,
};

const Template = (args) => <ArtistCardsCarousel {...args} />;
export const Default = Template.bind({});
