import React from 'react';

import { ArtistCardSmall } from './../components/controls/ArtistCardSmall';

export default {
  title: 'Marketplace/ArtistCardSmall',
  component: ArtistCardSmall,
};

const Template = (args) => (
  // TODO refactor the props
  <ArtistCardSmall
    profileImage="https://anima-uploads.s3.amazonaws.com/projects/6183b50129320a0a5485eeaf/releases/618d32dfcfa10b3100eb68c5/img/rectangle-111@2x.png"
    name="Angela Rosa"
    location="AUSTIN, TX"
    status="Available"
    rate="$34/per Sq.Ft"
    {...args}
  />
);
export const Default = Template.bind({});
