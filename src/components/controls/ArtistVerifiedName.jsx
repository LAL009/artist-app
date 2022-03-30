import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.only('xl')]: {
      gap: 30,
    },
    [theme.breakpoints.only('lg')]: {
      gap: 30,
    },
    [theme.breakpoints.only('md')]: {
      gap: 20,
    },
    [theme.breakpoints.only('sm')]: {
      gap: 20,
    },
    [theme.breakpoints.only('xs')]: {
      gap: 20,
    },
  },
  name: {
    [theme.breakpoints.only('xl')]: {
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      backgroundImage:
        'linear-gradient(90deg, rgba(169,132,255,1) 0%, rgba(100,225,220,1) 49%, rgba(111,194,255,1) 100%) !important',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textTransform: 'capitalize',
      fontSize: '60px',
      fontWeight: 900,
      lineHeight: '1.75',
      letterSpacing: '-0.05em',
    },
    [theme.breakpoints.only('lg')]: {
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      backgroundImage:
        'linear-gradient(90deg, rgba(169,132,255,1) 0%, rgba(100,225,220,1) 49%, rgba(111,194,255,1) 100%) !important',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textTransform: 'capitalize',
      fontSize: '60px',
      fontWeight: 900,
      lineHeight: '1.75',
      letterSpacing: '-0.05em',
    },
    [theme.breakpoints.only('md')]: {
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      backgroundImage:
        'linear-gradient(90deg, rgba(169,132,255,1) 0%, rgba(100,225,220,1) 49%, rgba(111,194,255,1) 100%) !important',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textTransform: 'capitalize',
      fontSize: '34px',
      fontWeight: 900,
      lineHeight: '1.5',
      letterSpacing: '-0.05em',
      textAlign: 'left',
    },
    [theme.breakpoints.only('sm')]: {
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      backgroundImage:
        'linear-gradient(90deg, rgba(169,132,255,1) 0%, rgba(100,225,220,1) 49%, rgba(111,194,255,1) 100%) !important',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textTransform: 'capitalize',
      fontSize: '34px',
      fontWeight: 900,
      lineHeight: '1.5',
      letterSpacing: '-0.05em',
      textAlign: 'left',
    },
    [theme.breakpoints.only('xs')]: {
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      backgroundImage:
        'linear-gradient(90deg, rgba(169,132,255,1) 0%, rgba(100,225,220,1) 49%, rgba(111,194,255,1) 100%) !important',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textTransform: 'capitalize',
      fontSize: '34px',
      fontWeight: 900,
      lineHeight: '1.3',
      letterSpacing: '-0.05em',
      textAlign: 'left',
    },
  },
  verified: {
    backgroundColor: 'var(--alto2)',
    cursor: 'pointer',
    [theme.breakpoints.only('xl')]: {
      width: 45,
      height: 45,
    },
    [theme.breakpoints.only('lg')]: {
      width: 45,
      height: 45,
    },
    [theme.breakpoints.only('md')]: {
      width: 30,
      height: 30,
    },
    [theme.breakpoints.only('sm')]: {
      width: 30,
      height: 30,
    },
    [theme.breakpoints.only('xs')]: {
      width: 30,
      height: 30,
    },
  },
}));

export const ArtistVerifiedName = (props) => {
  const classes = useStyles();

  const [isOpen, setIsOpen] = React.useState(false);

  const handlePopoverOpen = (event) => {
    setIsOpen(!isOpen);
  };

  const handlePopoverClose = () => {
    setIsOpen(false);
  };

  return (
    <Box className={classes.root}>
      <Box
        className={classes.name}
        sx={{
          display: {
            xs: 'none',
            sm: 'block',
          },
        }}
      >
        {props.children}
      </Box>

      <Box
        sx={{
          position: 'relative',
        }}
      >
        {/* popover */}
        <Box
          sx={{
            position: 'absolute',
            zIndex: 2,
            left: {
              sm: '-10px',
              md: '-10px',
              lg: 0,
              xl: 0,
            },
            right: {
              xs: '-100px',
              sm: '-150px',
              md: '-152px',
              lg: '-146px',
            },
            top: {
              xs: '-43px',
              sm: '-50px',
            },
            opacity: isOpen ? 1 : 0,
            transition: '0.4s',
          }}
        >
          <Box
            sx={{
              backgroundColor: '#FFF',
              p: '8px',
              borderRadius: '4px',
            }}
          >
            <Typography
              sx={{
                color: '#000',
                fontFamily: 'var(--font-family-montserrat)',
                lineHeight: 1.5,
                fontSize: '12px',
                fontWeight: '600',
                fontStyle: 'normal',
                fontSize: {
                  xs: '8px',
                  sm: '12px',
                },
              }}
            >
              This artist has been verified
            </Typography>
          </Box>

          {/* arrow */}
          <Box
            sx={{
              width: 0,
              height: 0,
              borderLeft: '15px solid transparent',
              borderRight: '15px solid transparent',
              borderTop: '15px solid #fff',
              marginTop: {
                xs: '-6px',
                sm: '-4px',
              },
              borderRadius: '6px',
              marginLeft: {
                xs: '3px',
                sm: '10px',
              },
            }}
          ></Box>
        </Box>

        {/* icon image */}
        {props.verified && (
          <img
            alt="verified"
            className={classes.verified}
            src={`/icon-verified.svg`}
            onClick={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          />
        )}
      </Box>
    </Box>
  );
};
