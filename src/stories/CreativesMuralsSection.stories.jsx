import React from "react";
import CreativesMuralsSection from "../components/controls/CreativesMuralsSection";

export default {
    title: 'CreativesPage/CreativesMuralsSection',
    component: CreativesMuralsSection
}

const Template = (args) => (
    <CreativesMuralsSection
        {...args}
    />
)

export const Default = Template.bind({})