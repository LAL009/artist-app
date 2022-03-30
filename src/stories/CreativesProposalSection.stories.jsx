import React from "react";
import CreativesProposalSection from "../components/controls/CreativesProposalSection";

export default {
    title: 'CreativesPage/CreativesProposalSection',
    component: CreativesProposalSection
}

const Template = (args) => (
    <CreativesProposalSection {...args}/>
)

export const Default = Template.bind({})