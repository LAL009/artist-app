import React from "react";
import CreativesHeadingSection from "../components/controls/CreativesHeadingSection";

export default {
    title: 'CreativesPage/CreativesHeadingSection',
    component: CreativesHeadingSection
}

const Template = (args) => (
    <CreativesHeadingSection {...args}/>
)

export const Default = Template.bind({})