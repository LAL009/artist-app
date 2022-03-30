import React from 'react';
import { Box, Input, Typography, InputAdornment } from '@mui/material';
import { fieldToTextField } from 'formik-mui';

import InputLabel from './InputLabel';

function formatPhoneNumber(value) {
  if (!value) return value;

  const phoneNumber = value.replace(/[^\d]/g, '');
  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength <= 3) {
    return phoneNumber;
  }

  if (phoneNumberLength <= 6) {
    return `(${phoneNumber.slice(0, 3)})${phoneNumber.slice(3, 6)}`;
  }

  return `(${phoneNumber.slice(0, 3)})${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
}

const ControlledInputPhoneNumber = (props) => {
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
      const formattedPhoneNumber = formatPhoneNumber(event.target.value);
      setFieldValue(name, formattedPhoneNumber);
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
          fontSize: '16px',
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

export default ControlledInputPhoneNumber;
