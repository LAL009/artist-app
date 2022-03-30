import { FormControlLabel, RadioGroup } from '@mui/material';
import React from 'react';
import InputRadio from '../components/controls/InputRadio';

export default {
  title: 'Example/InputRadio',
  component: InputRadio,
};

const Template = (args) => (
  <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
    <FormControlLabel value="yes" control={<InputRadio />} label="Yes" />
    <FormControlLabel value="no" control={<InputRadio />} label="No" />
  </RadioGroup>
);

export const Default = Template.bind({});
