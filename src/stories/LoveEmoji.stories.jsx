import React from "react";

import { LoveEmoji } from "./../components/controls/LoveEmoji";

export default {
  title: "Example/LoveEmoji",
  component: LoveEmoji,
};

const Template = (args) => <LoveEmoji {...args} />;

export const Default = Template.bind({});
