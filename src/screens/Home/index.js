import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import styled from 'styled-components';
import { ErrorBoundary } from 'react-error-boundary';
import useStyles from './styles';
import { SearchForm } from '../../components/controls/SearchForm';
import { FeaturedInSection } from '../../components/controls/FeaturedInSection';
import { FeaturedWallsSection } from '../../components/controls/FeaturedWallsSection';
import { FeaturedArtistsSection } from '../../components/controls/FeaturedArtistsSection';
import { WallPromotorsSection } from '../../components/controls/WallPromotorsSection';
import { FindAWallSection } from '../../components/controls/FindAWallSection';
import { HowDoesThisWorkSection } from '../../components/controls/HowDoesThisWorkSection';
import { RealEstateOwnerPropertyManagerSection } from '../../components/controls/RealEstateOwnerPropertyManagerSection';
import { NewThisWeekSection } from '../../components/controls/NewThisWeekSection';
import { FAQSection } from '../../components/controls/FAQSection';
import { homepageResults } from '../../actions/homepageActions';
import TestimonialIoSection from 'src/components/controls/TestimonialIoSection';
import { Helmet } from 'react-helmet';

function ErrorFallback({ error, resetErrorBoundary }) {
  return null;
}

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const homepage = useSelector((state) => state.homepage);
  const { loading, error, results } = homepage;

  const [hasError, setHasError] = useState(null);

  const handleError = (err) => {
    setHasError(true);
  };

  useEffect(() => {
    dispatch(homepageResults());
  }, [dispatch]);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Helmet>
          <meta
            name="description"
            content="Where art meets investment to collaborate & create for community development."
          />
          <meta
            property="og:image"
            content={`${process.env.REACT_APP_S3_BASE_URL}/assets/meta/home-OG.png`}
          />
          <title>
            Increase The Value Of Your Properties Through Wallspace | WXLLSPACE
          </title>
        </Helmet>
        <Grid container spacing={0} sx={{ overflowX: 'hidden' }}>
          <Grid
            className={classes.bannerContainer}
            item
            xs={12}
            md={12}
            lg={12}
            xl={12}
            sx={{
              position: 'relative',
              marginBottom: '5rem',
            }}
          >
            <Box className={classes.featuredInContainerGlassEffect} />

            {/* left side glassmorphism effect on Hero container */}
            <Box className={classes.leftSideHeroContainerGlassEffect} />

            {/* right side glassmorphism effect on Hero container */}
            <Box className={classes.rightSideHeroContainerGlassEffect} />

            {/* right side glassmorphism effect on Find a Wall container */}
            <Box className={classes.rightSideFindAWallContainerGlassEffect} />

            <VideoContainer>
              <video
                src={`/header-video.mp4`}
                autoPlay
                muted
                loop
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  zIndex: -2,
                  opacity: 0.4,
                }}
              ></video>
            </VideoContainer>

            <Container
              maxWidth="xl"
              sx={{
                position: 'relative',
                zIndex: 4,
                top: '50%',
                transform: 'translateY(-50%)',
                paddingTop: '80px',
              }}
            >
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                rowSpacing={5}
              >
                <Grid item>
                  <Typography
                    className={classes.bannerHeading}
                    component="h1"
                    variant="h1"
                    align="center"
                  >
                    Increase the value of your properties through{' '}
                    <span className={classes.wallspaceUnderline}>
                      wallspace
                    </span>
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography
                    className={classes.subtitle}
                    variant="subtitle1"
                    gutterBottom
                    component="p"
                    align="center"
                  >
                    Connecting real estate developers and creatives for creative
                    placemaking
                  </Typography>
                </Grid>

                <Grid item>
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid item>
                      <SearchForm />
                    </Grid>

                    <Grid item>
                      <Box
                        sx={{
                          mt: '20px',
                        }}
                      >
                        <Typography
                          sx={{
                            textAlign: 'center',
                            fontFamily: 'var(--font-family-montserrat)',
                            color: '#FFFFFF',
                            lineHeight: '1.5',
                            fontSize: {
                              xs: '14px',
                              sm: '16px',
                            },
                            fontWeight: 600,
                          }}
                        >
                          Schedule a demo with our team by{' '}
                          <a
                            style={{
                              color: '#FFFFFF',
                            }}
                            href="https://calendly.com/wxllspace/"
                          >
                            clicking here
                          </a>
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>

            <div
              style={{
                background: `linear-gradient(180deg, rgba(6, 16, 43, 0) 0%, #06102B 100%)`,
                position: 'relative',
                zIndex: 1,
              }}
            />
          </Grid>

          {/* Featured In Section */}
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            xl={12}
            sx={{
              marginTop: {
                xs: '-2rem',
                sm: '-5rem',
                md: '-5rem',
                lg: '-6rem',
                xl: '-11rem',
              },
              '@media screen and (orientation: landscape)': {
                marginTop: {
                  sm: '0rem',
                  md: '0rem',
                  lg: '-6rem',
                },
              },
              marginBottom: '5rem',
              position: 'relative',
              zIndex: 5,
            }}
          >
            <FeaturedInSection />
          </Grid>

          {/* Wall Promotors Section */}
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <WallPromotorsSection />
          </Grid>

          {/* Featured Artist Section */}
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            xl={12}
            sx={{
              marginBottom: {
                xs: 5,
                sm: 5,
                md: 10,
              },
              padding: '0 20px',
            }}
          >
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onError={handleError}
            >
              <FeaturedArtistsSection loading={loading} results={results} />
            </ErrorBoundary>
          </Grid>

          {/* find a wall section */}
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Container maxWidth="xl">
              <FindAWallSection />
            </Container>
          </Grid>

          {/* how does this work section */}
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            xl={12}
            sx={{ position: 'relative', overflowX: 'hidden' }}
          >
            {/* blur */}
            <Box
              sx={{
                width: '268px',
                height: '268px',
                backgroundColor: '#B14EFF',
                filter: 'blur(180px)',
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
              }}
            ></Box>

            <Container
              maxWidth="xl"
              sx={{
                marginTop: {
                  xs: '5rem',
                  sm: '7rem',
                  md: '7rem',
                  lg: '7rem',
                  xl: '7rem',
                },
              }}
            >
              <HowDoesThisWorkSection />
            </Container>
          </Grid>

          {/* real estate owner section */}
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Container
              maxWidth="xl"
              sx={{
                marginTop: {
                  xs: '5rem',
                  sm: '7rem',
                  md: '7rem',
                  lg: '7rem',
                  xl: '7rem',
                },
              }}
            >
              <RealEstateOwnerPropertyManagerSection />
            </Container>
          </Grid>

          {/* featured walls section */}
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            xl={12}
            sx={{
              marginBottom: '5rem',
            }}
          >
            <FeaturedWallsSection wxlls={results?.wxlls} />
          </Grid>

          {/* new this week section */}
          {/* The new this week section is disabled until we have the content ready */}
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            {/* <Box>
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onError={handleError}
            >
              <NewThisWeekSection />
            </ErrorBoundary>
            </Box> */}
          </Grid>

          {/* testimonial.io section */}
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Container
              maxWidth="xl"
              sx={{
                marginBottom: '110px',
              }}
            >
              <TestimonialIoSection />
            </Container>
          </Grid>

          {/* FAQ section */}
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Container
              maxWidth="xl"
              sx={{
                paddingBottom: {
                  xs: '2.5rem',
                  sm: '2.5rem',
                  md: '5rem',
                  lg: '5rem',
                  xl: '5rem',
                },
              }}
            >
              <FAQSection />
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;

const VideoContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    min-height: 105%;
    background: linear-gradient(0deg, rgba(6, 16, 43, 1), rgba(6, 16, 43, 0));
    z-index: 1;
  }
`;
