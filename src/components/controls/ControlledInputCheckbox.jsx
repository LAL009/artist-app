import React from 'react';
import { Checkbox, Box, Typography } from '@mui/material';
import { fieldToCheckbox } from 'formik-mui';

import InputLabel from './InputLabel';

const ControlledInputCheckbox = (props) => {
  const {
    styleWrap,
    textLabel,
    description,
    icon,
    checkedIcon,
    form: { setFieldValue, errors, touched },
    field: { name },
  } = props;

  const onChange = React.useCallback(
    (event) => {
      const { checked } = event.target;
      setFieldValue(name, checked);
    },
    [setFieldValue, name]
  );

  return (
    <Box sx={styleWrap}>
      {textLabel && (
        <InputLabel
          text={textLabel}
          styleWrap={{
            marginBottom: '12px',
          }}
        />
      )}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox
          {...fieldToCheckbox(props)}
          icon={icon}
          checkedIcon={checkedIcon}
          onChange={onChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        {description}
      </Box>

      {errors[name] && touched[name] && (
        <Typography sx={{ color: 'red', fontSize: '13px' }}>
          {errors[name]}
        </Typography>
      )}
    </Box>
  );
};

export default ControlledInputCheckbox;
