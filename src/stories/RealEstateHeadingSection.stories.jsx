import React from "react";
import RealEstateHeadingSection from "../components/controls/RealEstateHeadingSection";

export default {
    title: 'RealEstatePage/RealEstateHeadingSection',
    component: RealEstateHeadingSection
}

const Template = (args) => (
    <RealEstateHeadingSection {...args}/>
)

export const Default = Template.bind({})