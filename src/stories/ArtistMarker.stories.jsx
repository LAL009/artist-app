import React from 'react';

import { ArtistMarker } from './../components/controls/ArtistMarker';

export default {
  title: 'Example/ArtistMarker',
  component: ArtistMarker,
};

const Template = (args) => {
  return (
    <ArtistMarker
      markerImageSrc="https://anima-uploads.s3.amazonaws.com/projects/618bcc9df306c7f4da896fec/releases/618bcca79d5651b9fede1ffc/img/rectangle-112@2x.png"
      {...args}
    />
  );
};

export const Default = Template.bind({});
