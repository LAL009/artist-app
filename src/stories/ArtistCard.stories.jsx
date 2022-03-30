import React from "react";

import { ArtistCard } from "src/components/controls/ArtistCard";

export default {
  title: "Example/ArtistCard",
  component: ArtistCard,
};

const Template = (args) => (
  // TODO refactor the props
  <ArtistCard
    artistCard="https://anima-uploads.s3.amazonaws.com/projects/61686e84d5059459cbead39b/releases/6169c138d5059459cbeadd5e/img/rectangle-76@2x.png"
    available="Available"
    name="Andrea Key"
    city="austin"
    state="TX"
    {...args}
  />
);
export const Default = Template.bind({});
