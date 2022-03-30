import React from 'react';
import { Button } from '@mui/material';

const InputSelectLabel = (props) => {
  const { label, checked, onClick } = props;
  return (
    <Button
      sx={{
        color: checked ? '#FFFFFF' : '#00C8C8',
        fontFamily: 'var(--font-family-montserrat)',
        fontSize: '14px',
        fontWeight: '600',
        fontStyle: 'normal',
        padding: '12px 20px',
        border: '1px solid #00C8C8',
        backgroundColor: checked ? '#00C8C8' : 'transparent',
        textTransform: 'capitalize',
        display: 'block',
        width: '100%',
        '&:hover': {
          backgroundColor: '#00C8C8',
          color: '#FFF',
        },
        position: 'relative',
      }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default InputSelectLabel;
