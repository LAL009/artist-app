import React from "react";
import TotalEstimatedCost from "../components/controls/TotalEstimatedCost";

export default {
    title: 'Example/TotalEstimatedCost',
    component: TotalEstimatedCost
}

const Template = (args) => (
    <TotalEstimatedCost
    totalCost={13150}
        {...args}
    />
)

export const Default = Template.bind({})