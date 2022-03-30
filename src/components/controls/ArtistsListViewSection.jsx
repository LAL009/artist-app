import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ArtistCardSmall } from './ArtistCardSmall';
import { getStateAbbr } from 'src/utility/usaStateAbbr';

const useStyles = makeStyles({
  root: {
    '&::-webkit-scrollbar': {
      width: '4.65px',
    },
    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#FFFFFF',
      borderRadius: '100px',
      width: '4.65px',
      height: '49.37px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#FFFFFF',
    },
  },
});

const ArtistsListViewSection = (props) => {
  const { styleWrap, artists } = props;
  const classes = useStyles();

  return (
    <Box
      sx={{
        ...styleWrap,
        display: 'flex',
        flexDirection: 'column',
        rowGap: '20px',
        alignItems: 'center',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(40px)',
        height: '100vh',
        overflowY: 'scroll',
        width: '100%',
        paddingTop: '1rem',
        paddingBottom: '12rem',
        paddingRight: '20px',
        paddingLeft: '20px',
      }}
      className={classes.root}
    >
      {artists.map((artist) => {
        const artistImageCollection = _.get(artist, 'artistImage', []);
        const [artistImage] = artistImageCollection.filter(
          (image) => image.fieldname && image.location
        );
        const artistImageLocation = _.get(artistImage, 'location', '');
        return (
          <ArtistCardSmall
            key={artist.id}
            profileImage={artistImageLocation}
            name={artist.name}
            location={`${artist.address.city}, ${getStateAbbr(
              artist.address.state
            )}`}
            status={artist.isReady ? `available` : 'busy'}
            rate={artist.ratePerSquareFootInUSD}
          />
        );
      })}
    </Box>
  );
};

export default ArtistsListViewSection;

ArtistsListViewSection.propTypes = {
  artists: PropTypes.array.isRequired,
};
ArtistsListViewSection.defaultProps = {
  artists: [],
};
