import React from "react";

import { FeaturedWallsCarousel } from "../components/controls/FeaturedWallsCarousel";

export default {
  title: "Home page: FeaturedWallsCarousel section",
  component: FeaturedWallsCarousel,
};

const Template = (args) => <FeaturedWallsCarousel {...args} />;
export const Default = Template.bind({});
