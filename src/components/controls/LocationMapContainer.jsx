import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, {
  Popup,
  FlyToInterpolator,
  NavigationControl,
} from 'react-map-gl';
import { ArtistSummaryPopUp } from 'src/components/controls/ArtistSummaryPopUp';
import { WallSummaryPopup } from 'src/components/controls/WallSummaryPopup';
import { ArtistMarker } from 'src/components/controls/ArtistMarker';
import { WallMarker } from 'src/components/controls/WallMarker';
import LocationMarker, {
  LocationMarkerNoPhoto,
  LocationMarkerNoCity,
} from 'src/components/controls/LocationMarker';
import './override-mapbox-gl.css';

const LocationMapContainer = (props) => {
  const {
    latitude,
    longitude,
    zoom,
    width,
    height,
    dragPan,
    dragRotate,
    scrollZoom,
    touchZoom,
    touchRotate,
    doubleClickZoom,
    keyboard,
    isRounded,
    mapStyle,
    markerData,
    pitch,
    bearing,
    minZoom,
    maxZoom,
    isMapNavControl = false,
    navigationStyle = { top: 20, right: 10 },
    onWheel = () => true,
  } = props;

  const [viewport, setViewport] = useState({
    latitude: latitude,
    longitude: longitude,
    zoom: zoom,
  });

  const [selectedIndex, setSelectedIndex] = useState(null);

  const markers = {
    artist: ArtistMarker,
    wall: WallMarker,
    location: LocationMarker,
    locationNoPhoto: LocationMarkerNoPhoto,
    locationNoCity: LocationMarkerNoCity,
  };

  const generateMarkersData = (geoJSONData) => {
    const markersData = [];
    for (const feature of geoJSONData.features) {
      markersData.push({
        latitude: feature.geometry.coordinates[1],
        longitude: feature.geometry.coordinates[0],
        image: feature.properties.image,
        title: feature.properties.title,
        name: feature.properties.name,
        info: feature.properties.info,
        address: feature.properties.address,
        isReady: feature.properties.isReady,
        marker: markers[feature.properties.entity],
        entity: feature.properties.entity,
        slug: feature.properties.slug,
      });
    }

    return markersData;
  };

  const setSelectedMarker = (index) => {
    setSelectedIndex(index);
  };

  const closePopup = () => {
    setSelectedMarker(null);
  };

  const openPopup = (index) => {
    setSelectedMarker(index);
  };

  const CustomPopup = ({ index, markers, closePopup }) => {
    return (
      <Popup
        latitude={markers[index].latitude}
        longitude={markers[index].longitude}
        onClose={closePopup}
        closeButton={true}
        closeOnClick={false}
        offsetTop={-45}
      >
        {markers[index].entity === 'artist' && (
          <ArtistSummaryPopUp
            imgURL={markers[index].image}
            userName={markers[index].name}
            city={markers[index].address.city}
            state={markers[index].address.state}
            approved={markers[index].isReady}
          />
        )}

        {markers[index].entity === 'wall' && (
          <WallSummaryPopup
            wallImage={markers[index].image}
            title={markers[index].info.title}
            city={markers[index].address.city}
            state={markers[index].address.state}
            dimension={markers[index].info.dimension}
            locationOfWall={markers[index].info.locationOfWall}
            slug={markers[index].slug}
          />
        )}
      </Popup>
    );
  };

  const renderMarkers = () => {
    return generateMarkersData(markerData).map((data, index) => {
      const Marker = data.marker;
      return (
        <Marker
          zoom={viewport.zoom}
          longitude={data.longitude}
          latitude={data.latitude}
          offsetLeft={-20}
          offsetTop={-10}
          locationText={data.title}
          markerImageSrc={data.image}
          key={index}
          index={index}
          onClick={openPopup}
        />
      );
    });
  };

  useEffect(() => {
    if (isRounded) {
      // make the map container created by mapboxgl to be rounded
      const mapContainer = document.querySelector('div.mapboxgl-map');
      mapContainer.style.borderRadius = '20px';
    }

    setViewport({
      transitionInterpolator: new FlyToInterpolator({ speed: 0 }),
      transitionDuration: 0,
      latitude,
      longitude,
      zoom,
      bearing,
      pitch,
    });
  }, [bearing, pitch, latitude, longitude, isRounded, zoom]);

  return (
    <ReactMapGL
      {...viewport}
      minZoom={minZoom}
      maxZoom={maxZoom}
      onWheel={onWheel}
      dragPan={dragPan}
      dragRotate={dragRotate}
      scrollZoom={scrollZoom}
      touchZoom={touchZoom}
      touchRotate={touchRotate}
      doubleClickZoom={doubleClickZoom}
      keyboard={keyboard}
      width={width}
      height={height}
      onViewportChange={setViewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      mapOptions={{
        style:
          mapStyle === 'light-v10'
            ? process.env.REACT_APP_MAPBOX_STYLE_LIGHT
              ? process.env.REACT_APP_MAPBOX_STYLE_LIGHT
              : `mapbox://styles/mapbox/${mapStyle}`
            : process.env.REACT_APP_MAPBOX_STYLE_DARK
            ? process.env.REACT_APP_MAPBOX_STYLE_DARK
            : `mapbox://styles/mapbox/${mapStyle}`,
      }}
      pitch={pitch}
      bearing={bearing}
    >
      {renderMarkers()}
      {selectedIndex !== null && (
        <CustomPopup
          index={selectedIndex}
          markers={generateMarkersData(markerData)}
          closePopup={closePopup}
        />
      )}
      {isMapNavControl && <NavigationControl style={navigationStyle} />}
    </ReactMapGL>
  );
};

LocationMapContainer.propTypes = {
  longitude: PropTypes.number.isRequired,
  latitude: PropTypes.number.isRequired,
  zoom: PropTypes.number,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  isUsePhoto: PropTypes.bool,
  dragPan: PropTypes.bool,
  dragRotate: PropTypes.bool,
  scrollZoom: PropTypes.bool,
  touchZoom: PropTypes.bool,
  touchRotate: PropTypes.bool,
  doubleClickZoom: PropTypes.bool,
  keyboard: PropTypes.bool,
  pitch: PropTypes.number,
  bearing: PropTypes.number,
  mapStyle: PropTypes.string,
  markerData: PropTypes.shape({
    features: PropTypes.arrayOf(
      PropTypes.shape({
        geometry: PropTypes.shape({
          coordinates: PropTypes.arrayOf(PropTypes.number.isRequired)
            .isRequired,
          type: PropTypes.string.isRequired,
        }).isRequired,
        properties: PropTypes.shape({
          title: PropTypes.string,
          image: PropTypes.string,
          entity: PropTypes.string,
        }).isRequired,
        type: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

LocationMapContainer.defaultProps = {
  dragPan: false,
  dragRotate: false,
  scrollZoom: false,
  touchZoom: false,
  touchRotate: false,
  doubleClickZoom: false,
  keyboard: false,
  pitch: 65,
  bearing: 0,
  zoom: 12,
  mapStyle: 'dark-v10',
};

export default LocationMapContainer;
