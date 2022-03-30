import React from "react";

import { BlogPostCard } from "./../components/controls/BlogPostCard";

export default {
  title: "Example/BlogPostCard",
  component: BlogPostCard,
};

const Template = (args) => (
  <BlogPostCard
    featuredImage="https://anima-uploads.s3.amazonaws.com/projects/61686e84d5059459cbead39b/releases/617f74fd43122ccd822c7f73/img/featured-image@2x.png"
    blog="Blog"
    text1="Lorem ipsum dolor sit amet, consectetur adipiscing."
    {...args}
  />
);
export const Primary = Template.bind({});
