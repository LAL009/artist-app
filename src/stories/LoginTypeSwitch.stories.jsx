import React from 'react';

import LoginTypeSwitch from './../components/controls/LoginTypeSwitch';

export default {
  title: 'Example/LoginTypeSwitch',
  component: LoginTypeSwitch,
  argTypes: { onChange: { action: 'changed' } },
};

const Template = (args) => <LoginTypeSwitch {...args} />;
export const Default = Template.bind({});
Default.args = {
  checked: false,
};
