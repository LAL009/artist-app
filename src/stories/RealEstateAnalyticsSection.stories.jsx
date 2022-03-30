import React from "react";
import RealEstateAnalyticsSection from "../components/controls/RealEstateAnalyticsSection";

export default {
    title: 'RealEstatePage/RealEstateAnalyticsSection',
    component: RealEstateAnalyticsSection
}

const Template = (args) => (
    <RealEstateAnalyticsSection {...args}/>
)

export const Default = Template.bind({})