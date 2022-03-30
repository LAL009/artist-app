import React from 'react';

import { WallSummaryPopup } from './../components/controls/WallSummaryPopup';

export default {
  title: 'Marketplace/WallSummaryPopup',
  component: WallSummaryPopup,
};

const Template = (args) => <WallSummaryPopup {...args} />;
export const Default = Template.bind({});
Default.args = {
  street: 'H Street',
  state: 'Washington, DC',
  size: '140L X 7H',
  type: 'Outdoor',
  wallImage:
    'https://wxllspace-app.s3.amazonaws.com/assets/walls/default/featureImage/owner-d7d28ed9-52fe-403b-b04a-3699018512d2-gavin-allanwood-3HIuVz0h5Gs-unsplash.jpeg',
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  street: 'H Street',
  state: 'Washington, DC',
  size: '140L X 7H',
  type: 'Outdoor',
};
