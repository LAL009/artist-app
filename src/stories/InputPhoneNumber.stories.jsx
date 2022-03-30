import React from 'react';
import InputPhoneNumber from '../components/controls/InputPhoneNumber';

export default {
  title: 'Example/InputPhoneNumber',
  component: InputPhoneNumber,
};

const Template = (args) => <InputPhoneNumber {...args} />;

export const Default = Template.bind({});
Default.args = {
  textLabel: 'phone number',
  placeholder: '(808)808-0808',
};
