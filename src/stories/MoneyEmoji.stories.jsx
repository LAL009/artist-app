import React from "react";

import { MoneyEmoji } from "./../components/controls/MoneyEmoji";

export default {
  title: "Example/MoneyEmoji",
  component: MoneyEmoji,
};

const Template = (args) => <MoneyEmoji {...args} />;

export const Default = Template.bind({});
