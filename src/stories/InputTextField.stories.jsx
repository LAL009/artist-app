import React from 'react';
import InputTextField from '../components/controls/InputTextField';

export default {
  title: 'Example/InputTextField',
  component: InputTextField,
};

const Template = (args) => <InputTextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  textLabel: 'Text Field',
  placeholder: 'Placeholder',
};
