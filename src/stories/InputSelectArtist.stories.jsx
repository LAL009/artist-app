import React from 'react';
import InputSelectArtist from '../components/controls/InputSelectArtist';

export default {
  title: 'Example/InputSelectArtist',
  component: InputSelectArtist,
};

const Template = (args) => (
  <InputSelectArtist
    placeholder="All Art Style"
    list={[
      'Abstract',
      'Calligraphy',
      'Cartoon',
      'Figurative',
      'Geometric',
      'Graffiti',
      'Landscape',
      'Lettering',
      'Portrait',
      'Optical Illusion',
      'Anamorphic',
      'Abstract Figuration',
      'Flowers',
      'Instagrammable',
      'Typography',
      '3D',
    ]}
    {...args}
  />
);

export const Default = Template.bind({});
