import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Grid } from '@mui/material';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  featuredInHeading: {
    textAlign: 'center',
    letterSpacing: '6.4px',
    lineHeight: '75px',
    whiteSpace: 'nowrap',
    textTransform: 'uppercase',
    fontSize: '20px',
    fontWeight: 'bold',
  },
}));

export const FeaturedInSection = () => {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        direction="column"
      >
        <Grid item lg={12}>
          <Box className={classes.featuredInHeading}>featured in</Box>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
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
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                m: 2,
                textAlign: 'center',
              }}
            >
              <a href="https://www.loopnet.com/learn/heres-one-way-to-get-a-mural-painted-on-your-new-high-rise-or-warehouse/1630866139/">
                <LogoImg
                  src={`${process.env.REACT_APP_S3_BASE_URL}/assets/placeholders/loop-net.png`}
                />
              </a>
            </Box>

            <Box
              sx={{
                m: 2,
                textAlign: 'center',
              }}
            >
              <a href="https://product.costar.com/home/news/shared/1828985191">
                <LogoImg
                  src={`${process.env.REACT_APP_S3_BASE_URL}/assets/placeholders/costar.png`}
                />
              </a>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

const LogoImg = styled.img`
  width: 227px;
  @media (max-width: 520px) {
    width: 156px;
  }
`;
