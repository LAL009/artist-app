import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Box } from '@mui/system';

import { MarketplaceWallCard } from './MarketplaceWallCard';

export const WallCardListSection = (props) => {
  const { wxlls } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '20px',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        paddingTop: '1rem',
        paddingBottom: '12rem',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(40px)',
        overflowY: 'auto',
        scrollbarWidth: 'thin',
        scrollbarColor: 'var(--white)',
        '&::-webkit-scrollbar': {
          width: '4.65px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#FFFFFF',
          borderRadius: '100px',
          width: '4.65px',
        },
      }}
    >
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
    </Box>
  );
};

WallCardListSection.propTypes = {
  artists: PropTypes.array.isRequired,
};
WallCardListSection.defaultProps = {
  artists: [],
};
