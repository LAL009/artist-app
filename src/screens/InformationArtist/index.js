import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Box } from '@mui/material';
import SignUpArtistForm from 'src/components/controls/SignUpArtistForm';

const InformationArtist = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  return (
    <Box
      sx={{
        maxWidth: '900px',
        width: '100%',
        margin: '0 auto',
        padding: '160px 20px 140px 20px',
      }}
    >
      <Box
        sx={{
          padding: '40px',
          width: '100%',
          background:
            'linear-gradient(#121c36, #121c36) padding-box, linear-gradient(144deg, rgba(0,200,200,1) 0%, rgba(18,28,54,1) 34%, rgba(18,28,54,1) 70%, rgba(85,126,252,1) 100%) border-box',
          borderRadius: '32px',
          border: '1px solid transparent',
        }}
      >
        <SignUpArtistForm />
      </Box>
    </Box>
  );
};

export default InformationArtist;
