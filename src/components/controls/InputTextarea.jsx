import React from 'react';
import { Box } from '@mui/material';
import InputLabel from './InputLabel';
import { makeStyles } from '@mui/styles';

const usesStyles = makeStyles({
  customTextarea: {
    backgroundColor: 'rgba(255, 255, 255, 0.13)',
    padding: '18px 18px',
    fontSize: '16px',
    borderRadius: '8px',
    color: '#FFFFFF',
    fontWeight: '600',
    width: '100%',
    fontFamily: 'var(--font-family-montserrat)',
    border: 'none',
    '&:focus': {
      border: 'none',
      outline: 'none',
    },
    '&::placeholder': {
      fontWeight: '600',
      fontSize: '16px',
    },
  },
});

const InputTextarea = (props) => {
  const {
    styleWrap,
    textLabel,
    placeholder,
    value,
    onChange,
    onBlur,
    rows = 6,
    name,
  } = props;
  const classes = usesStyles();

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

      <textarea
        name={name}
        className={classes.customTextarea}
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </Box>
  );
};

export default InputTextarea;
