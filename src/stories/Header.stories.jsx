import React from "react";

import Header from "./../components/layout/Header";

export default {
  title: "Example/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;
export const Default = Template.bind({});
