import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { styled as muiStyledSystem } from '@mui/system';
import SearchTypeSwitch from './SearchTypeSwitch';
import { ArtistFiltersForm } from './ArtistFiltersForm';
import { WallFiltersForm } from './WallFiltersForm';
import { FiltersToolbarArrow } from '../icons';

const FiltersButton = muiStyledSystem('button')(`
  font-family: var(--font-family-montserrat);
  font-weight: 600px;
  font-size: var(--font-size-m);
  color: #06102b;
  display: flex;
  border: none;
  background-color: transparent;
  padding: 0;
`);

export const FilterToolbarSectionMobile = (props) => {
  const {
    isFilterOpen,
    onChangeListType,
    viewMode,
    onChangeViewMode,
    searchType,
    onChangeLocation,
  } = props;
  const [toggleFilterPopup, setToggleFilterPopup] = useState(!!isFilterOpen);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          padding: '1.25rem',
          width: '100%',
          height: '88px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'var(--font-family-montserrat)',
              fontWeight: 600,
              fontSize: 'var(--font-size-m)',
              color: '#06102B',
              textDecoration: 'underline',
              textTransform: 'capitalize',
            }}
            onClick={() => onChangeViewMode(viewMode)}
          >
            {viewMode}
          </Typography>

          <SearchTypeSwitch
            onChange={(val) => {
              onChangeListType(val);
              setToggleFilterPopup(false);
            }}
            checked={searchType === 'walls' ? true : false}
            searchType={searchType}
          />
          <FiltersButton
            onClick={() => {
              setToggleFilterPopup(!toggleFilterPopup);
            }}
          >
            <Box sx={{ display: 'flex' }}>
              <Typography
                sx={{
                  fontFamily: 'var(--font-family-montserrat)',
                  fontWeight: 600,
                  fontSize: 'var(--font-size-m)',
                  color: '#06102B',
                }}
              >
                Filters
              </Typography>
              <FiltersToolbarArrow
                style={{ transform: toggleFilterPopup && 'rotate(180deg)' }}
              />
            </Box>
          </FiltersButton>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: '88px',
          zIndex: 1000,
          width: '100%',
        }}
      >
        {toggleFilterPopup && searchType === 'artists' && (
          <ArtistFiltersForm onChangeLocation={onChangeLocation} />
        )}
        {toggleFilterPopup && searchType === 'walls' && (
          <WallFiltersForm onChangeLocation={onChangeLocation} />
        )}
      </Box>
    </Box>
  );
};

FilterToolbarSectionMobile.propTypes = {
  viewMode: PropTypes.oneOf(['map', 'list']),
  onChangeViewMode: PropTypes.func,
  onChangeListType: PropTypes.func,
  onChangeLocation: PropTypes.func,
  searchType: PropTypes.string.isRequired,
};

FilterToolbarSectionMobile.defaultProps = {
  onChangeViewMode: () => undefined,
  onChangeListType: () => undefined,
  onChangeLocation: () => undefined,
  viewMode: 'map',
};
