import React from 'react';
import PropTypes from 'prop-types';
import { Box, Input } from '@mui/material';
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

const InputPhoneNumber = (props) => {
  const {
    styleWrap,
    textLabel,
    placeholder,
    typeInput = 'text',
    error,
  } = props;
  const [value, setValue] = React.useState('');

  const handleInput = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setValue(formattedPhoneNumber);
    props.onChange(e.target.value);
  };

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
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.13)',
          padding: '18px 18px',
          fontSize: '16px',
          borderRadius: '8px',
          color: '#FFFFFF',
          fontWeight: '600',
          height: '52px',
          width: '100%',
          fontFamily: 'var(--font-family-montserrat)',
        }}
        placeholder={placeholder}
        disableUnderline={true}
        type={typeInput}
        onChange={(e) => handleInput(e)}
        value={value}
        error={error}
      />
    </Box>
  );
};

export default InputPhoneNumber;

InputPhoneNumber.propTypes = {
  onChange: PropTypes.func,
};

InputPhoneNumber.defaultProps = {
  onChange: () => undefined,
};
