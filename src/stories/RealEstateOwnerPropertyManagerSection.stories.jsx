import React from "react";

import { RealEstateOwnerPropertyManagerSection } from "../components/controls/RealEstateOwnerPropertyManagerSection";

export default {
  title: "Example/RealEstateOwnerPropertyManagerSection",
  component: RealEstateOwnerPropertyManagerSection,
};

const Template = (args) => <RealEstateOwnerPropertyManagerSection {...args} />;

export const Section = Template.bind({});
