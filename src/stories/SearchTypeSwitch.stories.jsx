import React from 'react';

import SearchTypeSwitch from './../components/controls/SearchTypeSwitch';

export default {
  title: 'Example/SearchTypeSwitch',
  component: SearchTypeSwitch,
  argTypes: { onChange: { action: 'changed' } },
};

const Template = (args) => <SearchTypeSwitch {...args} />;
export const Default = Template.bind({});
Default.args = {
  checked: false,
};
