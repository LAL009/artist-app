import React from "react";
import CreativesSearchSection from "../components/controls/CreativesSearchSection";

export default {
    title: 'CreativesPage/CreativesSearchSection',
    component: CreativesSearchSection
}

const Template = (args) => (
    <CreativesSearchSection
        {...args}
    />
)

export const Default = Template.bind({})