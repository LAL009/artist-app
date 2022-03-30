import React from 'react';
import { Box, Typography } from '@mui/material';

import SliderUseRCSlider from './SliderUseRCSlider.jsx';

import InputLabel from './InputLabel';

const ControlledInputSlider = (props) => {
  const {
    styleWrap,
    textLabel,
    min,
    max,
    marks,
    form: { setFieldValue, errors, values, touched },
    field: { name },
  } = props;

  const onChange = React.useCallback(
    (val) => {
      setFieldValue(name, val || '');
    },
    [setFieldValue, name]
  );

  return (
    <Box sx={styleWrap}>
      <InputLabel
        text={`${textLabel}${values[name]}`}
        styleWrap={{
          position: 'relative',
          marginBottom: '12px',
        }}
      />
      <Box
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.13)',
          padding: '14px 18px 15px 18px',
          borderRadius: '8px',
          height: '63px',
        }}
      >
        <Box
          sx={{
            position: 'relative',
          }}
        >
          <SliderUseRCSlider
            marks={marks}
            min={min}
            max={max}
            defaultValue={values[name]}
            onChange={onChange}
          />
        </Box>
      </Box>
      {errors[name] && touched[name] && (
        <Typography sx={{ color: 'red', fontSize: '13px' }}>
          {errors[name]}
        </Typography>
      )}
    </Box>
  );
};

export default ControlledInputSlider;
