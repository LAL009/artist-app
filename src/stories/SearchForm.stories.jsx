import React from "react";

import { SearchForm } from "./../components/controls/SearchForm";

export default {
  title: "Example/SearchForm",
  component: SearchForm,
};

const Template = (args) => <SearchForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
