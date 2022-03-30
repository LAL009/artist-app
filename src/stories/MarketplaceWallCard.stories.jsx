import React from 'react';

import { MarketplaceWallCard } from '../components/controls/MarketplaceWallCard';

export default {
  title: 'Marketplace/MarketplaceWallCard',
  component: MarketplaceWallCard,
};

const Template = (args) => {
  return (
    <MarketplaceWallCard
      wallImageSrc="https://anima-uploads.s3.amazonaws.com/projects/618bcc9df306c7f4da896fec/releases/618eae423ea6c88cecd96393/img/rectangle-112@2x.png"
      status="Just Listed"
      budget="12,500"
      location="Maple Avenue"
      state="New Rochelle, NY"
      area={300}
      dimension="140L x 7H"
      {...args}
    />
  );
};

export const Default = Template.bind({});
