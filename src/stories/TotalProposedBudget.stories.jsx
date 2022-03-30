import React from "react";
import TotalProposedBudget from "../components/controls/TotalProposedBudget";

export default {
    title: 'Example/TotalProposedBudget',
    component: TotalProposedBudget
}

const Template = (args) => (
    <TotalProposedBudget
        textTotalBudget='$12,300 - $15,000'
        {...args}
    />
)

export const Default = Template.bind({})