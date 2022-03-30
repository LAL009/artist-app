import React from 'react';
import PropTypes from 'prop-types';
import { Box, Input } from '@mui/material';
import InputLabel from './InputLabel';

const InputTextField = (props) => {
  const {
    styleWrap,
    textLabel,
    placeholder,
    typeInput = 'text',
    value,
    onChange,
  } = props;

  const [inputValue, setValue] = React.useState(value);

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange(e.target.value);
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
        value={inputValue}
        onChange={handleChange}
      />
    </Box>
  );
};

export default InputTextField;

InputTextField.propTypes = {
  onChange: PropTypes.func,
};

InputTextField.defaultProps = {
  onChange: () => undefined,
};
