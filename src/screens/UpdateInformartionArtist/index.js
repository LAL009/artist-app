import React from 'react';
import { Box } from '@mui/material';
import UpdateInfoArtistContainer from '../../components/controls/UpdateInfoArtistContainer';

const UpdateInformationArtist = () => {
  return (
    <Box
      sx={{
        maxWidth: '900px',
        width: '100%',
        margin: '0 auto',
        padding: '160px 20px 140px 20px',
      }}
    >
      <UpdateInfoArtistContainer />
    </Box>
  );
};

export default UpdateInformationArtist;
