import React from "react";

import { TopNavigationBar } from "./../components/layout/TopNavigationBar";

export default {
  title: "Example/TopNavigationBar",
  component: TopNavigationBar,
};

const Template = (args) => <TopNavigationBar {...args} />;
export const Default = Template.bind({});
