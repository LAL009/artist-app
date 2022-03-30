import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import LocationsTextField from './LocationsTextField';
import SearchTypeSwitch from './SearchTypeSwitch';
import { ArtistFilterSection } from './ArtistFilterSection';
import { WallFilterSection } from './WallFilterSection';

const useStyles = makeStyles((theme) => ({}));

export const FilterToolbarSection = (props) => {
  const { searchType, onChange, onChangeLocation } = props;
  const classes = useStyles();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: '1.75rem',
        paddingRight: '3rem',
      }}
    >
      {/* left */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Box
          sx={{
            marginRight: '1rem',
          }}
        >
          <SearchTypeSwitch
            onChange={onChange}
            checked={searchType === 'walls' ? true : false}
            searchType={searchType}
          />
        </Box>

        <Box
          sx={{
            width: '100%',
            maxWidth: '220px',
            paddingRight: '12px',
          }}
        >
          <LocationsTextField
            onChange={onChangeLocation}
            value={props.cityOnSearch}
          />
        </Box>
      </Box>

      {/* right */}
      {searchType === 'artists' && <ArtistFilterSection />}
      {searchType === 'walls' && <WallFilterSection />}
    </Box>
  );
};

FilterToolbarSection.propTypes = {
  onChange: PropTypes.func,
  searchType: PropTypes.string.isRequired,
  onChangeLocation: PropTypes.func,
};

FilterToolbarSection.defaultProps = {
  onChange: () => undefined,
  onChangeLocation: () => undefined,
};
