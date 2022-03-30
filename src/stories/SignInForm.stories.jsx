import React from "react";

import { SignInForm } from "./../components/controls/SignInForm";

export default {
  title: "Example/SignInForm",
  component: SignInForm,
};

const Template = (args) => <SignInForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
