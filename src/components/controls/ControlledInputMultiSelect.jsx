import React from 'react';
import { Box, Typography } from '@mui/material';
import { MultiSelect } from 'react-multi-select-component';

import InputLabel from './InputLabel';
import './InputSelectMultiple.css';

const ControlledInputMultiSelect = (props) => {
  const {
    styleWrap,
    textLabel,
    form: { setFieldValue, errors, values, touched },
    field: { name },
    list,
  } = props;

  const onChange = React.useCallback(
    (val) => {
      setFieldValue(name, val);
    },
    [setFieldValue, name]
  );

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
        value={values[name]}
        onChange={onChange}
        labelledBy="Select"
        className={'custom-multiple-select'}
      />
      {errors[name] && touched[name] && (
        <Typography sx={{ color: 'red', fontSize: '13px' }}>
          {errors[name]}
        </Typography>
      )}
    </Box>
  );
};

export default ControlledInputMultiSelect;
