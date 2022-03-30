import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';

export const ArtistClientLogo = (props) => {
  const { clients } = props;

  return (
    <Box
      sx={{ display: 'flex', gap: 5, flexWrap: 'wrap', alignItems: 'center' }}
    >
      {clients.map((item) => (
        <Logo key={item.id} {...item} />
      ))}
    </Box>
  );
};

const Logo = ({ url, height }) => {
  const useStyles = makeStyles((theme) => ({
    logo: {
      [theme.breakpoints.only('xs')]: {
        height: (50 / 100) * height,
      },
      [theme.breakpoints.only('sm')]: {
        height,
      },
      [theme.breakpoints.only('md')]: {
        height,
      },
      [theme.breakpoints.only('lg')]: {
        height,
      },
      [theme.breakpoints.only('xl')]: {
        height,
      },
    },
  }));

  const classes = useStyles();

  return <img alt="client" className={classes.logo} src={url} />;
};

ArtistClientLogo.propTypes = {
  clients: PropTypes.array,
};

ArtistClientLogo.defaultProps = {
  clients: [],
};
