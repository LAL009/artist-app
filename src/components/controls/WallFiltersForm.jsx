import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Box, Typography } from '@mui/material';
import LocationsTextField from './LocationsTextField';
import WallFiltersSelect from './WallFiltersSelect';
import {
  WALL_CONSTRUCTION_TYPES,
  WALL_CONDITIONS,
} from 'src/constants/listingConstants';
import {
  updateWallConditionFilter,
  updateWallConstructionFilter,
} from 'src/actions/marketplaceActions';

export const WallFiltersForm = (props) => {
  const { onChangeLocation } = props;

  const dispatch = useDispatch();
  const filterHandlers = {
    construction: updateWallConstructionFilter,
    condition: updateWallConditionFilter,
  };

  const handleChange = (e) => {
    dispatch(filterHandlers[e.name](e.value));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '1em',
        flexDirection: 'column',
        borderRadius: '0px 0px 12px 12px',
        padding: '20px',
        backgroundColor: '#FFFFFF',
        boxShadow: '0 0 8px rgba(0, 0, 0, .07)',
        width: '85%',
      }}
    >
      <LocationsTextField onChange={onChangeLocation} />

      <Typography
        component="h4"
        sx={{
          marginTop: '20px',
          marginBottom: '16px',
          fontFamily: 'var(--font-family-montserrat)',
          color: '#06102B',
          fontWeight: '600',
          fontSize: '14px',
        }}
      >
        Wall Filters
      </Typography>

      <WallFiltersSelect
        inputProps={{
          name: 'construction',
        }}
        styleWrap={{
          marginBottom: '12px',
        }}
        placeholder="Material"
        list={WALL_CONSTRUCTION_TYPES}
        onChange={handleChange}
      />

      <WallFiltersSelect
        inputProps={{
          name: 'condition',
        }}
        placeholder="Condition"
        styleWrap={{
          marginBottom: '12px',
        }}
        list={WALL_CONDITIONS}
        onChange={handleChange}
      />

      {/* We hide budget filter on purpose until we have more art projects */}
      {/* <WallFiltersSelect
        inputProps={{
          name: 'budget',
        }}
        placeholder="Budget"
        list={['$50-$1k', '$1k-$5k']}
      /> */}
    </Box>
  );
};

WallFiltersForm.propTypes = {
  onChangeLocation: PropTypes.func,
};

WallFiltersForm.defaultProps = {
  onChangeLocation: () => undefined,
};
