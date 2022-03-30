import React from "react";
import CreativesLevelingSection from "../components/controls/CreativesLevelingSection";

export default {
    title: 'CreativesPage/CreativesLevelingSection',
    component: CreativesLevelingSection
}

const Template = (args) => (
    <CreativesLevelingSection {...args}/>
)

export const Default = Template.bind({})