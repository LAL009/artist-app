import React from "react";
import RealEstateWallSection from "../components/controls/RealEstateWallSection";

export default {
    title: 'RealEstatePage/RealEstateWallSection',
    component: RealEstateWallSection
}

const Template = (args) => (
    <RealEstateWallSection {...args}/>
)

export const Default = Template.bind({})