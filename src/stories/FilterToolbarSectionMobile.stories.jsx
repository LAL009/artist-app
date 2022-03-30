import React from 'react';
import { FilterToolbarSectionMobile } from './../components/controls/FilterToolbarSectionMobile';

export default {
  title: 'Marketplace/FilterToolbarSectionMobile',
  component: FilterToolbarSectionMobile,
};

const Template = (args) => (
  <FilterToolbarSectionMobile isFilterOpen {...args} />
);

export const Default = Template.bind({});

Default.args = {};
