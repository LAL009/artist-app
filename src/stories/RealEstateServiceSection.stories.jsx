import React from "react";
import RealEstateServiceSection from "../components/controls/RealEstateServiceSection";

export default {
    title: 'RealEstatePage/RealEstateServiceSection',
    component: RealEstateServiceSection
}

const Template = (args) => (
    <RealEstateServiceSection {...args}/>
)

export const Default = Template.bind({})