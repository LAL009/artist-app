import React from "react";
import RealEstateCanvasSection from "../components/controls/RealEstateCanvasSection";

export default {
    title: 'RealEstatePage/RealEstateCanvasSection',
    component: RealEstateCanvasSection
}

const Template = (args) => (
    <RealEstateCanvasSection {...args}/>
)

export const Default = Template.bind({})