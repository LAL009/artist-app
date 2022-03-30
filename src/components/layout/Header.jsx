import React from 'react';
import { Box } from '@mui/material';
import { TopNavigationBar } from './../layout/TopNavigationBar';

const Header = (props) => {
  if (props.hideTopNavigationBar) {
    return null;
  }

  return (
    <Box {...props}>
      <TopNavigationBar {...props} />
    </Box>
  );
};

export default Header;
