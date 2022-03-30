import React from 'react';
import WallFiltersSelect from '../components/controls/WallFiltersSelect';
import { Box } from '@mui/material';

export default {
  title: 'Example/WallFiltersSelect',
  component: WallFiltersSelect,
};

const Template = (args) => (
  <Box
    sx={{
      p: '20px',
      background: '#FFFFFF',
    }}
  >
    <WallFiltersSelect
      defaultValue="Material"
      placeholder="Material"
      list={['data', 'data']}
      {...args}
    />
  </Box>
);

export const Default = Template.bind({});
