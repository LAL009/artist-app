import React from 'react';
import { Box, Tab, Tabs, styled, TabScrollButton } from '@mui/material';
import {
  ArtistUpdateSelfForm,
  ArtistUpdateExperienceForm,
  ArtistUpdateLandingPageForm,
} from './ArtistUpdateInfoForm';

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'none',
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    borderRadius: '8px',
    color: 'rgba(255, 255, 255, 0.7)',
    fontFamily: 'var(--font-family-montserrat)',
    fontSize: '14px',
    '&.Mui-selected': {
      color: '#fff',
      background:
        'linear-gradient(79.45deg, #64E1DC 6.96%, #5700FF 108.67%)!important',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  })
);

const UpdateInfoArtistContainer = () => {
  const [tabPosition, setTabPosition] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabPosition(newValue);
  };

  return (
    <Box
      sx={{
        padding: {
          xs: '20px',
          sm: '40px',
        },
        width: '100%',
        background:
          'linear-gradient(#121c36, #121c36) padding-box, linear-gradient(144deg, rgba(0,200,200,1) 0%, rgba(18,28,54,1) 34%, rgba(18,28,54,1) 70%, rgba(85,126,252,1) 100%) border-box',
        borderRadius: '32px',
        border: '1px solid transparent',
      }}
    >
      <StyledTabs
        value={tabPosition}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        ScrollButtonComponent={TabScrollButton}
        allowScrollButtonsMobile={true}
      >
        <StyledTab label="Basic Info" />
        <StyledTab label="Experience" />
        <StyledTab label="Landing Page" />
      </StyledTabs>

      <Box
        sx={{
          mt: '15px',
        }}
      >
        {tabPosition === 0 && <ArtistUpdateSelfForm />}
        {tabPosition === 1 && <ArtistUpdateExperienceForm />}
        {tabPosition === 2 && <ArtistUpdateLandingPageForm />}
      </Box>
    </Box>
  );
};

export default UpdateInfoArtistContainer;
