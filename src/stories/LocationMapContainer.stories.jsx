import React from 'react';
import LocationMapContainer from '../components/controls/LocationMapContainer';

export default {
  title: 'Example/LocationMapContainer',
  component: LocationMapContainer,
};

const sampleLocationData = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-73.935242, 40.73061] },
      properties: {
        title: 'New York',
        description: 'Test new york data',
        image:
          'https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/61850ffff59ce59ffa02723a/img/rectangle-77@2x.png',
        entity: 'location',
      },
    },
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-73.949997, 40.650002] },
      properties: {
        title: 'Brooklyn',
        description: 'Test Brooklyn data',
        image:
          'https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/61850ffff59ce59ffa02723a/img/rectangle-77@2x.png',
        entity: 'location',
      },
    },
  ],
};
const Template = (args) => (
  <LocationMapContainer {...args}></LocationMapContainer>
);

export const Default = Template.bind({});

Default.args = {
  longitude: -73.935242,
  latitude: 40.73061,
  width: '100wh',
  height: '100vh',
  isRounded: true,
  markerData: sampleLocationData,
};

export const Square = Template.bind({});

Square.args = {
  longitude: -73.935242,
  latitude: 40.73061,
  width: '100wh',
  height: '100vh',
  mapStyle: 'light-v10',
  isRounded: false,
  markerData: sampleLocationData,
};

export const MapInteractivityEnabled = Template.bind({});
MapInteractivityEnabled.args = {
  longitude: -73.935242,
  latitude: 40.73061,
  width: '100wh',
  height: '100vh',
  dragPan: true,
  dragRotate: true,
  scrollZoom: true,
  touchZoom: true,
  touchRotate: true,
  doubleClickZoom: true,
  keyboard: true,
  markerData: sampleLocationData,
};
