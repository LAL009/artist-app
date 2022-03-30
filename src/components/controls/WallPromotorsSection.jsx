import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Grid, CardMedia } from '@mui/material';
import {
  CappelliLogo,
  HighwoodsLogo,
  GoldfarbLogo,
  MillcreekLogo,
  RappaportLogo,
  WellbuiltWhiteLogo,
} from '../icons/index';

const useStyles = makeStyles((theme) => ({
  wallPromotorsHeading: {
    textAlign: 'center',
    letterSpacing: '6.4px',
    lineHeight: '75px',
    whiteSpace: 'nowrap',
    textTransform: 'uppercase',
    fontSize: '20px',
    fontWeight: 'bold',
  },
}));

export const WallPromotorsSection = () => {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item lg={12}>
          <Box className={classes.wallPromotorsHeading}>walls promoted by</Box>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid container justifyContent="center" direction="row">
            <Grid
              item
              xl={12}
              lg={12}
              md={12}
              xs={12}
              spacing={10}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* logo millcreek */}
              <Box
                sx={{
                  p: {
                    xs: 2,
                  },
                  m: {
                    xs: 0,
                    sm: 2,
                  },
                  textAlign: 'center',
                  width: {
                    xs: '50%',
                    sm: '213px',
                  },
                }}
              >
                <CardMedia
                  sx={{
                    width: {
                      xs: '120px',
                      sm: '100%',
                    },
                    mx: 'auto',
                  }}
                  component="img"
                  src={`${process.env.REACT_APP_S3_BASE_URL}/assets/home/millcreek-logo-white.png`}
                />
              </Box>

              {/* logo cappeli */}
              <Box
                sx={{
                  p: {
                    xs: 2,
                  },
                  m: {
                    xs: 0,
                    sm: 2,
                  },
                  textAlign: 'center',
                  width: {
                    xs: '50%',
                    sm: '213px',
                  },
                }}
              >
                <CardMedia
                  sx={{
                    width: {
                      xs: '120px',
                      sm: '100%',
                    },
                    mx: 'auto',
                  }}
                  component="img"
                  src={`${process.env.REACT_APP_S3_BASE_URL}/assets/home/cappeli-logo-white.png`}
                />
              </Box>

              {/* logo goldfarb */}
              <Box
                sx={{
                  p: {
                    xs: 2,
                  },
                  m: {
                    xs: 0,
                    sm: 2,
                  },
                  textAlign: 'center',
                  width: {
                    xs: '50%',
                    sm: '180px',
                  },
                }}
              >
                <CardMedia
                  sx={{
                    width: {
                      xs: '120px',
                      sm: '100%',
                    },
                    mx: 'auto',
                  }}
                  component="img"
                  src={`${process.env.REACT_APP_S3_BASE_URL}/assets/home/goldfarb-logo-white.png`}
                />
              </Box>

              {/* logo highwoods */}
              <Box
                sx={{
                  p: {
                    xs: 2,
                  },
                  m: {
                    xs: 0,
                    sm: 2,
                  },
                  textAlign: 'center',
                  width: {
                    xs: '50%',
                    sm: '213px',
                  },
                }}
              >
                <CardMedia
                  sx={{
                    width: {
                      xs: '120px',
                      sm: '100%',
                    },
                    mx: 'auto',
                  }}
                  component="img"
                  src={`${process.env.REACT_APP_S3_BASE_URL}/assets/home/highwoods-logo-white.png`}
                />
              </Box>

              {/* logo rappaport */}
              <Box
                sx={{
                  p: {
                    xs: 2,
                  },
                  m: {
                    xs: 0,
                    sm: 2,
                  },
                  textAlign: 'center',
                  width: {
                    xs: '50%',
                    sm: '213px',
                  },
                }}
              >
                <CardMedia
                  sx={{
                    width: {
                      xs: '120px',
                      sm: '100%',
                    },
                    mx: 'auto',
                  }}
                  component="img"
                  src={`${process.env.REACT_APP_S3_BASE_URL}/assets/home/rappaport-logo-white.png`}
                />
              </Box>

              {/* logo wellbuilt */}
              <Box
                sx={{
                  p: {
                    xs: 2,
                  },
                  m: {
                    xs: 0,
                    sm: 2,
                  },
                  textAlign: 'center',
                  width: {
                    xs: '50%',
                    sm: '213px',
                  },
                }}
              >
                <CardMedia
                  sx={{
                    width: {
                      xs: '120px',
                      sm: '100%',
                    },
                    mx: 'auto',
                  }}
                  component="img"
                  src={`${process.env.REACT_APP_S3_BASE_URL}/assets/home/wellbuilt-logo-white.png`}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
