import React from 'react';

import { ArtistSummaryPopUp } from '../components/controls/ArtistSummaryPopUp';

export default {
  title: 'Example/ArtistSummaryPopUp',
  component: ArtistSummaryPopUp,
};

const Template = (args) => {
  return (
    <ArtistSummaryPopUp
      imgURL="https://anima-uploads.s3.amazonaws.com/projects/618bcc9df306c7f4da896fec/releases/618d32ca3edaee2b5511d0ad/img/rectangle-111@2x.png"
      userName="angela rosa"
      city="austin"
      state="tx"
      approved={true}
      {...args}
    />
  );
};

export const Default = Template.bind({});
