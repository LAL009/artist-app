import React from "react";

import { FindWallButton } from "./../components/controls/FindWallButton";

export default {
  title: "Example/FindWallButton",
  component: FindWallButton,
};

const Template = (args) => <FindWallButton {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: "Sign Up" };
