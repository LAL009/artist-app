import React, { useContext, useState, useEffect } from 'react';
import { MapContext } from 'react-map-gl';
import styled from 'styled-components';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  markerContainer: {
    [theme.breakpoints.down('sm')]: {
      minWidth: '50px',
      height: '62px',
      padding: '5.3px 5px',
    },
  },
  markerImage: {
    [theme.breakpoints.down('sm')]: {
      width: '40px',
      height: '40px',
    },
  },
}));

export const ArtistMarker = (props) => {
  const { markerImageSrc, longitude, latitude, zoom, onClick, index } = props;
  const [markerSize, setMarkerSize] = useState(0.4);
  const context = useContext(MapContext);
  const [x, y] = context.viewport.project([longitude, latitude]);

  const classes = useStyles();

  useEffect(() => {
    if (zoom >= 1) setMarkerSize(0.5);
    if (zoom >= 10) setMarkerSize(0.8);
  }, [zoom]);

  const markerStyle = {
    position: 'absolute',
    left: x,
    top: y,
    transform: `translate(-50%, -50%) scale(${markerSize}, ${markerSize})`,
  };

  const handleClick = () => {
    onClick(index);
  };

  return (
    <Pin
      className={classes.markerContainer}
      style={markerStyle}
      onClick={handleClick}
    >
      <UserImage
        src={markerImageSrc}
        className={classes.markerImage}
        onClick={handleClick}
      />
    </Pin>
  );
};

export default ArtistMarker;

const Pin = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 80px;
  height: 100px;
  margin-top: -0.07px;
  padding: 8.9px 7.9px;
  background-image: url('${process.env
    .REACT_APP_S3_BASE_URL}/assets/artist-marker-pin.png');
  background-size: contain;
  background-repeat: no-repeat;
`;

const UserImage = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 10000px;
`;
