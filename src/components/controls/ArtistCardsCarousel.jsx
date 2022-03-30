import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { ArtistCardSmall } from './../controls/ArtistCardSmall';
import { Box, Fab, Typography } from '@mui/material';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';

export const ArtistCardsCarousel = (props) => {
  const { artists } = props;
  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '30px',
    centerMode: true,
    className: 'center',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '50px',
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [isOpen, setIsOpen] = React.useState();

  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <Fab
        sx={{
          background:
            'linear-gradient(79.45deg, #5700FF 6.96%, #64E1DC 108.67%) !important',
          color: '#FFFFFF',
          position: 'absolute',
          zIndex: 9,
          left: '20px',
          top: isOpen ? '-170px' : '-50px',
          display: {
            xs: 'flex',
            md: 'none',
          },
          alignItems: 'center',
          transition: 'top 0.6s',
        }}
        variant="extended"
        onClick={() => setIsOpen(!isOpen)}
        size="small"
      >
        <ArtTrackIcon sx={{ mr: '8px' }} />
        <Typography
          sx={{
            fontFamily: 'var(--font-family-montserrat)',
            fontSize: '12px !important',
            fontWeight: '700 !important',
            fontStyle: 'normal',
            textTransform: 'capitalize',
          }}
        >
          Show List
        </Typography>
      </Fab>

      <Box
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: isOpen ? 0 : '-200px',
          transition: 'bottom 0.6s',
        }}
      >
        <Slider {...settings}>
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
                location={`${artist.address.city}, ${artist.address.state}`}
                status={artist.isReady ? `available` : 'busy'}
                rate={artist.ratePerSquareFootInUSD}
              />
            );
          })}
        </Slider>
      </Box>
    </Box>
  );
};

ArtistCardsCarousel.propTypes = {
  artists: PropTypes.array.isRequired,
};
ArtistCardsCarousel.defaultProps = {
  artists: [],
};
