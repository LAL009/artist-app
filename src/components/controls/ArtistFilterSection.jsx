import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectArtistFilters } from 'src/reducers/marketplaceReducer';
import {
  Avatar,
  Box,
  Checkbox,
  FormControlLabel,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ArtistAvailabilitySelector } from './ArtistAvailabilitySelector';
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
  },
});

export const ArtistFilterSection = () => {
  const artistFilter = useSelector(selectArtistFilters);
  const useFormLabelClasses = useFormLabelStyles();

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
        flexDirection: 'row',
        alignItems: 'center',
        height: '92px',
        columnGap: '1rem',
      }}
    >
      {/* title */}
      <Box
        sx={{
          maxWidth: '97px',
          width: '100%',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'var(--font-family-montserrat)',
            fontWeight: 600,
            fontSize: 'var(--font-size-m)',
            color: '#06102B',
          }}
        >
          Artist Filters:
        </Typography>
      </Box>

      {/* availibility */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '130px',
          width: '100%',
        }}
      >
        <ArtistAvailabilitySelector
          onChange={handleAvailabilityChange}
          isReady={artistFilter.isReady}
        />
      </Box>

      {/* verified */}
      <Box
        sx={{
          maxWidth: '240px !important',
          width: '100% !important',
        }}
      >
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
                value="verified"
                inputProps={{
                  'aria-label': 'WXLLSPACE Verified',
                }}
                sx={{
                  boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.5) !important',
                  color: '#06102b',
                  '&.Mui-checked': {
                    color: '#06102b',
                  },
                  width: '20px !important',
                  height: '20px !important',
                  marginRight: '6px !important',
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
          sx={{
            lineHeight: '1.3',
            width: {
              xs: '100% !important',
              md: '220px !important',
            },
            color: '#06102B !important',
          }}
          label="WXLLSPACE Verified"
        />
      </Box>

      {/* rising talent */}
      <Box
        sx={{
          maxWidth: '350px !important',
          width: '100% !important',
        }}
      >
        <FormControlLabel
          disableTypography
          control={
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  width: '26px',
                }}
              >
                <Checkbox
                  onChange={handleRisingTalentChange}
                  value="rising-talent"
                  inputProps={{
                    'aria-label': 'Rising Talent Checkbox',
                  }}
                  sx={{
                    boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.5) !important',
                    color: '#06102b',
                    '&.Mui-checked': {
                      color: '#06102b',
                    },
                    width: '20px !important',
                    height: '20px !important',
                    marginRight: '6px !important',
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
            lineHeight: '1.3',
            width: {
              xs: '100%',
              md: '350px !important',
              color: '#06102B !important',
            },
          }}
          label="Rising Talent Checkbox"
        />
      </Box>
    </Box>
  );
};
