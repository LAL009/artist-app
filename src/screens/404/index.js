import React from 'react';
import styled from 'styled-components';
import { Typography, Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  heading: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '40px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '60px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '70px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '120px',
    },
  },

  subHeading: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '30px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '40px',
    },
  },
}));

const PageNotFound = (props) => {
  const classes = useStyles();
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          width: '100vw',
          height: {
            xs: '100vh',
            sm: '720px',
            lg: '100vh',
          },
          background: `url('${process.env.REACT_APP_S3_BASE_URL}/assets/404/paint_splatter.png') no-repeat top 70px left, url('${process.env.REACT_APP_S3_BASE_URL}/assets/404/paint_splatter1.png') no-repeat top 110px right, url('${process.env.REACT_APP_S3_BASE_URL}/assets/404/background_shadow.png') no-repeat top right`,
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateAreas: {
              xs: `'right' 'left'`,
              sm: `'left right'`,
            },
            gridColumnGap: '21px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            paddingTop: {
              xs: '0',
              sm: '130px',
              md: '200px',
              lg: '280px',
            },
            paddingBottom: {
              xs: '0',
              sm: '130px',
              md: '200px',
            },
          }}
        >
          <Box
            sx={{
              width: 'auto',
              justifySelf: 'center',
            }}
          >
            <AstronautHelmet
              src={`${process.env.REACT_APP_S3_BASE_URL}/assets/404/Astro.png`}
            />
          </Box>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            sx={{
              gridArea: 'left',
              width: {
                xs: '325px',
                sm: '375px',
                md: '450px',
                lg: '682px',
              },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                width: 'auto',
                marginBottom: ' 24px',
                fontFamily: 'var(--font-family-montserrat)',
                fontWeight: '700',
                color: '#6ab3df',
                fontSize: '40px',
                letterSpacing: 0,
              }}
            >
              Sorry...
            </Typography>
            <SectionHeading classNames={classes.heading}>
              That page is not here.
            </SectionHeading>
            <SectionHeading classNames={classes.subHeading}>
              Error 404
            </SectionHeading>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

const SectionHeading = ({ children, classNames }) => {
  return (
    <Typography
      className={classNames}
      sx={{
        fontWeight: 900,
        fontFamily: 'var(--font-family-montserrat)',
        fontStyle: 'normal',
        lineHeight: '1',
        letterSpacing: '-0.05em',
        backgroundImage:
          'linear-gradient(94.83deg, #FFFFFF 26.58%, #A984FF 44.93%, #64E1DC 54.77%, #6FC2FF 64.82%, #FFFFFF 78.91%) !important',
        backgroundSize: '100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'left',
        paddingBottom: '24px',
      }}
    >
      {children}
    </Typography>
  );
};

const AstronautHelmet = styled.img`
  width: 467px;
  @media (max-width: 1025px) {
    width: 350px;
  }
  @media (max-width: 900px) {
    width: 250px;
  }
`;

export default PageNotFound;
