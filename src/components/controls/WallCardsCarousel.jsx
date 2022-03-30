import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { MarketplaceWallCard } from 'src/components/controls/MarketplaceWallCard';
import { Box, Fab, Typography } from '@mui/material';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';

export const WallCardsCarousel = (props) => {
  const { wxlls } = props;
  const [isOpen, setIsOpen] = React.useState();

  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '20px',
    centerMode: true,
    className: 'center',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
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
          top: isOpen ? '-330px' : '-50px',
          display: {
            xs: 'flex',
            md: 'none',
          },
          alignItems: 'center',
          transition: 'top 0.8s',
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
          bottom: isOpen ? 0 : '-310px',
          transition: 'bottom 0.8s',
        }}
      >
        <Slider {...settings}>
          {wxlls.map((wxll) => {
            const featureImageCollection = _.get(wxll, 'featureImage', []);
            const [featureImage] = featureImageCollection.filter(
              (image) => image.fieldname && image.location
            );
            const featureImageLocation = _.get(featureImage, 'location', '');
            return (
              <MarketplaceWallCard
                wallImageSrc={featureImageLocation}
                status={wxll.status}
                budget={wxll.info.offered}
                location={wxll.info.title}
                state={`${wxll.address.city}, ${wxll.address.state}`}
                area={wxll.info.size}
                dimension={wxll.info.dimension}
                slug={wxll.slug}
              />
            );
          })}
        </Slider>
      </Box>
    </Box>
  );
};

WallCardsCarousel.propTypes = {
  wxlls: PropTypes.array.isRequired,
};
WallCardsCarousel.defaultProps = {
  wxlls: [],
};
