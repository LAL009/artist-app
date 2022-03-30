import React from 'react';
import StudyCaseHeadingSection from '../components/controls/StudyCaseHeadingSection';

export default {
  title: 'StudyCasePage/StudyCaseHeadingSection',
  component: StudyCaseHeadingSection,
};

const Template = (args) => (
  <StudyCaseHeadingSection
    title="DAAS for the Stillwater"
    subtitle="Stanford, CT"
    backgroundImageSrc="https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/618fab30a6d4b744c33eb00c/img/cropped-stillwater-flowers-daas-longshot-2@1x.png"
    organizationImageSrc="https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/618fab30a6d4b744c33eb00c/img/image-77629@2x.png"
    {...args}
  />
);

export const Default = Template.bind({});
