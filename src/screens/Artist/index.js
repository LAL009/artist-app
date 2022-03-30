import { useEffect } from 'react';
import { Container, Grid, Skeleton } from '@mui/material';
import { useParams, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/system';
import { Helmet } from 'react-helmet';
import _ from 'lodash';

import { getArtistDetails } from 'src/actions/artistActions';
import {
  ARTIST_GET_DETAILS_IDLE,
  ARTIST_GET_DETAILS_SUCCESS,
  ARTIST_GET_DETAILS_FAIL,
} from 'src/constants/artistConstants';
import {
  selectArtistDetails,
  requestStatus,
} from 'src/reducers/artistReducers';
import LocationSection from './../../components/controls/LocationSection';
import PortfolioSection from './../../components/controls/PortfolioSection';
import ArtistDetailsSection from './../../components/controls/ArtistDetailsSection';

const PageSkeleton = () => {
  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      {/* blur */}
      <Box
        sx={{
          width: '268px',
          height: '268px',
          backgroundColor: '#6AB3DF',
          filter: 'blur(150px)',
          position: 'absolute',
          left: 0,
          top: {
            xs: '190px',
            sm: '270px',
          },
          zIndex: 0,
        }}
      ></Box>

      {/* blur */}
      <Box
        sx={{
          width: '268px',
          height: '268px',
          backgroundColor: '#B14EFF',
          filter: 'blur(150px)',
          position: 'absolute',
          right: 0,
          top: {
            xs: '600px',
            sm: '140px',
          },
          zIndex: 0,
        }}
      ></Box>

      {/** skeleton */}
      <Container maxWidth="xl">
        <Box
          sx={{
            height: '100vh',
            paddingTop: '8rem',
            paddingBottom: '8rem',
            paddingLeft: {
              xs: '4rem',
              sm: '8rem',
              md: '8rem',
              lg: '8rem',
              xl: '8rem',
            },
            paddingRight: {
              xs: '4rem',
              sm: '8rem',
              md: '8rem',
              lg: '8rem',
              xl: '8rem',
            },
          }}
        >
          <Skeleton
            sx={{ bgcolor: 'grey.900' }}
            variant="text"
            width={'100wh'}
            height={'20px'}
          />
          <Skeleton
            sx={{ bgcolor: 'grey.900' }}
            variant="text"
            width={'100wh'}
            height={'20px'}
          />
          <Skeleton
            sx={{ bgcolor: 'grey.900' }}
            variant="text"
            width={'100wh'}
            height={'20px'}
          />
        </Box>
      </Container>
    </Box>
  );
};

export const ArtistScreen = (props) => {
  const { artistDetails } = props;
  const artistName = _.get(artistDetails, 'data.artistName', null);
  const name = _.get(artistDetails, 'data.name', null);

  return (
    <Box
      sx={{
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      <Helmet>
        <title>{`${artistName || name} | WXLLSPACE`}</title>
        <meta property="og:image" content="/OGimages/Artist-Landing-Page.png" />
      </Helmet>

      {/* blur */}
      <Box
        sx={{
          width: '268px',
          height: '268px',
          backgroundColor: '#6AB3DF',
          filter: 'blur(150px)',
          position: 'absolute',
          left: {
            xs: '-240px',
            sm: 0,
          },
          top: {
            xs: '0',
            sm: '270px',
          },
          zIndex: 0,
        }}
      ></Box>

      {/* blur */}
      <Box
        sx={{
          width: '268px',
          height: '268px',
          backgroundColor: '#B14EFF',
          filter: 'blur(150px)',
          position: 'absolute',
          right: {
            xs: '-240px',
            sm: 0,
          },
          top: {
            xs: '600px',
            sm: '140px',
          },
          zIndex: 0,
        }}
      ></Box>

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={0}>
          {/* Artist Details Section */}
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Box
              sx={{
                marginTop: '8rem',
              }}
            >
              <ArtistDetailsSection artist={artistDetails.data} />
            </Box>
          </Grid>

          {/* Artist Location Section */}
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Box
              sx={{
                marginTop: '8rem',
              }}
            >
              <LocationSection artist={artistDetails.data} />
            </Box>
          </Grid>

          {/* Artist Portfolio Section */}
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Box
              sx={{
                marginTop: '8rem',
                marginBottom: '8rem',
              }}
            >
              <PortfolioSection gallery={artistDetails.data.gallery} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const ConnectedArtistScreen = () => {
  const artistDetails = useSelector(selectArtistDetails);
  const getArtistDetailsRequestStatus = useSelector(requestStatus);

  const dispatch = useDispatch();
  let { name } = useParams();

  useEffect(() => {
    if (getArtistDetailsRequestStatus === ARTIST_GET_DETAILS_IDLE) {
      dispatch(getArtistDetails(name));
    }
    if (name !== artistDetails.slug) {
      dispatch(getArtistDetails(name));
    }
  }, [name, artistDetails, getArtistDetailsRequestStatus, dispatch]);

  if (getArtistDetailsRequestStatus === ARTIST_GET_DETAILS_SUCCESS) {
    return <ArtistScreen artistDetails={artistDetails} />;
  }

  if (
    getArtistDetailsRequestStatus === ARTIST_GET_DETAILS_FAIL &&
    artistDetails.error.includes('Artist not found')
  ) {
    return <Redirect to="/404" />;
  }

  return <PageSkeleton />;
};

export default ConnectedArtistScreen;
