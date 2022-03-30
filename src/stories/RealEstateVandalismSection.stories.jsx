import React from "react";
import RealEstateVandalismSection from "../components/controls/RealEstateVandalismSection";

export default {
    title: 'RealEstatePage/RealEstateVandalismSection',
    component: RealEstateVandalismSection
}

const Template = (args) => (
    <RealEstateVandalismSection {...args}/>
)

export const Default = Template.bind({})