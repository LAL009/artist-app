import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux';

import { EditArtistPageButton } from './EditArtistPageButton';
import { ArtistRateLabel } from './ArtistRateLabel';
import { ArtistStatusButton } from './ArtistStatusButton';
import { selectSignedInUser } from 'src/reducers/userReducers';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  name: {
    [theme.breakpoints.only('xs')]: {
      height: '25px',
      opacity: 0.7,
      letterSpacing: '0',
      lineHeight: '1.75',
      whiteSpace: 'nowrap',
      color: 'var(--white-2)',
      fontFamily: 'var(--font-family-montserrat)',
      fontSize: 'var(--font-size-m2)',
      fontWeight: 700,
      fontStyle: 'normal',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    [theme.breakpoints.only('sm')]: {
      height: '25px',
      opacity: 0.7,
      letterSpacing: '0',
      lineHeight: '1.75',
      whiteSpace: 'nowrap',
      color: 'var(--white-2)',
      fontFamily: 'var(--font-family-montserrat)',
      fontSize: 'var(--font-size-m2)',
      fontWeight: 700,
      fontStyle: 'normal',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    [theme.breakpoints.only('md')]: {
      height: '25px',
      opacity: 0.7,
      letterSpacing: '0',
      lineHeight: '1.75',
      whiteSpace: 'nowrap',
      color: 'var(--white-2)',
      fontFamily: 'var(--font-family-montserrat)',
      fontSize: 'var(--font-size-m2)',
      fontWeight: 700,
      fontStyle: 'normal',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    [theme.breakpoints.only('lg')]: {
      opacity: 0.7,
      fontFamily: 'var(--font-family-montserrat)',
      fontWeight: 700,
      color: '#ffffff33',
      fontSize: 'var(--font-size-l)',
      letterSpacing: '0',
      whiteSpace: 'nowrap',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    [theme.breakpoints.only('xl')]: {
      opacity: 0.7,
      fontFamily: 'var(--font-family-montserrat)',
      fontWeight: 700,
      color: '#ffffff33',
      fontSize: 'var(--font-size-l)',
      letterSpacing: '0',
      whiteSpace: 'nowrap',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
}));

export const ArtistProfileStatus = (props) => {
  const signedInUser = useSelector(selectSignedInUser);
  const { artist } = props;
  const classes = useStyles();

  const canUserEditDetails = (artist, signedInUser) =>
    artist.id === _.get(signedInUser, 'id', undefined);

  const artistLogoCollection = _.get(artist, 'logo', []);
  const [artistLogo] = artistLogoCollection.filter(
    (image) => image.fieldname && image.location
  );
  const artistLogoLocation = _.get(artistLogo, 'location', '');

  return (
    <Box>
      <Box
        className={classes.name}
        sx={{
          mt: {
            xs: '15px',
            sm: 0,
          },
        }}
      >
        {artist.name}
      </Box>
      <Group3294>
        {artistLogoLocation && (
          <>
            <WXLLSPACEFullLogo3
              src={artistLogoLocation}
              style={{
                marginRight: '15px',
              }}
            />
            <Line />
          </>
        )}
        <Box
          sx={{
            display: {
              xs: 'none',
              sm: 'flex',
            },
            flexFlow: 'row nowrap',
            alignItems: 'center',
          }}
        >
          <ArtistStatusButton isReady={true} />
          <Line />
        </Box>
        <ArtistRateLabel rate={artist.pricePerSquareFoot} />
        {false && canUserEditDetails(artist, signedInUser) && (
          <>
            <Line />{' '}
            <Link
              to="/update-information-artist"
              style={{ paddingLeft: '12px', textDecoration: 'none' }}
            >
              <EditArtistPageButton />
            </Link>
          </>
        )}
      </Group3294>
    </Box>
  );
};

const Line = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  border-right: 1px solid rgba(255, 255, 255, 0.32);
`;

const Group3294 = styled.div`
  display: flex;
  margin-top: 17px;
  flex-wrap: wrap;
  align-items: center;
`;

const WXLLSPACEFullLogo3 = styled.img`
  height: 41px;
  object-fit: contain;
  max-width: 145px;
`;
