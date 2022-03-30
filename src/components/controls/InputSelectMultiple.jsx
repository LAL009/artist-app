import React from 'react';
import { Box } from '@mui/material';
import InputLabel from './InputLabel';
import { MultiSelect } from 'react-multi-select-component';
import './InputSelectMultiple.css';

const InputSelectMultiple = (props) => {
  const { styleWrap, textLabel, list, getSelectedValue } = props; // getSelectValue is function to get value from child
  const [selected, setSelected] = React.useState([]);

  return (
    <Box sx={styleWrap}>
      {textLabel && (
        <InputLabel
          text={textLabel}
          styleWrap={{
            marginBottom: '7.5px',
          }}
        />
      )}

      <MultiSelect
        options={list}
        value={selected}
        onChange={(data) => {
          getSelectedValue && getSelectedValue(data);
          return setSelected(data);
        }}
        labelledBy="Select"
        className={'custom-multiple-select'}
      />
    </Box>
  );
};

export default InputSelectMultiple;
