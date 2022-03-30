import React from "react";

import { FeaturedArtistCarousel } from "../components/controls/FeaturedArtistCarousel";

export default {
  title: "Home page: FeaturedArtistCarousel section",
  component: FeaturedArtistCarousel,
};

const Template = (args) => <FeaturedArtistCarousel {...args} />;
export const Default = Template.bind({});
