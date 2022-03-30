import React from 'react';
import { Container, Box, Grid, Typography, CardMedia } from '@mui/material';
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
      textAlign: 'left',
      textTransform: 'capitalize',
    },
    [theme.breakpoints.only('sm')]: {
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
      textAlign: 'left',
      textTransform: 'capitalize',
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '55px',
      fontWeight: 900,
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      lineHeight: '90px',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(94.83deg, #FFFFFF 26.58%, #A984FF 44.93%, #64E1DC 54.77%, #6FC2FF 64.82%, #FFFFFF 78.91%) !important',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'left',
      textTransform: 'capitalize',
    },
    [theme.breakpoints.only('lg')]: {
      fontSize: '55px',
      fontWeight: 900,
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      lineHeight: '90px',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(94.83deg, #FFFFFF 26.58%, #A984FF 44.93%, #64E1DC 54.77%, #6FC2FF 64.82%, #FFFFFF 78.91%) !important',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'left',
      textTransform: 'capitalize',
    },
    [theme.breakpoints.only('xl')]: {
      fontSize: '55px',
      fontWeight: 900,
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      lineHeight: '90px',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(94.83deg, #FFFFFF 26.58%, #A984FF 44.93%, #64E1DC 54.77%, #6FC2FF 64.82%, #FFFFFF 78.91%) !important',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'left',
      textTransform: 'capitalize',
    },
  },
}));

const WallCitySection = (props) => {
  const classes = useStyles();
  const { wallImageSrc, subtitle, title, description } = props;

  return (
    <Container maxWidth="xl">
      <Grid
        container
        spacing={2}
        sx={{
          alignItems: 'center',
        }}
      >
        <Grid item xs={12} sm={5} lg={4}>
          <Box
            sx={{
              padding: {
                xs: '0 0 50px 0',
                sm: '0 0 0 0',
              },
            }}
          >
            <CardMedia
              component="img"
              image={wallImageSrc}
              sx={{
                borderRadius: '20px',
                objectFit: 'cover',
                height: {
                  xs: '494px',
                  md: '632px',
                },
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={7} lg={8}>
          <Box
            sx={{
              padding: {
                xs: '0 0 0 0',
                sm: '0 0 0 30px',
                lg: '0 0 0 112px',
              },
            }}
          >
            <Box
              sx={{
                fontFamily: 'var(--font-family-montserrat)',
                fontWeight: '700',
                color: 'var(--aqua-pearl)',
                fontSize: {
                  xs: '16px',
                  sm: '24px',
                },
                letterSpacing: 0,
              }}
            >
              {subtitle}
            </Box>
            <Box
              className={classes.sectionHeading}
              sx={{
                marginBottom: '10px',
                display: 'inline-block',
              }}
            >
              {title}
            </Box>

            <Box
              sx={{
                width: {
                  lg: '591.32px',
                  xl: '591.32px',
                },
              }}
            >
              <Typography
                component={'p'}
                sx={{
                  fontFamily: 'var(--font-family-montserrat)',
                  fontWeight: '400',
                  color: 'var(--white)',
                  fontSize: {
                    xs: '14px',
                    md: '16px',
                  },
                  letterSpacing: '0',
                  lineHeight: {
                    xs: '33.6px',
                    md: '38.4px',
                  },
                }}
              >
                {description}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WallCitySection;
