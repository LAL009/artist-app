import { useEffect } from 'react';
import { Container, Grid, Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import _ from 'lodash';
import { Helmet } from 'react-helmet';

import FeaturedImagesSection from 'src/components/controls/FeaturedImagesSection';
import WallDetailsSection from 'src/components/controls/WallDetailsSection';
import WallCitySection from 'src/components/controls/WallCitySection';
import ProcessSection from 'src/components/controls/ProcessSection';
import SubmitProposalDesktop from 'src/components/controls/SubmitProposalDesktop';
import { formatDate } from 'src/utility';
import {
  WALL_GET_DETAILS_LOADING,
  WALL_GET_DETAILS_SUCCESS,
  WALL_GET_DETAILS_FAIL,
  WALL_GET_DETAILS_IDLE,
} from 'src/constants/listingConstants';

import {
  selectListingDetails,
  requestStatus,
} from 'src/reducers/listingReducers';

import { getListing } from 'src/actions/listingActions';
import SubmitProposalPopup from 'src/components/controls/SubmitProposalPopup';

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
          filter: 'blur(210px)',
          position: 'absolute',
          right: 0,
          top: {
            xs: '600px',
            sm: '140px',
          },
          zIndex: 0,
        }}
      ></Box>

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

const Wall = (props) => {
  const { listingDetails } = props;
  const {
    colorscheme,
    amenities,
    subtitle,
    heading,
    paragraph,
    createdAt,
    approved,
    approvedAt,
  } = listingDetails.data;

  const coordinates = _.get(listingDetails.data, 'location.coordinates', []);
  const info = _.get(listingDetails.data, 'info', {});
  const address = _.get(listingDetails.data, 'address', {});
  const featuredImageLocation = _.get(
    listingDetails.data,
    '[featureImage][0][location]',
    ''
  );

  if (listingDetails.status === WALL_GET_DETAILS_LOADING) {
    return <PageSkeleton />;
  }

  if (listingDetails.status === WALL_GET_DETAILS_SUCCESS) {
    return (
      <Box
        sx={{
          position: 'relative',
          overflowX: 'hidden',
        }}
      >
        <Helmet>
          <title>{`${listingDetails.data.info.title} | WXLLSPACE`}</title>
          <meta property="og:image" content="/OGimages/Wall-Listing.png" />
        </Helmet>

        {/* blur */}
        <Box
          sx={{
            width: '200px',
            height: '200px',
            backgroundColor: '#00C8C8',
            filter: 'blur(160px)',
            position: 'absolute',
            left: '50%',
            top: '1400px',
            zIndex: 1,
          }}
        ></Box>

        {/* blur */}
        <Box
          sx={{
            width: '268px',
            height: '268px',
            backgroundColor: '#B14EFF',
            filter: 'blur(160px)',
            position: 'absolute',
            right: '50%',
            top: '450px',
            zIndex: 1,
          }}
        ></Box>

        <Container
          maxWidth="xl"
          sx={{
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 2 }}
          >
            {/* Featured Images Section */}
            <Grid item xs={12} md={12} lg={12} xl={12}>
              <Box sx={{ paddingTop: '8rem' }}>
                <FeaturedImagesSection
                  featureImage={featuredImageLocation}
                  coordinates={coordinates}
                  createdAt={createdAt}
                />
              </Box>
            </Grid>

            {/* Wall Details Section */}
            <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
              <Box sx={{ paddingTop: '2rem' }}>
                <WallDetailsSection
                  title={info.title}
                  location={address.city + ', ' + address.state}
                  dateListed={
                    approved ? formatDate(approvedAt || createdAt) : null
                  }
                  surfaceArea={info.size + ' sqft'}
                  totalProposal={null}
                  wallArea={`${info.height} ft H x ${info.width} ft L`}
                  brick={info.construction}
                  scope={info.location_of_wall}
                  direction={info.direction_face}
                  categoryBuilding={info.property_type}
                  colorscheme={colorscheme}
                  textDescription={info.description}
                  amenities={amenities}
                  condition={info.condition}
                  coordinates={coordinates}
                  textAdditionalInfo={info.additional_info}
                  wallType={info.wall_type}
                  artStyles={info.art_styles}
                  createdAt={createdAt}
                  markerData={{
                    type: 'FeatureCollection',
                    features: [
                      {
                        type: 'Feature',
                        geometry: {
                          type: 'Point',
                          coordinates: coordinates,
                        },
                        properties: {
                          title: address.city,
                          image: null,
                        },
                      },
                    ],
                  }}
                />
              </Box>
            </Grid>
            {/* Submit Proposal Form Section */}
            {
              <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                <Box
                  sx={{
                    display: {
                      xs: 'none',
                      md: 'block',
                      lg: 'block',
                      xl: 'block',
                    },
                    marginTop: '40px',
                  }}
                >
                  <SubmitProposalDesktop />
                </Box>

                <Box
                  sx={{
                    display: {
                      xs: 'block',
                      md: 'none',
                      lg: 'none',
                      xl: 'none',
                    },
                  }}
                >
                  <SubmitProposalPopup />
                </Box>
              </Grid>
            }
          </Grid>
        </Container>

        {/* Wall City and Process Section */}
        <Box
          sx={{
            marginTop: {
              xs: '40px',
              md: '60px',
            },
            backgroundColor: '#101a36',
            padding: {
              xl: '5rem',
              lg: '24px',
              md: '24px',
              sm: '24px',
              xs: '24px',
            },
            overflowX: 'hidden',
          }}
        >
          <Box
            sx={{
              backgroundColor: '#101a36',
            }}
          >
            {/* wall city section */}
            {subtitle && heading && paragraph && (
              <Box
                sx={{
                  paddingTop: {
                    xs: '5rem',
                    sm: '5rem',
                    md: '8rem',
                    xl: '8rem',
                    lg: '8rem',
                  },
                }}
              >
                {/* TODO replace dummy data */}
                <WallCitySection
                  wallImageSrc="https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/6187defd7b61585064796bb4/img/image-77639@1x.png"
                  subtitle={subtitle}
                  title={heading}
                  description={paragraph}
                />
              </Box>
            )}

            {/* process section */}
            <Box
              sx={{
                marginTop: '8rem',
                paddingBottom: {
                  xs: '5rem',
                  sm: '5rem',
                  md: '8rem',
                  xl: '8rem',
                  lg: '8rem',
                  position: 'relative',
                },
              }}
            >
              {/* blur */}
              <Box
                sx={{
                  width: '268px',
                  height: '268px',
                  backgroundColor: '#B14EFF',
                  filter: 'blur(230px)',
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
                  filter: 'blur(180px)',
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  zIndex: 2,
                }}
              ></Box>

              <ProcessSection
                processImageSrc="/mural-completed.svg"
                subtitle="Streamline The Process"
                title="Why WXLLSPACE"
                description="Stop wasting precious time and energy pounding the streets. Browse the latest new mural commissions before they hit the open market. Connect directly with owners and decision-makers who control the space."
              />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }

  if (
    listingDetails.status === WALL_GET_DETAILS_FAIL &&
    listingDetails.error.includes('Listing not found')
  ) {
    return <Redirect to="/404" />;
  }

  return <PageSkeleton />;
};

const ConnectedWallScreen = () => {
  const listingDetails = useSelector(selectListingDetails);
  const getListingDetailsRequestStatus = useSelector(requestStatus);

  const dispatch = useDispatch();
  let { slug: paramSlug } = useParams();

  useEffect(() => {
    if (getListingDetailsRequestStatus === WALL_GET_DETAILS_IDLE) {
      dispatch(getListing(paramSlug));
    }
    const { slug } = listingDetails.data;
    if (slug && paramSlug !== slug) {
      dispatch(getListing(slug));
    }
  }, [paramSlug, listingDetails, getListingDetailsRequestStatus, dispatch]);

  if (listingDetails.status === WALL_GET_DETAILS_SUCCESS) {
    return <Wall listingDetails={listingDetails} />;
  }

  if (
    listingDetails.status === WALL_GET_DETAILS_FAIL &&
    listingDetails.error.includes('Listing not found')
  ) {
    return <Redirect to="/404" />;
  }

  return <PageSkeleton />;
};

export default ConnectedWallScreen;
