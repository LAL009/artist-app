import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import LocationMapContainer from './LocationMapContainer';
import LocationMarker from './LocationMarker';
import { LocationMarkerNoCity } from './LocationMarker';

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
      textAlign: 'center',
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
      textAlign: 'center',
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
      textAlign: 'center',
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
      textAlign: 'center',
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
      textAlign: 'center',
      textTransform: 'capitalize',
    },
  },
}));

const LocationSection = (props) => {
  const classes = useStyles();

  const { artist } = props;
  const { address } = artist;
  const artistImageCollection = _.get(artist, 'artistImage', []);
  const [artistImage] = artistImageCollection.filter(
    (image) => image.fieldname && image.location
  );
  const artistImageLocation = _.get(artistImage, 'location', '');
  const artistCoordinates = _.get(artist, 'location.coordinates');

  const locationData = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [artistCoordinates[0], artistCoordinates[1]],
        },
        properties: {
          title: address.city,
          image: artistImageLocation,
          entity: 'locationNoCity',
        },
      },
    ],
  };

  if (address === undefined) return null;

  return (
    <Box>
      <Box
        className={classes.sectionHeading}
        sx={{
          marginBottom: '20px',
        }}
      >
        Location
      </Box>

      <Box
        sx={{
          height: {
            xs: '192px',
            sm: '428px',
          },
          width: '100%',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            width: '268px',
            height: '268px',
            backgroundColor: '#B14EFF',
            filter: 'blur(150px)',
            position: 'absolute',
            left: 0,
            top: 0,
            zIndex: 0,
          }}
        ></Box>

        {/* blur */}
        <Box
          sx={{
            width: '268px',
            height: '268px',
            backgroundColor: '#6AB3DF',
            filter: 'blur(150px)',
            position: 'absolute',
            right: 0,
            bottom: 0,
            zIndex: 0,
          }}
        ></Box>

        <LocationMapContainer
          latitude={artistCoordinates[1]}
          longitude={artistCoordinates[0]}
          width={'100%'}
          height={'100%'}
          markerData={locationData}
          markerComponent={LocationMarkerNoCity}
          zoom={12.0}
          pitch={0.0}
          bearing={0.0}
          isRounded={true}
          mapStyle="dark-v10"
        />
      </Box>
    </Box>
  );
};

export default LocationSection;

LocationSection.propTypes = {
  artist: PropTypes.object.isRequired,
};
