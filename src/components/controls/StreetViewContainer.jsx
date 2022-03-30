import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

const StreetViewContainer = (props) => {
  const { lat, long, zoom = 1, styleWrap } = props;
  const StreetViewID = useRef(null);

  const getStreetView = async () => {
    await new window.google.maps.StreetViewPanorama(StreetViewID.current, {
      position: { lat: lat, lng: long },
      pov: { heading: 165, pitch: 0 },
      zoom,
      addressControl: false,
      motionTrackingControl: false,
      linksControl: false,
      zoomControl: false,
      scrollwheel: false,
      clickToGo: false,
    });
  };

  useEffect(() => {
    getStreetView();
  }, [lat, long, zoom]);

  return <Box ref={StreetViewID} sx={styleWrap}></Box>;
};

export default StreetViewContainer;
