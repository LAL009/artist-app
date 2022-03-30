import React from 'react';
import { Box } from '@mui/material';
import SubmitProposalForm from './SubmitProposalForm';

const SubmitProposalDesktop = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '44px 16px',
        borderRadius: '24px',
      }}
    >
      <SubmitProposalForm />
    </Box>
  );
};

export default SubmitProposalDesktop;
