import React from 'react';
import { Box, Typography, CardMedia, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  sectionHeading: {
    [theme.breakpoints.only('xs')]: {
      fontSize: '34px',
      fontWeight: 900,
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(94.83deg, #FFFFFF 26.58%, #A984FF 44.93%, #64E1DC 54.77%, #6FC2FF 64.82%, #FFFFFF 78.91%) !important',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
      textTransform: 'capitalize',
      lineHeight: '1.3',
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: '50px',
      fontWeight: 900,
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(94.83deg, #FFFFFF 26.58%, #A984FF 44.93%, #64E1DC 54.77%, #6FC2FF 64.82%, #FFFFFF 78.91%) !important',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
      textTransform: 'capitalize',
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '55px',
      fontWeight: 900,
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      lineHeight: '1.3',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(94.83deg, #FFFFFF 26.58%, #A984FF 44.93%, #64E1DC 54.77%, #6FC2FF 64.82%, #FFFFFF 78.91%) !important',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
      textTransform: 'capitalize',
    },
    [theme.breakpoints.only('lg')]: {
      fontSize: '60px',
      fontWeight: 900,
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      lineHeight: '1.3',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(94.83deg, #FFFFFF 26.58%, #A984FF 44.93%, #64E1DC 54.77%, #6FC2FF 64.82%, #FFFFFF 78.91%) !important',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
      textTransform: 'capitalize',
    },
    [theme.breakpoints.only('xl')]: {
      fontSize: '60px',
      fontWeight: 900,
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      lineHeight: '1.3',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(94.83deg, #FFFFFF 26.58%, #A984FF 44.93%, #64E1DC 54.77%, #6FC2FF 64.82%, #FFFFFF 78.91%) !important',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
      textTransform: 'capitalize',
    },
  },
}));

const RealEstateHeadingSection = () => {
  const classes = useStyles();

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url('${process.env.REACT_APP_S3_BASE_URL}/assets/real-estate-heading-section-background-image.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '865.67px',
          width: '100%',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        <CardMedia
          component="img"
          image={`${process.env.REACT_APP_S3_BASE_URL}/assets/heading-section-shadow-overlay.svg`}
          sx={{
            position: 'absolute',
            bottom: '-5px',
            left: 0,
            right: 0,
            zIndex: 1,
          }}
        />

        {/* blur */}
        <Box
          sx={{
            width: '268px',
            height: '268px',
            backgroundColor: '#6AB3DF',
            filter: 'blur(80px)',
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
          }}
        ></Box>

        {/* blur */}
        <Box
          sx={{
            width: '268px',
            height: '268px',
            backgroundColor: '#00C8C8',
            filter: 'blur(130px)',
            position: 'absolute',
            right: 0,
            top: '60%',
            transform: 'translateY(-60%)',
            zIndex: 2,
          }}
        ></Box>

        <Box
          sx={{
            maxWidth: '1016px',
            width: '100%',
            margin: 'auto auto',
            position: 'relative',
            zIndex: 3,
            textAlign: 'center',
          }}
        >
          {/* subtitle */}
          <Typography
            sx={{
              fontFamily: 'var(--font-family-montserrat)',
              fontWeight: '700',
              color: '#64E1DC',
              fontSize: '24px',
              textAlign: 'center',
              letterSpacing: 0,
              marginBottom: '16px',
            }}
          >
            The easiest way to get a mural on your building
          </Typography>

          {/* title */}
          <Typography
            className={classes.sectionHeading}
            varient="h1"
            component="h1"
            sx={{
              marginBottom: '32px',
            }}
          >
            Give your business an edge over your neighboring competition
          </Typography>

          {/* description */}
          <Typography
            component="p"
            sx={{
              fontFamily: 'var(--font-family-montserrat)',
              fontWeight: '600',
              color: 'var(--white)',
              fontSize: {
                xs: '18px',
                md: '24px',
              },
              lineHeight: '1.75',
              textAlign: 'center',
              marginBottom: '24px',
            }}
          >
            Find both local an international artist who are available and within
            budget for any project today!
          </Typography>

          {/* button */}
          <Button
            sx={{
              padding: '22.9px 30.4px',
              backgroundColor: '#a945f7',
              borderRadius: '1000px',
              boxShadow: '12px 12px 27px #a845f77d',
              color: 'var(--white)',
              fontFamily: 'var(--font-family-montserrat)',
              fontSize: '14px',
              fontWeight: '600',
              fontStyle: 'normal',
              lineHeight: '1.4',
              marginBottom: '24px',
              '&:hover': {
                backgroundColor: '#a945f7',
              },
              maxWidth: '268px',
              width: '100%',
              textAlign: 'center',
            }}
          >
            Post your wall!
          </Button>
        </Box>
      </Box>

      {/* logo */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 4,
          marginTop: '-40px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CardMedia
            component="img"
            image={`${process.env.REACT_APP_S3_BASE_URL}/assets/placeholders/highwoods.png`}
            sx={{
              maxWidth: {
                xs: '200px',
                lg: '278px',
              },
              height: 'auto',
              flex: '0 1 auto',
              margin: '10px 30px',
            }}
          />

          <CardMedia
            component="img"
            image={`${process.env.REACT_APP_S3_BASE_URL}/assets/placeholders/millcreek.svg`}
            sx={{
              maxWidth: {
                xs: '200px',
                lg: '300px',
              },
              height: 'auto',
              flex: '0 1 auto',
              margin: '10px 30px',
            }}
          />

          <CardMedia
            component="img"
            image={`${process.env.REACT_APP_S3_BASE_URL}/assets/placeholders/cappelli.png`}
            sx={{
              maxWidth: {
                xs: '200px',
                lg: '300px',
              },
              height: 'auto',
              flex: '0 1 auto',
              margin: '10px 30px',
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default RealEstateHeadingSection;
