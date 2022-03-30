import React from "react";

import { CircleStep } from "./../components/controls/CircleStep";

export default {
  title: "Example/CircleStep",
  component: CircleStep,
};

const Template = (args) => <CircleStep {...args}>01</CircleStep>;

export const Default = Template.bind({});
