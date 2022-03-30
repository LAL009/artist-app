import React from 'react';
import { Box, Input, Typography, InputAdornment } from '@mui/material';
import { fieldToTextField } from 'formik-mui';

import InputLabel from './InputLabel';

const ControlledInputTextField = (props) => {
  const {
    styleWrap,
    textLabel,
    placeholder,
    typeInput,
    prefix,
    multiline,
    inputProps,
    form: { setFieldValue, errors, touched },
    field: { name },
  } = props;

  const onChange = React.useCallback(
    (event) => {
      const { value } = event.target;
      setFieldValue(name, value || '');
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
      <Input
        {...fieldToTextField(props)}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.13)',
          padding: '10px 18px',
          fontSize: {
            xs: '12px',
            md: '16px',
          },
          borderRadius: '8px',
          color: '#FFFFFF',
          fontWeight: '600',
          width: '100%',
          fontFamily: 'var(--font-family-montserrat)',
        }}
        placeholder={placeholder}
        disableUnderline={true}
        type={typeInput}
        onChange={onChange}
        startAdornment={
          prefix && <InputAdornment position="start">{prefix}</InputAdornment>
        }
        multiline={multiline}
        inputProps={inputProps}
      />
      {errors[name] && touched[name] && (
        <Typography sx={{ color: 'red', fontSize: '13px' }}>
          {errors[name]}
        </Typography>
      )}
    </Box>
  );
};

export default ControlledInputTextField;
