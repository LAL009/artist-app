import React from "react";

import { BlogPostCarousel } from "../components/controls/BlogPostCarousel";

export default {
  title: "Home page: BlogPostCarousel section",
  component: BlogPostCarousel,
};

const Template = (args) => <BlogPostCarousel {...args} />;
export const Default = Template.bind({});
