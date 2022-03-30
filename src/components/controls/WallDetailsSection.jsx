import React from 'react';
import { Box, Container, Grid, Typography, CardMedia } from '@mui/material';
import {
  Wash,
  LocalParking,
  Wifi,
  FormatPaint,
  PresentToAll,
  BlurLinear,
  FormatColorFill,
  Shower,
} from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import _ from 'lodash';

import { isDueDate } from 'src/utility/index';

import WallDetailsHeadInfo from './WallDetailsHeadInfo';
import WallDetailsBoxIcon from './WallDetailsBoxIcon';
import WallDetailsTextIcon from './WallDetailsTextIcon';
import WallDetailsLabel from './WallDetailsLabel';
import FeaturedImagesLabel from './FeaturedImagesLabel';

const amenitiesInfo = [
  {
    id: 'Bathroom',
    label: 'Bathroom',
    icon: 'icon-wall-detail-bathroom.svg',
    type: 'img',
  },
  {
    id: 'Electricity',
    label: 'Electricity',
    icon: 'icon-outdoor-electricity.svg',
    type: 'img',
  },
  {
    id: 'Ladder Available',
    label: 'Ladder Available',
    icon: 'icon-ladder.svg',
    type: 'img',
  },
  { id: 'Paid Parking', label: 'Paid Parking', icon: LocalParking },
  { id: 'Primed', label: 'Primed', icon: '' },
  { id: 'Slop Sink', label: 'Slop Sink', icon: Wash },
  { id: 'Wifi', label: 'Wifi', icon: Wifi },
  {
    id: 'Extra Paint Available',
    label: 'Extra Paint Available',
    icon: FormatPaint,
  },
  { id: 'Free Parking', label: 'Free Parking', icon: LocalParking },
  {
    id: 'Outdoor Electricity',
    label: 'Outdoor Electricity',
    icon: 'icon-outdoor-electricity.svg',
    type: 'img',
  },
  { id: 'Paint Gun', label: 'Paint Gun', icon: FormatColorFill },
  { id: 'Power Washer', label: 'Power Washer', icon: Shower },
  { id: 'Projector', label: 'Projector', icon: PresentToAll },
  { id: 'Scaffolding', label: 'Scaffolding', icon: BlurLinear },
];

const useStyles = makeStyles((theme) => ({
  sectionHeading: {
    [theme.breakpoints.only('xs')]: {
      fontSize: '32px',
      fontWeight: 900,
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(90deg, rgba(169,132,255,1) 0%, rgba(100,225,220,1) 49%, rgba(111,194,255,1) 100%) !important',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'left',
      textTransform: 'capitalize',
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: '32px',
      fontWeight: 900,
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(90deg, rgba(169,132,255,1) 0%, rgba(100,225,220,1) 49%, rgba(111,194,255,1) 100%) !important',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'left',
      textTransform: 'capitalize',
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '60px',
      fontWeight: 900,
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      lineHeight: '90px',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(90deg, rgba(169,132,255,1) 0%, rgba(100,225,220,1) 49%, rgba(111,194,255,1) 100%) !important',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'left',
      textTransform: 'capitalize',
    },
    [theme.breakpoints.only('lg')]: {
      fontSize: '60px',
      fontWeight: 900,
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      lineHeight: '90px',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(90deg, rgba(169,132,255,1) 0%, rgba(100,225,220,1) 49%, rgba(111,194,255,1) 100%) !important',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'left',
      textTransform: 'capitalize',
    },
    [theme.breakpoints.only('xl')]: {
      fontSize: '60px',
      fontWeight: 900,
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      lineHeight: '90px',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(90deg, rgba(169,132,255,1) 0%, rgba(100,225,220,1) 49%, rgba(111,194,255,1) 100%) !important',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'left',
      textTransform: 'capitalize',
    },
  },
}));

const WallDetailsSection = (props) => {
  const {
    title,
    location,
    dateListed,
    totalProposal,
    surfaceArea,
    wallArea,
    brick,
    scope,
    categoryBuilding,
    textDescription,
    textAdditionalInfo,
    condition,
    wallType,
    artStyles,
    createdAt,
    acceptCrypto,
  } = props;
  const classes = useStyles();

  const direction = _.get(props, 'direction', '');
  const colorscheme = _.get(props, 'colorscheme', []);
  const amenities = _.get(props, 'amenities', []);

  return (
    <Container>
      {/* top head */}
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'row nowrap',
          alignItems: 'center',
        }}
      >
        {/* title */}
        <Box
          sx={{
            flex: '0 1 auto',
            pr: {
              xs: '12px',
              sm: '23px',
            },
          }}
        >
          <Typography
            className={classes.sectionHeading}
            variant="h1"
            sx={{
              marginBottom: {
                xs: '12px',
                sm: '0',
              },
              display: 'inline-block',
            }}
          >
            {title}
          </Typography>
        </Box>

        {/* just listed */}
        {isDueDate(createdAt) && (
          <Box
            sx={{
              flex: '0 1 auto',
            }}
          >
            <FeaturedImagesLabel text="Just listed" />
          </Box>
        )}

        {/* ethereum */}
        {acceptCrypto && (
          <Box
            sx={{
              flex: '0 1 auto',
              pl: {
                xs: '8px',
                sm: '23px',
              },
            }}
          >
            <CardMedia
              src="/icon-ethereum.svg"
              component="img"
              sx={{
                height: '59.81px',
              }}
            />
          </Box>
        )}
      </Box>

      {/* head info */}
      <WallDetailsHeadInfo
        styleWrap={{
          marginBottom: {
            xs: '24px',
            md: '52.73px',
          },
        }}
        textLocation={location}
        textListed={dateListed}
        textTotalProposal={totalProposal}
      />

      {/* box icon list */}
      <Grid
        sx={{
          marginBottom: {
            xs: '40px',
            md: '60px',
          },
        }}
        container
        spacing={{
          xs: 2,
          md: 4,
        }}
      >
        <Grid item xs={6} sm={4} md={3}>
          <WallDetailsBoxIcon
            iconImageSrc="https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/6188bbd34b232d685f2fbe96/img/frame-2@2x.svg"
            text={surfaceArea}
            popoverText="Available to paint"
          />
        </Grid>

        <Grid item xs={6} sm={4} md={3}>
          <WallDetailsBoxIcon
            iconImageSrc="https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/6188bbd34b232d685f2fbe96/img/full-screen-2@2x.svg"
            text={wallArea}
            popoverText="Wall dimensions"
          />
        </Grid>

        <Grid item xs={6} sm={4} md={3}>
          <WallDetailsBoxIcon
            iconImageSrc="https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/6188bbd34b232d685f2fbe96/img/tower-crane@2x.svg"
            text={brick}
            popoverText="Construction type"
          />
        </Grid>

        <Grid
          item
          md={3}
          sx={{
            display: {
              xs: 'none',
              sm: 'none',
              md: 'block',
            },
          }}
        ></Grid>

        <Grid item xs={6} sm={4} md={3}>
          <WallDetailsBoxIcon
            iconImageSrc="https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/6188bbd34b232d685f2fbe96/img/frame-5@2x.svg"
            text={scope}
            popoverText="Location of wall"
          />
        </Grid>

        <Grid item xs={6} sm={4} md={3}>
          <WallDetailsBoxIcon
            iconImageSrc="https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/6188bbd34b232d685f2fbe96/img/frame-3@2x.svg"
            text={direction.charAt(0).toUpperCase() + direction.slice(1)}
            popoverText="Direction wall faces"
          />
        </Grid>

        <Grid item xs={6} sm={4} md={3}>
          <WallDetailsBoxIcon
            iconImageSrc="https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/6188bbd34b232d685f2fbe96/img/frame-4@2x.svg"
            text={categoryBuilding}
            popoverText="Property type"
          />
        </Grid>
      </Grid>

      {/* color pallete */}
      <Box
        sx={{
          marginBottom: {
            xs: '40px',
            md: '60px',
          },
        }}
      >
        <Typography
          component="h3"
          sx={{
            color: '#FFFFFF',
            fontFamily: 'var(--font-family-montserrat)',
            fontSize: {
              xs: '16px',
              md: '24px',
            },
            fontWeight: '700',
            fontStyle: 'normal',
            marginBottom: {
              xs: '16px',
              md: '24px',
            },
          }}
        >
          Suggested Color Palette
        </Typography>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            '& div:first-child': {
              borderTopLeftRadius: '8px',
              borderBottomLeftRadius: '8px',
            },
            '& div:last-child': {
              borderTopRightRadius: '8px',
              borderBottomRightRadius: '8px',
            },
          }}
        >
          {colorscheme.map((item) => {
            const width = 100 / colorscheme.length;
            return (
              <div
                style={{
                  width: `${width}%`,
                  height: '30px',
                  backgroundColor: item,
                }}
              />
            );
          })}
        </Box>
      </Box>

      {/* description */}
      <Box
        sx={{
          marginBottom: {
            xs: '40px',
            md: '60px',
          },
        }}
      >
        <Typography
          component="h3"
          sx={{
            color: '#FFFFFF',
            fontFamily: 'var(--font-family-montserrat)',
            fontSize: {
              xs: '16px',
              md: '24px',
            },
            fontWeight: '700',
            fontStyle: 'normal',
            marginBottom: {
              xs: '16px',
              md: '24px',
            },
          }}
        >
          Description
        </Typography>

        <Typography
          sx={{
            color: '#FFFFFF',
            fontFamily: 'var(--font-family-montserrat)',
            fontSize: '12px',
            fonWeight: '400',
            fontStyle: 'normal',
            lineHeight: '28.2px',
          }}
        >
          {textDescription}
        </Typography>
      </Box>

      {/* additional info */}
      {textAdditionalInfo && (
        <Box
          sx={{
            marginBottom: {
              xs: '40px',
              md: '60px',
            },
          }}
        >
          <Typography
            component="h3"
            sx={{
              color: '#FFFFFF',
              fontFamily: 'var(--font-family-montserrat)',
              fontSize: {
                xs: '16px',
                md: '24px',
              },
              fontWeight: '700',
              fontStyle: 'normal',
              marginBottom: {
                xs: '16px',
                md: '24px',
              },
            }}
          >
            Additional Info
          </Typography>

          <Typography
            sx={{
              color: '#FFFFFF',
              fontFamily: 'var(--font-family-montserrat)',
              fontSize: '12px',
              fonWeight: '400',
              fontStyle: 'normal',
              lineHeight: '28.2px',
            }}
          >
            {textAdditionalInfo}
          </Typography>
        </Box>
      )}

      {/* accomodations */}
      <Box
        sx={{
          marginBottom: {
            xs: '40px',
            md: '60px',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexFlow: 'row nowrap',
            alignItems: 'baseline',
          }}
        >
          <Typography
            component="h3"
            sx={{
              color: '#FFFFFF',
              fontFamily: 'var(--font-family-montserrat)',
              fontSize: {
                xs: '16px',
                md: '24px',
              },
              fontWeight: '700',
              fontStyle: 'normal',
              marginBottom: {
                xs: '16px',
                md: '24px',
              },
            }}
          >
            Accomodations
          </Typography>

          <Typography
            sx={{
              color: '#FFFFFF',
              fontFamily: 'var(--font-family-montserrat)',
              fontSize: '12px',
              fonWeight: '400',
              fontStyle: 'normal',
              lineHeight: '28.2px',
              marginBottom: {
                xs: '16px',
                sm: '24.29px',
              },
              paddingLeft: '8px',
            }}
          >
            Available at the property
          </Typography>
        </Box>

        <Grid
          sx={{
            maxWidth: '470px',
            marginBottom: {
              xs: '40px',
              md: '60px',
            },
          }}
          container
          spacing={{
            xs: 2,
            md: 4,
          }}
        >
          {amenities.map((item) => {
            const details = amenitiesInfo.find((i) => i.id === item) || {};
            const { icon: Icon, type } = details;
            return (
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {Icon &&
                    (type === 'img' ? (
                      <CardMedia
                        component="img"
                        src={`/${Icon}`}
                        sx={{
                          width: {
                            xs: '16px',
                            md: '24px',
                          },
                          height: {
                            xs: '16px',
                            md: '24px',
                          },
                        }}
                      />
                    ) : (
                      <Icon
                        sx={{
                          width: {
                            xs: '16px',
                            md: '24px',
                          },
                          height: {
                            xs: '16px',
                            md: '24px',
                          },
                        }}
                      />
                    ))}
                  <Typography
                    component="h4"
                    sx={{
                      color: '#D8D8D8',
                      fontFamily: 'var(--font-family-montserrat)',
                      fontSize: {
                        xs: '12px',
                        md: '16px',
                      },
                      fontWeight: '300',
                      fontStyle: 'normal',
                      marginLeft: '10px',
                    }}
                  >
                    {details?.label || item}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      {/* details */}
      <Box
        sx={{
          marginBottom: {
            xs: '40px',
            md: '60px',
          },
        }}
      >
        <Typography
          component="h3"
          sx={{
            color: '#FFFFFF',
            fontFamily: 'var(--font-family-montserrat)',
            fontSize: {
              xs: '16px',
              md: '24px',
            },
            fontWeight: '700',
            fontStyle: 'normal',
            marginBottom: {
              xs: '16px',
              md: '24px',
            },
          }}
        >
          Wall Details
        </Typography>

        <WallDetailsTextIcon
          text={` ${condition}`}
          iconImageSrc="https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/6188ec2d5ccaaa2d0a5b6d4e/img/vector@2x.svg"
          styleWrap={{
            marginBottom: {
              xs: '16px',
              sm: '18px',
            },
          }}
        />

        {wallType && (
          <WallDetailsTextIcon
            text={wallType}
            iconImageSrc="https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/6188ec2d5ccaaa2d0a5b6d4e/img/vector-1@2x.svg"
            styleWrap={{
              marginBottom: {
                xs: '16px',
                sm: '18px',
              },
            }}
          />
        )}
      </Box>

      {/* interested art styles */}
      {artStyles && (
        <Box>
          <Typography
            component="h3"
            sx={{
              color: '#FFFFFF',
              fontFamily: 'var(--font-family-montserrat)',
              fontSize: {
                xs: '16px',
                md: '24px',
              },
              fontWeight: '700',
              fontStyle: 'normal',
              marginBottom: {
                xs: '16px',
                md: '24px',
              },
            }}
          >
            Interested Art Styles
          </Typography>

          <Grid container spacing={0}>
            <Grid item sm={10}>
              {artStyles?.map((item) => (
                <WallDetailsLabel
                  text={item}
                  styleWrap={{
                    margin: '0 12px 24px 0',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(60px)',
                  }}
                />
              ))}
            </Grid>
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default WallDetailsSection;
