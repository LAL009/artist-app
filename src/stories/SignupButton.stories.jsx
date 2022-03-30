import React from "react";

import { SignupButton } from "./../components/controls/SignupButton";

export default {
  title: "Example/SignupButton",
  component: SignupButton,
};

const Template = (args) => <SignupButton {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: "Sign Up" };
