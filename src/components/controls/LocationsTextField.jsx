import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import Autocomplete from '@mui/material/Autocomplete';
import InputBase from '@mui/material/InputBase';
import { selectCitiesFilters } from 'src/reducers/marketplaceReducer';

export default function LocationsTextField(props) {
  const cities = useSelector(selectCitiesFilters);
  const [cityValue, setCityvalue] = useState(props.value);

  const registeredCities = cities.map((data) => ({
    label: data,
  }));

  return (
    <Paper
      elevation={0}
      component="form"
      sx={{
        border: '#e2e8f0 solid 2px',
        borderRadius: '8px !important',
        display: 'block',
        alignItems: 'center',
        width: '100%',
        height: '42px',
        position: 'relative',
        boxShadow: 'inset 0px 0px 6px rgba(0, 0, 0, 0.5) !important',
        border: 'none',
      }}
    >
      <Autocomplete
        disablePortal
        defaultValue={cityValue}
        id="combo-box-demo"
        isOptionEqualToValue={(option, value) => option.label === value.label}
        options={registeredCities}
        onInputChange={(event, newInputValue) => {
          if (cityValue != newInputValue) {
            props.onChange(newInputValue);
          }
        }}
        renderOption={(props, option) => {
          const { label } = option;
          return (
            <span
              {...props}
              style={{ color: '#06102b', backgroundColor: '#fff' }}
            >
              {label}
            </span>
          );
        }}
        renderInput={(params) => {
          return (
            <InputBase
              {...params}
              sx={{
                color: '#06102b',
                fontFamily: 'var(--font-family-montserrat) !important',
                fontWeight: '600 !important',
                lineHeight: '1.4375em',
                background: 'transparent',
                position: 'relative',
                padding: '6px 35px 3px 8px',
                width: '100%',
                fontSize: '14px !important',
              }}
              placeholder="Locations"
              inputProps={params.inputProps}
              ref={params.InputProps.ref}
              value={props.value}
              label="Locations"
            />
          );
        }}
      />
      <IconButton
        type="submit"
        sx={{
          p: '0 !important',
          color: '#CCCCCC !important',
          display: 'inline-block !important',
          position: 'absolute !important',
          top: '8px !important',
          right: '8px !important',
        }}
        aria-label="search"
      >
        <SearchIcon
          sx={{
            display: 'inline-block !important',
          }}
        />
      </IconButton>
    </Paper>
  );
}

LocationsTextField.propTypes = {
  onChange: PropTypes.func,
};

LocationsTextField.defaultProps = {
  onChange: () => undefined,
};
