import React from 'react';
import { WallFiltersForm } from '../components/controls/WallFiltersForm';

export default {
  title: 'Marketplace/WallFiltersForm',
  component: WallFiltersForm,
};

const Template = (args) => <WallFiltersForm {...args} />;

export const Default = Template.bind({});
