import React from 'react';
import StudyCaseOpenDateSection from '../components/controls/StudyCaseOpenDateSection';

export default {
  title: 'StudyCasePage/StudyCaseOpenDateSection',
  component: StudyCaseOpenDateSection,
};

const Template = (args) => (
  <StudyCaseOpenDateSection
    thumbnailImageSrc="https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/618fc109a708f1031491853e/img/mvi-0772-00-05-39-42-3@1x.png"
    description="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud”"
    title="Contsance S......., GGI Architcture"
    textDate="Expected open date : September 1st, 2021"
    {...args}
  />
);

export const Default = Template.bind({});
