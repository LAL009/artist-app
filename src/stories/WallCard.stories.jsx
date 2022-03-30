import React from 'react';

import { WallCard } from './../components/controls/WallCard';

export default {
  title: 'Example/WallCard',
  component: WallCard,
};

const Template = (args) => <WallCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  wallImageSrc:
    'https://anima-uploads.s3.amazonaws.com/projects/61686e84d5059459cbead39b/releases/617bee2a0e83495e51b63e4a/img/rectangle-111@2x.png',
  status: 'Just Listed',
  budget: '$12,500 - Proposed Budget',
  location: 'Maple Avenue',
  state: 'New Rochelle, NY',
  area: '300 sqft',
  dimension: '140L x 7H',
  loading: true,
};
