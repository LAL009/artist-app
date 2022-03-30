import React from 'react';
import _ from 'lodash';
import styled, { css } from 'styled-components';
import { makeStyles } from '@mui/styles';
import { Box, CardMedia, Typography } from '@mui/material';

import { ArtistVerifiedName } from './ArtistVerifiedName';
import { ArtistProfileMenu } from './ArtistProfileMenu';
import { ArtistProfileStatus } from './ArtistProfileStatus';
import { ArtistBio } from './ArtistBio';
import { ArtistArtStyle } from './ArtistArtStyle';
import { ArtistExhibition } from './ArtistExhibition';
import { ArtistClientLogo } from './ArtistClientLogo';
import { ArtistStatusButton } from './ArtistStatusButton';

export const ValignTextMiddle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MontserratBoldWhite16px = css`
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-l);
  font-weight: 700;
  font-style: normal;
`;

const Palette = styled.img`
  width: 100%;
  margin-top: 50px;
  height: 30px;
  object-fit: cover;
  border-radius: 4px;
`;

const ArtStyle = styled.div`
  ${ValignTextMiddle}
  ${MontserratBoldWhite16px}
  width: 89px;
  letter-spacing: 0;
  white-space: nowrap;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    position: 'relative',
  },
  contentWrapper: {
    display: 'flex',
    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.only('sm')]: {
      marginTop: 50,
      gap: 40,
    },
    [theme.breakpoints.only('md')]: {
      marginTop: 50,
      gap: 40,
    },
    [theme.breakpoints.only('lg')]: {
      marginTop: 50,
      gap: 40,
    },
    [theme.breakpoints.only('xl')]: {
      marginTop: 50,
      gap: 40,
    },
  },
  profileImage: {
    objectFit: 'cover',
    borderRadius: '24px',
    [theme.breakpoints.only('xl')]: {
      width: '306px',
      height: '541.36px',
    },
    [theme.breakpoints.only('lg')]: {
      width: '306px',
      height: '541.36px',
    },
    [theme.breakpoints.only('md')]: {
      width: '306px',
      height: '541.36px',
    },
    [theme.breakpoints.only('sm')]: {
      width: '200px',
      height: '450px',
      objectFit: 'cover',
      objectPosition: '100% 40%',
      marginBottom: '20px',
    },
    [theme.breakpoints.only('xs')]: {
      width: '100%',
      height: '450px',
      objectFit: 'cover',
      objectPosition: '100% 40%',
      marginBottom: '20px',
    },
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.only('xs')]: {
      gap: 0,
    },
    [theme.breakpoints.only('sm')]: {
      gap: 20,
    },
    [theme.breakpoints.only('md')]: {
      gap: 20,
    },
  },
  bio: {
    display: 'flex',
    gap: 10,
    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.only('sm')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.only('md')]: {
      flexDirection: 'column',
    },
  },
  artStyle: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    [theme.breakpoints.only('lg')]: {
      minWidth: '360px',
    },
    [theme.breakpoints.only('xl')]: {
      minWidth: '360px',
    },
  },
  menu: {
    [theme.breakpoints.only('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.only('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.only('md')]: {
      display: 'none',
    },
    [theme.breakpoints.only('lg')]: {
      position: 'absolute',
      right: 0,
      top: 0,
    },
    [theme.breakpoints.only('xl')]: {
      position: 'absolute',
      right: 0,
      top: 0,
    },
  },
  cryptoIcon: {
    [theme.breakpoints.down('lg')]: {
      width: 30,
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
}));

const ArtistDetailsSection = (props) => {
  const classes = useStyles();

  const { artist } = props;
  const artistImageCollection = _.get(artist, 'artistImage', []);
  const [artistImage] = artistImageCollection.filter(
    (image) => image.fieldname && image.location
  );
  const artistImageLocation = _.get(artistImage, 'location', '');

  const [isOpen, setIsOpen] = React.useState(false);

  const handlePopoverOpen = (event) => {
    setIsOpen(!isOpen);
  };

  const handlePopoverClose = () => {
    setIsOpen(false);
  };

  return (
    <Box
      className={classes.root}
      sx={{
        overflowX: 'hidden',
      }}
    >
      <Box className={classes.contentWrapper}>
        {/* artist photo */}
        <Box
          sx={{
            position: 'relative',
          }}
        >
          {/* verified icon */}
          <Box
            sx={{
              position: 'absolute',
              top: '27px',
              right: '20px',
              display: {
                xs: 'block',
                sm: 'none', // hide on dekstop, move it to right
              },
            }}
          >
            <ArtistVerifiedName>{artist.name}</ArtistVerifiedName>
          </Box>

          {/* status */}
          <Box
            sx={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              display: {
                xs: 'inline-block',
                sm: 'none', // hide on dekstop, move it to right
              },
            }}
          >
            <ArtistStatusButton isReady={artist.isReady} />
          </Box>

          <CardMedia
            component="img"
            alt={`${artist.name}`}
            title={`${artist.name}`}
            className={classes.profileImage}
            src={artistImageLocation}
          />
        </Box>

        <Box className={classes.details}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              className={classes.name}
              sx={{
                display: {
                  xs: 'block',
                  sm: 'none',
                },
                paddingRight: '15px',
              }}
            >
              {artist.artistName || artist.name}
            </Box>

            <Box
              sx={{
                position: 'relative',
                flex: '0 1 auto',
                marginRight: '12px',
                display: {
                  xs: 'none',
                  sm: 'block', // hide on mobile, move it to photo
                },
              }}
            >
              <ArtistVerifiedName verified={true}>
                {artist.artistName || artist.name}
              </ArtistVerifiedName>
            </Box>

            {/* crypto icon */}
            <Box
              sx={{
                position: 'relative',
                flex: '0 1 auto',
              }}
            >
              {/* popover */}
              <Box
                sx={{
                  position: 'absolute',
                  zIndex: 2,
                  left: {
                    xs: '-4px',
                    sm: '-10px',
                    md: '-10px',
                    lg: 0,
                    xl: '-4px',
                  },
                  right: {
                    xs: '-90px',
                    sm: '-136px',
                    md: '-134px',
                    lg: '-128px',
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
                      fontSize: {
                        xs: '8px',
                        sm: '12px',
                      },
                      fontWeight: '600',
                      fontStyle: 'normal',
                    }}
                  >
                    This artist accepts crypto
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

              {artist.acceptCryptoPayment && (
                <Crypto
                  src={`/icon-ethereum.svg`}
                  alt="ETH"
                  className={classes.cryptoIcon}
                  onClick={handlePopoverOpen}
                  onMouseLeave={handlePopoverClose}
                />
              )}
            </Box>
          </Box>

          <ArtistProfileStatus artist={artist} />

          <Box
            sx={{
              border: '1px solid rgba(255, 255, 255, 0.15)',
              my: '30px',
            }}
          ></Box>

          <Box className={classes.bio}>
            <ArtistBio>{artist.about}</ArtistBio>

            <Box className={classes.artStyle}>
              {artist.artTypes && (
                <Box>
                  <ArtStyle>Art Style</ArtStyle>
                  <ArtistArtStyle artStyles={artist.artTypes} />
                </Box>
              )}

              {artist.exhibitions && (
                <ArtistExhibition exhibitions={artist.exhibitions} />
              )}
            </Box>
          </Box>
          {artist.clients && <ArtistClientLogo clients={artist.clients} />}
        </Box>
      </Box>
      {
        // TODO: Fix this colorpalette
      }
      {false && (
        <Box>
          {artist.colorPallete &&
            artist.colorPallete.map((item) => {
              return (
                <Palette
                  src={`${process.env.REACT_APP_S3_BASE_URL}/assets/eth.png`}
                />
              );
            })}
        </Box>
      )}
    </Box>
  );
};

export default ArtistDetailsSection;

const Crypto = styled.img`
  width: 44px;
  cursor: pointer;
`;
