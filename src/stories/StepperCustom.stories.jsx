import React from 'react';
import StepperCustom from 'src/components/controls/StepperCustom';

export default {
  title: 'Example/StepperCustom',
  component: StepperCustom,
};

const steps = [
  'Select master blaster campaign settings',
  'Create an ad group',
  'Create an ad',
];

const Template = (args) => (
  <StepperCustom listText={steps} activeStep={1} {...args} />
);

export const Default = Template.bind({});
