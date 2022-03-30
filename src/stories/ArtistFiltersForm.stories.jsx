import React from 'react';
import { ArtistFiltersForm } from '../components/controls/ArtistFiltersForm';

export default {
  title: 'Marketplace/ArtistFiltersForm',
  component: ArtistFiltersForm,
};

const Template = (args) => <ArtistFiltersForm {...args} />;

export const Default = Template.bind({});

Default.args = {};
