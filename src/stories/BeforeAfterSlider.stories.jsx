import React from "react";

import { BeforeAfterSlider } from "./../components/controls/BeforeAfterSlider";

export default {
  title: "Example/BeforeAfterSlider",
  component: BeforeAfterSlider,
};

const Template = (args) => (
  <BeforeAfterSlider
    {...args}
  />
);
export const Default = Template.bind({});