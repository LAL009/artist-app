import React from "react";
import RealEstateCostSection from "../components/controls/RealEstateCostSection";

export default {
    title: 'RealEstatePage/RealEstateCostSection',
    component: RealEstateCostSection
}

const Template = (args) => (
    <RealEstateCostSection {...args}/>
)

export const Default = Template.bind({})