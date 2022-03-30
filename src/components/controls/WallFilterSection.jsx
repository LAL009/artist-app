import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useMinimalSelectStyles } from '@mui-treasury/styles/select/minimal';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Box, Typography } from '@mui/material';
import {
  WALL_CONSTRUCTION_TYPES,
  WALL_CONDITIONS,
} from 'src/constants/listingConstants';
import {
  updateWallConditionFilter,
  updateWallConstructionFilter,
} from 'src/actions/marketplaceActions';

const MinimalSelect = ({ name, label, datas, onChange }) => {
  const [val, setVal] = useState('');

  const handleChange = (event) => {
    setVal(event.target.value);
    onChange(event.target);
  };

  const minimalSelectClasses = useMinimalSelectStyles();

  const iconComponent = (props) => {
    return (
      <ExpandMoreIcon
        className={props.className + ' ' + minimalSelectClasses.icon}
      />
    );
  };

  // moves the menu below the select input
  const menuProps = {
    classes: {
      paper: minimalSelectClasses.paper,
    },
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left',
    },
    getContentAnchorEl: null,
  };

  return (
    <FormControl>
      <Select
        style={{
          minWidth: 122,
          height: 42,
          marginLeft: '12px',
          paddingLeft: '11px',
          paddingRight: '11px',
          background: 'var(--white)',
          borderRadius: '8px',
          //border: '1px solid var(--mystic)',
          '&:focus': {
            background: 'var(--white)',
          },
          boxShadow: 'inset 0px 0px 6px rgba(0, 0, 0, 0.5)',
          border: 'none',
        }}
        disableUnderline
        displayEmpty
        MenuProps={menuProps}
        IconComponent={iconComponent}
        onChange={handleChange}
        name={name}
        value={val}
      >
        <MenuItem
          disabled
          value={''}
          style={{
            display: 'none',
          }}
        >
          <Typography
            sx={{
              textTransform: 'capitalize',
              color: 'var(--black-pearl)',
              fontFamily: 'var(--font-family-montserrat)',
              fontSize: 'var(--font-size-s2)',
              fontWeight: 600,
              fontStyle: 'normal',
            }}
          >
            {label}
          </Typography>
        </MenuItem>
        {datas.map((data, index) => (
          <MenuItem value={data} key={index}>
            <Typography
              sx={{
                textTransform: 'capitalize',
                color: 'var(--fiord)',
                fontFamily: 'var(--font-family-montserrat)',
                fontSize: 'var(--font-size-s2)',
                fontWeight: 600,
                fontStyle: 'normal',
              }}
            >
              {data}
            </Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export const WallFilterSection = () => {
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
        justifyContent: 'flex-end',
        height: '92px',
        columnGap: '1rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'var(--font-family-montserrat)',
            fontWeight: 600,
            color: '#06102B !important',
            fontSize: 'var(--font-size-m)',
          }}
        >
          Wall Filter:
        </Typography>
        <MinimalSelect
          name="construction"
          onChange={handleChange}
          label="material"
          datas={WALL_CONSTRUCTION_TYPES}
        />
        <MinimalSelect
          name="condition"
          onChange={handleChange}
          label="condition"
          datas={WALL_CONDITIONS}
        />
        {/* We hhide budget filter on purpose until we have more art projects */}
        {/* <MinimalSelect
          name="budget"
          onChange={handleChange}
          label="Budget"
          datas={['$50-$1k', '$1k-$5k']}
        /> */}
      </Box>
    </Box>
  );
};
