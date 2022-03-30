import React from 'react';
import { Box, Input, CardMedia } from '@mui/material';
import InputLabel from './InputLabel';
import './InputDatePicker.css';

const InputDatePicker = (props) => {
  const { styleWrap, textLabel, setValue, value } = props;

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

      <Box
        sx={{
          position: 'relative',
        }}
      >
        <Input
          className="custom--input-date-picker"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="date"
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.13)',
            padding: '18px 18px',
            fontSize: '12px',
            borderRadius: '8px',
            color: '#FFFFFF',
            fontWeight: '600',
            height: '52px',
            width: '100%',
            fontFamily: 'var(--font-family-montserrat)',
          }}
          disableUnderline={true}
        />
        <CardMedia
          sx={{
            height: '18px',
            width: '18px',
            position: 'absolute',
            top: '50%',
            right: {
              xs: '7px',
              sm: '21.33px',
            },
            transform: 'translateY(-50%)',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
          onClick={() => setValue('')}
          component="img"
          image="https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/618a2564427ddf94bbb47d12/img/frame@2x.svg"
        />
      </Box>
    </Box>
  );
};

export default InputDatePicker;
