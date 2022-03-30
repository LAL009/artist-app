import React from 'react';
import PortfolioCard from '../components/controls/PortfolioCard';

export default {
  title: 'Example/PortfolioCard',
  component: PortfolioCard,
};

const Template = (args) => (
  <PortfolioCard
    portfolioImage="https://anima-uploads.s3.amazonaws.com/projects/61686e84d5059459cbead39b/releases/617f74fd43122ccd822c7f73/img/featured-image@2x.png"
    styleWrap={{ width: '450px' }}
    {...args}
  />
);

export const Default = Template.bind({});
