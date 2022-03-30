import React from 'react';
import InputSelectMultiple from '../components/controls/InputSelectMultiple';

export default {
  title: 'Example/InputSelectMultiple',
  component: InputSelectMultiple,
};

const Template = (args) => (
  <InputSelectMultiple
    textLabel="Which Art style interest you? (select multiple)"
    list={[
      {
        label: '3D',
        value: '3D',
      },
      {
        label: 'Abstract',
        value: 'Abstract',
      },
      {
        label: 'Anamorphic',
        value: 'Anamorphic',
      },
      {
        label: 'Calligraphy',
        value: 'Calligraphy',
      },
      {
        label: 'Cartoon',
        value: 'Cartoon',
      },
      {
        label: 'Contemporary',
        value: 'Contemporary',
      },
      {
        label: 'Cubism',
        value: 'Cubism',
      },
      {
        label: 'Fantasy',
        value: 'Fantasy',
      },
      {
        label: 'Figurative',
        value: 'Figurative',
      },
      {
        label: 'Geometric',
        value: 'Geometric',
      },
      {
        label: 'Graffiti',
        value: 'Graffiti',
      },
      {
        label: 'Impressionist',
        value: 'Impressionist',
      },
      {
        label: 'Landscape',
        value: 'Landscape',
      },
      {
        label: 'Lettering',
        value: 'Lettering',
      },
      {
        label: 'Modern',
        value: 'Modern',
      },
      {
        label: 'Optical Illusion',
        value: 'Optical Illusion',
      },
      {
        label: 'Pop Art',
        value: 'Pop Art',
      },
      {
        label: 'Portrait',
        value: 'Portrait',
      },
      {
        label: 'Realism',
        value: 'Realism',
      },
      {
        label: 'Surrealism',
        value: 'Surrealism',
      },
      {
        label: 'Typography',
        value: 'Typography',
      },
    ]}
    getSelectedValue={console.log}
    {...args}
  />
);

export const Default = Template.bind({});
