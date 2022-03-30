import React from 'react';
import { Box, Typography } from '@mui/material';

const WallDetailsLabel = (props) => {
  const { styleWrap, text } = props;

  return (
    <Box
      sx={{
        ...styleWrap,
        padding: '12px',
        borderRadius: '100px',
        display: 'inline-block',
      }}
    >
      <Typography
        component="h5"
        sx={{
          color: '#ffffff',
          fontFamily: 'var(--font-family-montserrat)',
          fontSize: '12px',
          fontWeight: '500',
          fontStyle: 'normal',
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default WallDetailsLabel;
