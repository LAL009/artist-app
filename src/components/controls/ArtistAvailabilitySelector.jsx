import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled, { css } from 'styled-components';

export const ValignTextMiddle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MontserratBoldWhite12px = css`
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-s2);
  font-weight: 700;
  font-style: normal;
`;

const Ellipse111 = styled.div`
  height: 12px;
  display: flex;
  min-width: 12px;
`;

const Ellipse112 = styled.img`
  width: 12px;
  height: 13px;
  margin-top: -0.5px;
  border-radius: 100%;
`;

const StatusText = (props) => {
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: 'var(--font-family-montserrat)',
    fontSize: 'var(--font-size-s2)',
    fontWeight: 700,
    fontStyle: 'normal',
    color: props.available ? 'rgba(73, 210, 78, 1)' : 'rgba(245, 101, 101, 1)',
    textTransform: 'capitalize',
    width: '59px',
    height: '17px',
    marginLeft: '10px',
    letterSpacing: 0,
    lineHeight: '90px',
    whiteSpace: 'nowrap',
    ...props.sx,
  };
  return <Box sx={styles}>{props.children}</Box>;
};

const Status = (props) => {
  const iconSrc = props.available
    ? `${process.env.REACT_APP_S3_BASE_URL}/assets/available-icon.svg`
    : `${process.env.REACT_APP_S3_BASE_URL}/assets/busy-icon.svg`;

  return (
    <Box
      sx={{
        height: '41px',
        display: 'flex',
        padding: '0 12px',
        justifyContent: 'center',
        alignItems: 'center',
        width: '94.64px',
        backgroundColor: props.available
          ? 'rgba(73, 210, 78, 0.15)'
          : 'rgba(245, 101, 101, 0.15)',
        borderRadius: '100px',
        backdropFilter: 'blur(60px) brightness(100%)',
        webkitBackdropFilter: 'blur(60px) brightness(100%)',
        boxShadow: 'inset 0px 0px 6px rgba(0, 0, 0, 0.5)',
        border: 'none',
      }}
    >
      <Ellipse111>
        <Ellipse112 src={iconSrc} />
      </Ellipse111>

      <StatusText available={props.available}>{props.children}</StatusText>
    </Box>
  );
};

const MinimalSelect = (props) => {
  const { onChange } = props;
  const [val, setVal] = useState('available');

  const handleChange = (event) => {
    setVal(event.target.value);
    onChange(event.target.value === 'available');
  };

  const useMinimalSelectStyles = makeStyles((theme) => ({
    select: {
      background: 'transparent',
      borderStyle: 'none',
      paddingTop: 14,
      paddingBottom: 15,
      overflow: 'unset !important',
      '&:focus': {
        background: 'transparent',
      },
    },
    paper: {
      borderRadius: '8px',
      marginTop: 8,
    },
    list: {
      padding: 0,
      background: 'white',
      '& li': {
        fontWeight: 200,
        paddingTop: 12,
        paddingBottom: 12,
      },
    },
  }));

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
      list: minimalSelectClasses.list,
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
          minWidth: '122px',
          height: 42,
        }}
        disableUnderline
        classes={{ root: minimalSelectClasses.select }}
        displayEmpty
        MenuProps={menuProps}
        IconComponent={iconComponent}
        onChange={handleChange}
        value={val}
      >
        <MenuItem value="available">
          <Status available>available</Status>
        </MenuItem>
        <MenuItem value="busy">
          <Status>busy</Status>
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export const ArtistAvailabilitySelector = (props) => (
  <MinimalSelect {...props} />
);

ArtistAvailabilitySelector.propTypes = {
  onChange: PropTypes.func,
};

ArtistAvailabilitySelector.defaultProps = {
  onChange: () => undefined,
};
