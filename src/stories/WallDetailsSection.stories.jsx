import React from 'react';
import WallDetailsSection from '../components/controls/WallDetailsSection';

export default {
  title: 'Example/WallDetailsSection',
  component: WallDetailsSection,
};

const Template = (args) => <WallDetailsSection {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Maple Avenue',
  location: 'NEW ROCHELLE, NY',
  dateListed: 'September 1st, 2021',
  totalProposal: '1-5',
  surfaceArea: '300 sqft',
  wallArea: '30 ft H x 30 ft L',
  brick: 'brick',
  scope: 'Outdoor',
  direction: 'North',
  categoryBuilding: 'Industrial',
  palleteImageSrc:
    'https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/6188bbd34b232d685f2fbe96/img/palette-2@1x.png',
  textDescription:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  textAdditionalInfo:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  dataAccomodations: {
    wifi: 'Wifi',
    bathroom: 'Bathroom',
    electricity: 'Outdoor Electricity',
    parking: 'Parking: Paid or Free',
    SlopSink: 'Slop Sink',
    ladder: 'Ladder Available',
  },
  condition: 'Great completely clear and free of all debris',
  wallType: 'Primed Wall',
  longitude: -73.935242,
  latitude: 40.73061,
  markerData: {
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
        },
      },
    ],
  },
};
