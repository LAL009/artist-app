import React, { useState } from 'react';
import { Box } from '@mui/material';
import SliderUseRCSlider from './SliderUseRCSlider.jsx';
import InputLabel from './InputLabel.jsx';

const InputSliderPriceSquare = (props) => {
  const { styleWrap, sliderValue, setSliderValue } = props;
  return (
    <Box sx={styleWrap}>
      <InputLabel
        text={`Price per Square Foot: $${sliderValue}`}
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
            marks={{
              0: '0',
              10: '10',
              20: '20',
              30: '30',
              40: '40',
              50: '50',
              60: '60',
            }}
            min={0}
            max={60}
            defaultValue={sliderValue}
            onChange={(val) => setSliderValue(val)}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default InputSliderPriceSquare;
