import React from 'react';
import InputSelectLabel from '../components/controls/InputSelectLabel';

export default {
  title: 'Example/InputSelectLabel',
  component: InputSelectLabel,
};

const Template = (args) => (
  <>
    <InputSelectLabel value="label" label="label 1" checked={true} {...args} />

    <InputSelectLabel
      value="label"
      name="label"
      label="label 2"
      id="labelId2"
      {...args}
    />
  </>
);

export const Default = Template.bind({});
