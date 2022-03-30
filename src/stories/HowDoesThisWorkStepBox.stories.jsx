import React from "react";

import { HowDoesThisWorkStepBox } from "../components/controls/HowDoesThisWorkSection";

export default {
  title: "Example/HowDoesThisWorkStepBox",
  component: HowDoesThisWorkStepBox,
};

const Template = (args) => <HowDoesThisWorkStepBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  number: 1,
  title: "Send your idea",
  description:
    "Your idea is what you’ll do in the space. Once you select a space, we handle presenting your idea to the property owner for you. You’ll then connect to discuss art direction.",
};
