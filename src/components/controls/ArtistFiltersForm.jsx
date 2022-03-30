import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@mui/styles';

import LocationsTextField from './LocationsTextField';
import { ArtistAvailabilitySelector } from './ArtistAvailabilitySelector';
import { selectArtistFilters } from 'src/reducers/marketplaceReducer';
import {
  updateArtistAvailabilityFilter,
  updateArtistVerificationStatusFilter,
  updateArtistRisingTalentFilter,
} from 'src/actions/marketplaceActions';

const useFormLabelStyles = makeStyles({
  label: {
    fontFamily: 'var(--font-family-montserrat)',
    color: '#06102b',
    fontWeight: 600,
    fontSize: 'var(--font-size-m)',
    marginLeft: 0,
  },
});

export const ArtistFiltersForm = (props) => {
  const { onChangeLocation } = props;
  const useFormLabelClasses = useFormLabelStyles();
  const artistFilter = useSelector(selectArtistFilters);

  const dispatch = useDispatch();
  const handleAvailabilityChange = (value) =>
    dispatch(updateArtistAvailabilityFilter(value));

  const handleVerificationStatusChange = (event) =>
    dispatch(updateArtistVerificationStatusFilter(event.target.checked));

  const handleRisingTalentChange = (event) =>
    dispatch(updateArtistRisingTalentFilter(event.target.checked));

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '1em',
        flexDirection: 'column',
        padding: '1.25rem',
        backgroundColor: 'white',
        borderRadius: '0px 0px 12px 12px',
        width: '85%',
      }}
    >
      <LocationsTextField onChange={onChangeLocation} />
      <Typography
        sx={{
          fontFamily: 'var(--font-family-montserrat)',
          fontWeight: 600,
          fontSize: 'var(--font-size-m)',
          color: '#06102b',
        }}
      >
        Artist Filters:
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <ArtistAvailabilitySelector
          onChange={handleAvailabilityChange}
          isReady={artistFilter.isReady}
        />
      </Box>
      <Box>
        <FormControlLabel
          disableTypography
          className={useFormLabelClasses.label}
          control={
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Checkbox
                onChange={handleVerificationStatusChange}
                inputProps={{
                  'aria-label': 'WXLLSPACE Verified',
                }}
                sx={{
                  boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.5)',
                  width: '20px',
                  height: '20px',
                  padding: 0,
                  marginRight: '9px !important',
                  color: '#06102b',
                  '&.Mui-checked': {
                    color: '#06102b',
                  },
                }}
              />

              <Box
                sx={{
                  marginRight: '0.5rem',
                }}
              >
                <Avatar
                  variant="square"
                  sx={{ width: '20px', height: '20px' }}
                  src={`${process.env.REACT_APP_S3_BASE_URL}/assets/walls/verified-icon.png`}
                />
              </Box>
            </Box>
          }
          label="WXLLSPACE Verified"
        />
      </Box>
      <Box>
        <FormControlLabel
          className={useFormLabelClasses.label}
          disableTypography
          control={
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box>
                <Checkbox
                  onChange={handleRisingTalentChange}
                  value="rising-talent"
                  inputProps={{
                    'aria-label': 'Rising Talent Checkbox',
                  }}
                  sx={{
                    boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.5)',
                    width: '20px',
                    height: '20px',
                    padding: 0,
                    marginRight: '9px !important',
                    color: '#06102b',
                    '&.Mui-checked': {
                      color: '#06102b',
                    },
                  }}
                />
              </Box>

              <Box
                sx={{
                  marginRight: '0.5rem',
                }}
              >
                <Avatar
                  variant="square"
                  sx={{ width: '19px', height: '19px' }}
                  src={`${process.env.REACT_APP_S3_BASE_URL}/assets/walls/rising-talent-icon.png`}
                />
              </Box>
            </Box>
          }
          sx={{
            fontFamily: 'var(--font-family-montserrat)',
            color: '#06102b',
            fontWeight: 600,
            fontSize: 'var(--font-size-m)',
          }}
          label="Rising Talent Checkbox"
        />
      </Box>
    </Box>
  );
};
