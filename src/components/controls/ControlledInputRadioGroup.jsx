import React from 'react';
import { Box, Typography } from '@mui/material';

import InputLabel from './InputLabel';
import InputRadio from './InputRadio';

const ControlledInputRadioGroup = (props) => {
  const {
    styleWrap,
    textLabel,
    form: { setFieldValue, errors, values, touched },
    field: { name },
    items,
  } = props;

  const onChange = React.useCallback(
    (event) => {
      const { value } = event.target;
      setFieldValue(name, value);
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
      <Box sx={{ display: 'flex', gap: '5px' }}>
        {items.map((item) => (
          <Box key={item.value} sx={{ display: 'flex', alignItems: 'center' }}>
            <InputRadio
              checked={values[name] === item.value}
              onChange={onChange}
              value={item.value}
              name="radio-buttons"
              inputProps={{ 'aria-label': 'A' }}
            />
            <Typography>{item.label}</Typography>
          </Box>
        ))}
      </Box>
      {errors[name] && touched[name] && (
        <Typography sx={{ color: 'red', fontSize: '13px' }}>
          {errors[name]}
        </Typography>
      )}
    </Box>
  );
};

export default ControlledInputRadioGroup;
